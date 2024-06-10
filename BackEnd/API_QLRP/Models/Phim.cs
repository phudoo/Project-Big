using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace API_QLRP.Models
{
    public class Phim
    {
        [Key]
        public int PhimID { get; set; }

        public string TieuDe { get; set; }

        public string TheLoai { get; set; }

        public int ThoiLuong { get; set; }

        public DateTime NgayKhoiChieu { get; set; }

        public string MoTa { get; set; }

        public string DaoDien { get; set; }

        public decimal DanhGia { get; set; }
        public string PosterURL { get; set; }

        public string TrailerURL { get; set; }

    }
}
