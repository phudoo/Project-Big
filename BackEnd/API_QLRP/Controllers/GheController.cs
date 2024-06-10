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
    public class GhesController : ControllerBase
    {
        private readonly CinemaDbContext _context;

        public GhesController(CinemaDbContext context)
        {
            _context = context;
        }

        // GET: api/Ghes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ghe>>> GetGhes()
        {
            return await _context.Ghes.ToListAsync();
        }

        // GET: api/Ghes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ghe>> GetGhe(int id)
        {
            var ghe = await _context.Ghes.FindAsync(id);

            if (ghe == null)
            {
                return NotFound();
            }

            return ghe;
        }

        // POST: api/Ghes
        [HttpPost]
        public async Task<ActionResult<Ghe>> PostGhe(Ghe ghe)
        {
            _context.Ghes.Add(ghe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGhe", new { id = ghe.GheID }, ghe);
        }

        // PUT: api/Ghes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGhe(int id, Ghe ghe)
        {
            if (id != ghe.GheID)
            {
                return BadRequest();
            }

            _context.Entry(ghe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GheExists(id))
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

        // DELETE: api/Ghes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGhe(int id)
        {
            var ghe = await _context.Ghes.FindAsync(id);
            if (ghe == null)
            {
                return NotFound();
            }

            _context.Ghes.Remove(ghe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GheExists(int id)
        {
            return _context.Ghes.Any(e => e.GheID == id);
        }
    }
}
