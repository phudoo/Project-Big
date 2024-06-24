using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_QLRP.Models
{
    public class LichChieu
    {
        [Key]
        public int LichChieuID { get; set; }

        public int PhimID { get; set; }
        [ForeignKey("PhimID")]
        public Phim Phim { get; set; }

        public int PhongChieuID { get; set; }
        [ForeignKey("PhongChieuID")]
        public PhongChieu PhongChieu { get; set; }

        public DateTime ThoiGianChieu { get; set; }
    }
}
