/**
 * ============================================================
 * KONFIGURASI IDENTITAS — Portfolio Owner Configuration
 * ============================================================
 * 
 * File ini berisi data identitas pemilik portofolio.
 * Edit file ini untuk mengganti informasi personal.
 * 
 * PANDUAN:
 * - Isi semua field yang bertanda [PLACEHOLDER].
 * - Jangan mengisi dengan data rekaan.
 * - Field kosong ("") akan ditampilkan sebagai placeholder di website.
 * - Hapus placeholder sebelum mempublikasikan website.
 * ============================================================
 */

const PROFILE_DATA = {
  fullName: "Awanda Rizatur Rohim",
  targetPosition: "Junior Backend Developer PHP/Laravel",
  location: "Situbondo, Jawa Timur, Indonesia",

  // Deskripsi profesional — sesuaikan dengan gaya Anda
  professionalSummary: "Seorang pengembang backend yang berfokus pada PHP dan Laravel. Memiliki pengalaman membangun aplikasi web untuk berbagai kebutuhan, mulai dari sistem peminjaman ruangan hingga arsip surat digital. Tertarik pada pengembangan solusi backend yang terstruktur, efisien, dan mudah dipelihara.",

  // Perkenalan singkat untuk hero section
  heroTagline: "Membangun solusi backend yang terstruktur dan andal.",
  heroDescription: "Berfokus pada pengembangan aplikasi web menggunakan PHP dan Laravel. Tertarik pada arsitektur backend, pengelolaan database, dan pengembangan sistem yang memudahkan proses bisnis.",

  // Kontak — isi dengan data asli
  email: "awandarr@gmail.com",
  githubUrl: "https://github.com/Awandaaaa",
  Instagram: "@awand4rr",

  // CV — isi path file atau URL ke CV asli
  // Jika menggunakan file lokal, letakkan di folder assets/cv/
  cvUrl: "assets/cv/CV.Awanda Rizatur Rohimm.pdf",
  cvFileName: "CV.Awanda Rizatur Rohim.pdf",

  // Foto profil — isi path relatif ke foto di folder assets/
  // Jika tidak ada, avatar inisial akan digunakan
  profilePhotoPath: "assets/fotosaya.jpeg",

  // About Me
  aboutMe: {
    intro: "Saya adalah seorang pengembang yang berfokus pada backend development menggunakan PHP dan Laravel. Saya memiliki ketertarikan kuat dalam membangun aplikasi web yang terstruktur dan fungsional.",
    focus: "Fokus utama saya adalah pengembangan backend — mulai dari desain database, implementasi logika bisnis, hingga integrasi dengan antarmuka pengguna. Saya percaya bahwa backend yang baik adalah fondasi dari aplikasi yang andal.",
    interests: "Saya tertarik pada pemecahan masalah melalui kode, pengembangan sistem informasi, dan terus belajar teknologi baru yang relevan dengan kebutuhan industri.",
    // Pendidikan — isi setelah dikonfirmasi
    education: {
      institution: "Politeknik Negeri Jember",
      degree: "D3 Manajemen Informatika",
      period: "2024",
      status: "Mahasiswa Akhir",
    },
  },

  // Keahlian Teknis (Skills)
  // Dapat disesuaikan atau ditambahkan sesuai kebutuhan
  skills: [
    {
      title: "Backend Development",
      icon: "server",
      iconClass: "",
      skills: [
        { name: "PHP", primary: true },
        { name: "Laravel", primary: true },
      ],
    },
    {
      title: "Frontend Development",
      icon: "layout",
      iconClass: "",
      skills: [
        { name: "HTML5", primary: false },
        { name: "CSS3", primary: false },
        { name: "JavaScript", primary: false },
        { name: "Bootstrap", primary: false },
      ],
    },
    {
      title: "Database",
      icon: "database",
      iconClass: "skill-category__icon--purple",
      skills: [
        { name: "MySQL", primary: false },
      ],
    },
    {
      title: "Desktop Development",
      icon: "monitor",
      iconClass: "skill-category__icon--purple",
      skills: [
        { name: "Java", primary: false },
        { name: "Swing", primary: false },
        { name: "NetBeans", primary: false },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "wrench",
      iconClass: "",
      skills: [
        { name: "Git", primary: false },
        { name: "GitHub", primary: false },
        { name: "VS Code", primary: false },
        { name: "Composer", primary: false },
      ],
    },
  ],
};

// Konfigurasi navigasi
const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
