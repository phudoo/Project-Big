using System.ComponentModel.DataAnnotations;

namespace API_QLRP.Models
{

    public class NguoiDung
    {
        [Key]
        public int NguoiDungID { get; set; }

        [Required]
        public string TenNguoiDung { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string MatKhau { get; set; }

        [Required]
        [RegularExpression("Admin|User")]
        public string VaiTro { get; set; }
    }
}
