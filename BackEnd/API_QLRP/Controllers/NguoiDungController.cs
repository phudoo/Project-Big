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
    public class NguoiDungsController : ControllerBase
    {
        private readonly CinemaDbContext _context;

        public NguoiDungsController(CinemaDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (string.IsNullOrEmpty(request.TenNguoiDung) || string.IsNullOrEmpty(request.MatKhau))
            {
                return BadRequest("TenNguoiDung and MatKhau are required.");
            }

            var user = await _context.NguoiDungs
                .FirstOrDefaultAsync(u => u.TenNguoiDung == request.TenNguoiDung && u.MatKhau == request.MatKhau);

            if (user == null)
            {
                return Unauthorized("Invalid username or password.");
            }

            return Ok(new { Message = "Login successful.", User = user });
        }

        // GET: api/NguoiDungs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NguoiDung>>> GetNguoiDungs()
        {
            return await _context.NguoiDungs.ToListAsync();
        }

        // GET: api/NguoiDungs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NguoiDung>> GetNguoiDung(int id)
        {
            var nguoiDung = await _context.NguoiDungs.FindAsync(id);

            if (nguoiDung == null)
            {
                return NotFound();
            }

            return nguoiDung;
        }

        // POST: api/NguoiDungs
        [HttpPost]
        public async Task<ActionResult<NguoiDung>> PostNguoiDung(NguoiDung nguoiDung)
        {
            _context.NguoiDungs.Add(nguoiDung);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNguoiDung", new { id = nguoiDung.NguoiDungID }, nguoiDung);
        }

        // PUT: api/NguoiDungs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNguoiDung(int id, NguoiDung nguoiDung)
        {
            if (id != nguoiDung.NguoiDungID)
            {
                return BadRequest();
            }

            _context.Entry(nguoiDung).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NguoiDungExists(id))
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

        // DELETE: api/NguoiDungs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNguoiDung(int id)
        {
            var nguoiDung = await _context.NguoiDungs.FindAsync(id);
            if (nguoiDung == null)
            {
                return NotFound();
            }

            _context.NguoiDungs.Remove(nguoiDung);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NguoiDungExists(int id)
        {
            return _context.NguoiDungs.Any(e => e.NguoiDungID == id);
        }
    }
}
