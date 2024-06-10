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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure precision and scale for DanhGia in Phim
            modelBuilder.Entity<Phim>()
                .Property(p => p.DanhGia)
                .HasPrecision(18, 2); // Set appropriate precision and scale

            // Configure precision and scale for Gia in Ve
            modelBuilder.Entity<Ve>()
                .Property(v => v.Gia)
                .HasPrecision(18, 2); // Set appropriate precision and scale

        }
    }
}
