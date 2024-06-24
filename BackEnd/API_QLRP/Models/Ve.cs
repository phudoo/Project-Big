using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API_QLRP.Models
{

    public class Ve
    {
        [Key]
        public int VeID { get; set; }

        public int NguoiDungID { get; set; }
        [ForeignKey("NguoiDungID")]
        public NguoiDung NguoiDung { get; set; }

        public int LichChieuID { get; set; }
        [ForeignKey("LichChieuID")]
        public LichChieu LichChieu { get; set; }

        public int GheID { get; set; }
        [ForeignKey("GheID")]
        public Ghe Ghe { get; set; }

        public DateTime ThoiGianMua { get; set; }

        public decimal Gia { get; set; }
    }
}
