using API_QLRP.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_QLRP.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_QLRP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhongChieusController : ControllerBase
    {
        private readonly CinemaDbContext _context;

        public PhongChieusController(CinemaDbContext context)
        {
            _context = context;
        }

        // GET: api/PhongChieus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PhongChieu>>> GetPhongChieus()
        {
            return await _context.PhongChieus.ToListAsync();
        }

        // GET: api/PhongChieus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PhongChieu>> GetPhongChieu(int id)
        {
            var phongChieu = await _context.PhongChieus.FindAsync(id);

            if (phongChieu == null)
            {
                return NotFound();
            }

            return phongChieu;
        }

        // POST: api/PhongChieus
        [HttpPost]
        public async Task<ActionResult<PhongChieu>> PostPhongChieu(PhongChieu phongChieu)
        {
            _context.PhongChieus.Add(phongChieu);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhongChieu", new { id = phongChieu.PhongChieuID }, phongChieu);
        }

        // PUT: api/PhongChieus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhongChieu(int id, PhongChieu phongChieu)
        {
            if (id != phongChieu.PhongChieuID)
            {
                return BadRequest();
            }

            _context.Entry(phongChieu).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhongChieuExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/PhongChieus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhongChieu(int id)
        {
            var phongChieu = await _context.PhongChieus.FindAsync(id);
            if (phongChieu == null)
            {
                return NotFound();
            }

            _context.PhongChieus.Remove(phongChieu);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PhongChieuExists(int id)
        {
            return _context.PhongChieus.Any(e => e.PhongChieuID == id);
        }
    }
}
