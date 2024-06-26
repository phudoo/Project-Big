using System.ComponentModel.DataAnnotations;

namespace API_QLRP.Models
{
    public class Ve
    {
        [Key]
        public int VeID { get; set; }

        public int NguoiDungID { get; set; }

        public int LichChieuID { get; set; }

        public int GheID { get; set; }

        public DateTime ThoiGianMua { get; set; }

        public decimal Gia { get; set; }
    }
}
