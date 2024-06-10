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
    public class LichChieusController : ControllerBase
    {
        private readonly CinemaDbContext _context;

        public LichChieusController(CinemaDbContext context)
        {
            _context = context;
        }

        // GET: api/LichChieus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LichChieu>>> GetLichChieus()
        {
            return await _context.LichChieus.ToListAsync();
        }

        // GET: api/LichChieus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LichChieu>> GetLichChieu(int id)
        {
            var lichChieu = await _context.LichChieus.FindAsync(id);

            if (lichChieu == null)
            {
                return NotFound();
            }

            return lichChieu;
        }

        // POST: api/LichChieus
        [HttpPost]
        public async Task<ActionResult<LichChieu>> PostLichChieu(LichChieu lichChieu)
        {
            _context.LichChieus.Add(lichChieu);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLichChieu", new { id = lichChieu.LichChieuID }, lichChieu);
        }

        // PUT: api/LichChieus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLichChieu(int id, LichChieu lichChieu)
        {
            if (id != lichChieu.LichChieuID)
            {
                return BadRequest();
            }

            _context.Entry(lichChieu).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LichChieuExists(id))
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

        // DELETE: api/LichChieus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLichChieu(int id)
        {
            var lichChieu = await _context.LichChieus.FindAsync(id);
            if (lichChieu == null)
            {
                return NotFound();
            }

            _context.LichChieus.Remove(lichChieu);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LichChieuExists(int id)
        {
            return _context.LichChieus.Any(e => e.LichChieuID == id);
        }
    }
}
