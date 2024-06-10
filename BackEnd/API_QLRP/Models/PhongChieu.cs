using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace API_QLRP.Models
{
    public class PhongChieu
    {
        [Key]
        public int PhongChieuID { get; set; }

        public int SoPhong { get; set; }

        public int SucChua { get; set; }

    }
}
