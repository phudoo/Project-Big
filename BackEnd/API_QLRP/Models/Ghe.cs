using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace API_QLRP.Models
{
    public class Ghe
    {
        [Key]
        public int GheID { get; set; }

        public int PhongChieuID { get; set; }
        [ForeignKey("PhongChieuID")]
        public PhongChieu PhongChieu { get; set; }

        public string SoGhe { get; set; }

        public string TrangThai { get; set; }
    }
}
