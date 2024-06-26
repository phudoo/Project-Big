using System.ComponentModel.DataAnnotations;

namespace API_QLRP.Models
{
    public class LichChieu
    {
        [Key]
        public int LichChieuID { get; set; }

        public int PhimID { get; set; }

        public int PhongChieuID { get; set; }

        public DateTime ThoiGianChieu { get; set; }
    }
}
