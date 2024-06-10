using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_QLRP.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ghes",
                columns: table => new
                {
                    GheID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhongChieuID = table.Column<int>(type: "int", nullable: false),
                    SoGhe = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TrangThai = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ghes", x => x.GheID);
                });

            migrationBuilder.CreateTable(
                name: "NguoiDungs",
                columns: table => new
                {
                    NguoiDungID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenNguoiDung = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MatKhau = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VaiTro = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NguoiDungs", x => x.NguoiDungID);
                });

            migrationBuilder.CreateTable(
                name: "Phims",
                columns: table => new
                {
                    PhimID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TieuDe = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TheLoai = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ThoiLuong = table.Column<int>(type: "int", nullable: false),
                    NgayKhoiChieu = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MoTa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DaoDien = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DanhGia = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false),
                    PosterURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TrailerURL = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Phims", x => x.PhimID);
                });

            migrationBuilder.CreateTable(
                name: "PhongChieus",
                columns: table => new
                {
                    PhongChieuID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SoPhong = table.Column<int>(type: "int", nullable: false),
                    SucChua = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhongChieus", x => x.PhongChieuID);
                });

            migrationBuilder.CreateTable(
                name: "Ves",
                columns: table => new
                {
                    VeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NguoiDungID = table.Column<int>(type: "int", nullable: false),
                    LichChieuID = table.Column<int>(type: "int", nullable: false),
                    GheID = table.Column<int>(type: "int", nullable: false),
                    ThoiGianMua = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gia = table.Column<decimal>(type: "decimal(18,2)", precision: 18, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ves", x => x.VeID);
                });

            migrationBuilder.CreateTable(
                name: "LichChieus",
                columns: table => new
                {
                    LichChieuID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhimID = table.Column<int>(type: "int", nullable: false),
                    PhongChieuID = table.Column<int>(type: "int", nullable: false),
                    ThoiGianChieu = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LichChieus", x => x.LichChieuID);
                    table.ForeignKey(
                        name: "FK_LichChieus_Phims_PhimID",
                        column: x => x.PhimID,
                        principalTable: "Phims",
                        principalColumn: "PhimID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LichChieus_PhimID",
                table: "LichChieus",
                column: "PhimID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ghes");

            migrationBuilder.DropTable(
                name: "LichChieus");

            migrationBuilder.DropTable(
                name: "NguoiDungs");

            migrationBuilder.DropTable(
                name: "PhongChieus");

            migrationBuilder.DropTable(
                name: "Ves");

            migrationBuilder.DropTable(
                name: "Phims");
        }
    }
}
