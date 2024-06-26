// API_QLRP.Controllers/DoanhThusController.cs
using API_QLRP.Data;
using API_QLRP.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_QLRP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoanhThusController : ControllerBase
    {
        private readonly CinemaDbContext _context;

        public DoanhThusController(CinemaDbContext context)
        {
            _context = context;
        }

        // GET: api/DoanhThus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoanhThu>>> GetDoanhThus()
        {
            return await _context.DoanhThus.ToListAsync();
        }

        // POST: api/DoanhThus
        [HttpPost]
        public async Task<ActionResult<DoanhThu>> PostDoanhThu(DoanhThu doanhThu)
        {
            _context.DoanhThus.Add(doanhThu);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDoanhThus), new { id = doanhThu.Id }, doanhThu);
        }

        // Custom method to calculate daily revenue
        [HttpGet("daily-revenue")]
        public async Task<ActionResult<IEnumerable<DoanhThu>>> GetDailyRevenue()
        {
            var dailyRevenue = await _context.Ves
                .GroupBy(v => v.ThoiGianMua.Date)
                .Select(g => new DoanhThu
                {
                    Date = g.Key,
                    TicketsSold = g.Count(),
                    TotalRevenue = g.Sum(v => v.Gia)
                })
                .ToListAsync();

            return dailyRevenue;
        }
    }
}
