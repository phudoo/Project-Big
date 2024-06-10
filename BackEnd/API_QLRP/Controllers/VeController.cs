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
    public class VesController : ControllerBase
    {
        private readonly CinemaDbContext _context;

        public VesController(CinemaDbContext context)
        {
            _context = context;
        }

        // GET: api/Ves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ve>>> GetVes()
        {
            return await _context.Ves.ToListAsync();
        }

        // GET: api/Ves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ve>> GetVe(int id)
        {
            var ve = await _context.Ves.FindAsync(id);

            if (ve == null)
            {
                return NotFound();
            }

            return ve;
        }

        // POST: api/Ves
        [HttpPost]
        public async Task<ActionResult<Ve>> PostVe(Ve ve)
        {
            _context.Ves.Add(ve);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVe", new { id = ve.VeID }, ve);
        }

        // PUT: api/Ves/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVe(int id, Ve ve)
        {
            if (id != ve.VeID)
            {
                return BadRequest();
            }

            _context.Entry(ve).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeExists(id))
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

        // DELETE: api/Ves/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVe(int id)
        {
            var ve = await _context.Ves.FindAsync(id);
            if (ve == null)
            {
                return NotFound();
            }

            _context.Ves.Remove(ve);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VeExists(int id)
        {
            return _context.Ves.Any(e => e.VeID == id);
        }
    }
}
