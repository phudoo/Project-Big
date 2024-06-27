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
    public class PhimsController : ControllerBase
    {
        private readonly CinemaDbContext _context;

        public PhimsController(CinemaDbContext context)
        {
            _context = context;
        }

        // GET: api/Phims
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Phim>>> GetPhims()
        {
            return await _context.Phims.ToListAsync();
        }

        // GET: api/Phims/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Phim>> GetPhim(int id)
        {
            var phim = await _context.Phims.FindAsync(id);

            if (phim == null)
            {
                return NotFound();
            }

            return phim;
        }

        // POST: api/Phims
        [HttpPost]
        public async Task<ActionResult<Phim>> PostPhim(Phim phim)
        {
            _context.Phims.Add(phim);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPhim", new { id = phim.PhimID }, phim);
        }

        // PUT: api/Phims/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhim(int id, Phim phim)
        {
            if (id != phim.PhimID)
            {
                return BadRequest();
            }

            _context.Entry(phim).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhimExists(id))
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

        // DELETE: api/Phims/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhim(int id)
        {
            var phim = await _context.Phims.FindAsync(id);
            if (phim == null)
            {
                return NotFound();
            }

            _context.Phims.Remove(phim);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Phims/search
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Phim>>> SearchPhim(string TieuDe)
        {
            if (string.IsNullOrEmpty(TieuDe))
            {
                return BadRequest("Tiêu đề phim không được để trống.");
            }

            var phims = await _context.Phims
                .Where(p => p.TieuDe.Contains(TieuDe))
                .ToListAsync();

            if (!phims.Any())
            {
                return NotFound();
            }

            return phims;
        }

        private bool PhimExists(int id)
        {
            return _context.Phims.Any(e => e.PhimID == id);
        }
    }
}
