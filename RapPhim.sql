CREATE DATABASE RapPhimmm;
USE RapPhimmm;
Drop DATABASE RapPhim;
-- Create table for KhachHang (Customer)
CREATE TABLE KhachHang (
    MaKhachHang INT PRIMARY KEY,
    HoTen NVARCHAR(255),
    SoDienThoai VARCHAR(20),
    Email NVARCHAR(255),
    TaiKhoan NVARCHAR(255),
    MatKhau NVARCHAR(255)
);

-- Create table for NhanVien (Employee)
CREATE TABLE NhanVien (
    MaNhanVien INT PRIMARY KEY,
    HoTen NVARCHAR(255),
    DiaChi NVARCHAR(255),
    SoDienThoai VARCHAR(20),
    Email NVARCHAR(255),
    NgaySinh DATE,
    GioiTinh NVARCHAR(10),
    TaiKhoan NVARCHAR(255),
    MatKhau NVARCHAR(255)
);

-- Create table for DichVu (Service)
CREATE TABLE DichVu (
    MaDV INT PRIMARY KEY,
    TenDV NVARCHAR(255),
    DonGia DECIMAL(10, 2),
    SoLuong INT
);

-- Create table for PhongChieu (Screening Room)
CREATE TABLE PhongChieu (
    MaPhong INT PRIMARY KEY,
    TenPhong NVARCHAR(255)
);

-- Create table for Ghe (Seat)
CREATE TABLE Ghe (
    MaGhe INT PRIMARY KEY,
    MaPhong INT,
    TenGhe NVARCHAR(255),
    FOREIGN KEY (MaPhong) REFERENCES PhongChieu(MaPhong)
);

-- Create table for TheLoaiPhim (Movie Genre)
CREATE TABLE TheLoaiPhim (
    MaLoaiPhim INT PRIMARY KEY,
    TenLoaiPhim NVARCHAR(255)
);

-- Create table for Phim (Movie) with image field
CREATE TABLE Phim (
    MaPhim INT PRIMARY KEY,
    TenPhim NVARCHAR(255),
    DaoDien NVARCHAR(255),
    DienVien NVARCHAR(255),
    TheLoai INT,
    ThoiGianKhoiChieu DATETIME,
    ThoiLuong INT,
    NgonNgu NVARCHAR(50),
    AnhPhim NVARCHAR(255),
    FOREIGN KEY (TheLoai) REFERENCES TheLoaiPhim(MaLoaiPhim)
);

-- Create table for XuatChieu (Screening)
CREATE TABLE XuatChieu (
    MaXuatChieu INT PRIMARY KEY,
    MaPhong INT,
    MaPhim INT,
    NgayChieu DATE,
    GioBatDau TIME,
    GioKetThuc TIME,
    FOREIGN KEY (MaPhong) REFERENCES PhongChieu(MaPhong),
    FOREIGN KEY (MaPhim) REFERENCES Phim(MaPhim)
);
CREATE TABLE [Ve] (
    [MaVe] int NOT NULL IDENTITY,
    [MaXuatChieu] int NOT NULL,
    [MaKhachHang] int NOT NULL,
    [MaNhanVien] int NOT NULL,
    [MaDichVu] int NOT NULL,
    [MaGhe] int NOT NULL,
    [NgayBanVe] datetime2 NOT NULL,
    [TongTien] decimal(18,2) NOT NULL,
    CONSTRAINT [PK_Ves] PRIMARY KEY ([MaVe]),
    CONSTRAINT [FK_Ves_DichVu_MaDichVu] FOREIGN KEY ([MaDichVu]) REFERENCES [DichVu] ([MaDV]) ON DELETE CASCADE, -- Đổi tên từ DichVus thành DichVu
    CONSTRAINT [FK_Ves_Ghes_MaGhe] FOREIGN KEY ([MaGhe]) REFERENCES [Ghe] ([MaGhe]) ON DELETE CASCADE,
    CONSTRAINT [FK_Ves_KhachHangs_MaKhachHang] FOREIGN KEY ([MaKhachHang]) REFERENCES [KhachHang] ([MaKhachHang]) ON DELETE NO ACTION, 
    CONSTRAINT [FK_Ves_NhanViens_MaNhanVien] FOREIGN KEY ([MaNhanVien]) REFERENCES [NhanVien] ([MaNhanVien]) ON DELETE CASCADE,
    CONSTRAINT [FK_Ves_XuatChieus_MaXuatChieu] FOREIGN KEY ([MaXuatChieu]) REFERENCES [XuatChieu] ([MaXuatChieu]) ON DELETE NO ACTION 
);




USE RapPhim;

-- Insert data into KhachHang (Customer)
INSERT INTO KhachHang (MaKhachHang, HoTen, SoDienThoai, Email, TaiKhoan, MatKhau) VALUES
(1, N'Nguyen Van A', '0912345678', 'nguyenvana@example.com', 'nguyenvana', 'password1'),
(2, N'Tran Thi B', '0987654321', 'tranthib@example.com', 'tranthib', 'password2');

-- Insert data into NhanVien (Employee)
INSERT INTO NhanVien (MaNhanVien, HoTen, DiaChi, SoDienThoai, Email, NgaySinh, GioiTinh, TaiKhoan, MatKhau) VALUES
(1, N'Le Van C', N'123 Street, City', '0901234567', 'levanc@example.com', '1980-01-01', N'Nam', 'levanc', 'password3'),
(2, N'Pham Thi D', N'456 Street, City', '0912345678', 'phamthid@example.com', '1985-02-02', N'Nu', 'phamthid', 'password4');

-- Insert data into DichVu (Service)
INSERT INTO DichVu (MaDV, TenDV, DonGia, SoLuong) VALUES
(1, N'Popcorn', 50000, 100),
(2, N'Coca-Cola', 30000, 200);

-- Insert data into PhongChieu (Screening Room)
INSERT INTO PhongChieu (MaPhong, TenPhong) VALUES
(1, N'Phong 1'),
(2, N'Phong 2');

-- Insert data into Ghe (Seat)
INSERT INTO Ghe (MaGhe, MaPhong, TenGhe) VALUES
(1, 1, N'A1'),
(2, 1, N'A2'),
(3, 2, N'B1'),
(4, 2, N'B2');

-- Insert data into TheLoaiPhim (Movie Genre)
INSERT INTO TheLoaiPhim (MaLoaiPhim, TenLoaiPhim) VALUES
(1, N'Hành động'),
(2, N'Hài');

-- Insert data into Phim (Movie) with image field
INSERT INTO Phim (MaPhim, TenPhim, DaoDien, DienVien, TheLoai, ThoiGianKhoiChieu, ThoiLuong, NgonNgu, AnhPhim) VALUES
(1, N'Phim A', N'Dao Dien A', N'Dien Vien A', 1, '2023-01-01 10:00:00', 120, N'Tiếng Việt', N'/images/phim_a.jpg'),
(2, N'Phim B', N'Dao Dien B', N'Dien Vien B', 2, '2023-02-01 11:00:00', 90, N'Tiếng Anh', N'/images/phim_b.jpg');

-- Insert data into XuatChieu (Screening)
INSERT INTO XuatChieu (MaXuatChieu, MaPhong, MaPhim, NgayChieu, GioBatDau, GioKetThuc) VALUES
(1, 1, 1, '2023-03-01', '10:00:00', '12:00:00'),
(2, 2, 2, '2023-04-01', '11:00:00', '12:30:00');

SET IDENTITY_INSERT Ve ON;
-- Thực hiện chèn giá trị vào cột tự tăng ở đây
SET IDENTITY_INSERT Ve OFF; -- Sau khi hoàn thành, đảm bảo tắt lại tùy chọn IDENTITY_INSERT

-- Insert data into Ve (Ticket)
INSERT INTO Ve (MaVe, MaXuatChieu, MaKhachHang, MaNhanVien, MaDichVu, MaGhe, NgayBanVe, TongTien) VALUES
(1, 1, 1, 1, 1, 1, '2023-03-01', 70000),
(2, 2, 2, 2, 2, 2, '2023-04-01', 90000);
 select * from Phim;