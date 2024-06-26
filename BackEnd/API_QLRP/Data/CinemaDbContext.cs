using API_QLRP.Models;
using Microsoft.EntityFrameworkCore;

namespace API_QLRP.Data
{
    public class CinemaDbContext : DbContext
    {
        public CinemaDbContext(DbContextOptions<CinemaDbContext> options) : base(options) { }

        public DbSet<NguoiDung> NguoiDungs { get; set; }
        public DbSet<Phim> Phims { get; set; } 
        public DbSet<PhongChieu> PhongChieus { get; set; }
        public DbSet<LichChieu> LichChieus { get; set; }
        public DbSet<Ghe> Ghes { get; set; }
        public DbSet<Ve> Ves { get; set; }
        public DbSet<DoanhThu> DoanhThus { get; set; } 
    }
}
