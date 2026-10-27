/**
 * ============================================================
 * DATA PROYEK TERPUSAT — Portfolio Configuration
 * ============================================================
 * 
 * File ini adalah satu-satunya tempat untuk mengelola data proyek.
 * Untuk menambah, menghapus, atau mengubah proyek, edit file ini.
 * ============================================================
 */

const PROJECTS_DATA = [
  {
    id: "booking-badminton",
    title: "Website Booking Badminton",
    shortDescription: "Website untuk pemesanan lapangan badminton secara online.",
    description: "Aplikasi web yang memungkinkan pengguna untuk memesan lapangan badminton secara online, mengecek ketersediaan jadwal, serta mengelola data pemesanan secara efisien.",
    verifiedTechnologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    verifiedFeatures: [
      "Pengecekan ketersediaan dan jadwal lapangan secara online",
      "Formulir pemesanan lapangan dan pemilihan jam bermain",
      "Manajemen tarif sewa dan rekap data pemesanan admin"
    ],
    screenshotPaths: ["assets/screenshots/bookingbadmintoon.jpeg"],
    githubUrl: "https://github.com/rnnaaa/BookingLapanganKel2",
    demoUrl: "",
    status: "completed",
    contribution: "Mengembangkan backend pemesanan, validasi jadwal agar tidak bentrok, dan integrasi database MySQL.",
    visibility: true,
    order: 1,
  },
  {
    id: "siperon",
    title: "SIPERON",
    subtitle: "Sistem Peminjaman Ruangan",
    shortDescription: "Sistem informasi untuk mengelola peminjaman ruangan secara digital.",
    description: "Aplikasi web berbasis PHP/Laravel untuk mengelola proses peminjaman ruangan di Bakorwil Malang. Mencakup alur pengajuan, kalender jadwal, dan persetujuan bertingkat.",
    verifiedTechnologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    verifiedFeatures: [
      "Pengajuan jadwal peminjaman ruangan dan fasilitas gedung secara online",
      "Sistem verifikasi dan persetujuan (approval) peminjaman oleh admin",
      "Kalender ketersediaan ruangan real-time",
      "Cetak bukti / surat izin peminjaman ruangan"
    ],
    screenshotPaths: ["assets/screenshots/siperon.jpeg"],
    githubUrl: "https://github.com/AgungFahril/SiperonBakorwilMalang",
    demoUrl: "",
    status: "completed",
    contribution: "Membangun backend Laravel, merancang alur verifikasi peminjaman bertingkat, serta relasi database pengguna dan ruangan.",
    visibility: true,
    order: 2,
  },
  {
    id: "prediksi-ketergantungan-digital",
    title: "Sistem Prediksi Skor Ketergantungan Digital",
    shortDescription: "Sistem untuk memprediksi skor ketergantungan digital dengan versi web dan mobile.",
    description: "Sistem yang menyediakan penilaian skor ketergantungan digital berbasis web (Laravel) dan mobile. Memproses parameter kuesioner pengguna untuk menghasilkan skor dan analisis.",
    verifiedTechnologies: ["PHP", "Laravel", "Bootstrap", "HTML", "CSS", "JavaScript"],
    verifiedFeatures: [
      "Kuesioner interaktif parameter ketergantungan digital",
      "Kalkulasi otomatis skor dan kategori tingkat ketergantungan",
      "Visualisasi dashboard hasil penilaian skor pengguna",
      "Penyediaan endpoint API untuk integrasi data platform web & mobile"
    ],
    screenshotPaths: ["assets/screenshots/skorprediksidigital.jpeg"],
    screenshotPathsMobile: ["assets/screenshots/ssmobile.jpeg"],
    githubUrl: "https://github.com/Noxamics/PROJEK-ACTIVA",
    githubUrlMobile: "https://github.com/Noxamics/PROJEK-ACTIVA",
    demoUrl: "",
    status: "completed",
    contribution: "Mengembangkan backend Laravel, menyusun logika kalkulasi skor kuesioner, dan merancang endpoint API untuk integrasi data.",
    visibility: true,
    order: 3,
    platforms: ["Web", "Mobile"],
  },
  {
    id: "arsip-surat-digital",
    title: "Arsip Surat Digital",
    shortDescription: "Aplikasi pengelolaan arsip surat masuk dan keluar secara digital.",
    description: "Aplikasi web berbasis PHP/Laravel untuk mengelola arsip surat digital di Bakorwil Malang. Memfasilitasi pencatatan surat masuk/keluar serta penyimpanan file digital.",
    verifiedTechnologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    verifiedFeatures: [
      "Pencatatan dan klasifikasi agenda surat masuk dan surat keluar",
      "Penyimpanan dokumen arsip digital (PDF & gambar)",
      "Pencarian cepat surat berdasarkan nomor, pengirim, dan tanggal",
      "Manajemen hak akses pengguna dan rekapitulasi agenda surat"
    ],
    screenshotPaths: ["assets/screenshots/arsipsurat.jpeg"],
    githubUrl: "https://github.com/Awandaaaa/arsipsuratbakorwilmalang",
    demoUrl: "",
    status: "completed",
    contribution: "Merancang skema database arsip, mengimplementasikan sistem upload dan pengamanan dokumen, serta filter pencarian surat.",
    visibility: true,
    order: 4,
  },
  {
    id: "aplikasi-penjualan-desktop",
    title: "Aplikasi Desktop Penjualan",
    shortDescription: "Aplikasi point-of-sale berbasis desktop untuk pengelolaan transaksi penjualan toko ATK.",
    description: "Aplikasi desktop yang dibangun menggunakan Java Swing/NetBeans untuk mengelola transaksi kasir dan stok barang pada toko ATK Fatimah.",
    verifiedTechnologies: ["Java", "Swing", "NetBeans", "MySQL"],
    verifiedFeatures: [
      "Transaksi kasir penjualan barang ATK dan kalkulasi total belanja",
      "Manajemen master data produk dan pembaruan stok otomatis",
      "Pencatatan riwayat transaksi dan rekap laporan penjualan",
      "Koneksi database lokal MySQL via JDBC"
    ],
    screenshotPaths: ["assets/screenshots/atkkasir.jpeg"],
    githubUrl: "https://github.com/Awandaaaa/ATK_Fatimah_Projek_Kel5",
    demoUrl: "",
    videoDemoUrl: "",
    status: "completed",
    contribution: "Membangun antarmuka desktop menggunakan Java Swing (NetBeans), integrasi database MySQL, dan logika kalkulasi transaksi kasir.",
    visibility: true,
    order: 5,
    platform: "Desktop",
  },
];
