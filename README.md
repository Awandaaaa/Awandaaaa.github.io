# Portofolio — Junior Backend Developer PHP/Laravel

Website portofolio profesional statis untuk menampilkan proyek, keahlian, dan informasi kontak.

## Teknologi

- **HTML5** — Struktur semantik
- **CSS3** — Custom properties, responsive design, modern dark theme
- **JavaScript (Vanilla)** — Rendering dinamis dari konfigurasi terpusat
- **Google Fonts** — Inter, JetBrains Mono

Tidak memerlukan framework, build tool, atau backend.

## Struktur Folder

```
portofolio/
├── index.html              # Halaman utama
├── css/
│   └── style.css           # Design system & semua styling
├── js/
│   └── app.js              # Logika aplikasi
├── data/
│   ├── profile.js          # Data identitas (nama, email, dll.)
│   └── projects.js         # Data proyek terpusat
├── assets/
│   ├── screenshots/        # Screenshot proyek (taruh file di sini)
│   └── cv/                 # File CV (PDF)
└── README.md               # Dokumentasi ini
```

## Cara Menjalankan Secara Lokal

### Opsi 1 — Buka langsung
Buka file `index.html` di browser.

### Opsi 2 — Menggunakan Live Server (direkomendasikan)
```bash
# Menggunakan npx
npx -y serve .

# Atau menggunakan Python
python -m http.server 8000

# Atau menggunakan PHP built-in server
php -S localhost:8000
```

### Opsi 3 — VS Code Live Server Extension
1. Install extension "Live Server" di VS Code.
2. Klik kanan `index.html` → "Open with Live Server".

## Cara Memperbarui Data

### Mengganti Nama & Kontak
Edit file `data/profile.js`:
```javascript
const PROFILE_DATA = {
  fullName: "Nama Lengkap Anda",
  email: "email@example.com",
  githubUrl: "https://github.com/username",
  linkedinUrl: "https://www.linkedin.com/in/username",
  // ...
};
```

### Mengganti Deskripsi
Edit field `professionalSummary`, `heroTagline`, `heroDescription`, dan `aboutMe` di `data/profile.js`.

### Menambah/Mengubah Proyek
Edit file `data/projects.js`. Setiap proyek memiliki struktur:
```javascript
{
  id: "nama-unik",
  title: "Nama Proyek",
  shortDescription: "Deskripsi singkat.",
  description: "Deskripsi lengkap.",
  verifiedTechnologies: ["PHP", "Laravel"],
  verifiedFeatures: ["Fitur yang sudah dibuktikan"],
  screenshotPaths: ["assets/screenshots/nama-file.png"],
  githubUrl: "https://github.com/user/repo",
  demoUrl: "",
  status: "completed",       // completed | in-progress | archived | unverified
  contribution: "Deskripsi kontribusi.",
  visibility: true,          // true = tampilkan, false = sembunyikan
  order: 1,                  // Urutan tampil
}
```

### Mengganti URL GitHub & Demo
Edit field `githubUrl` dan `demoUrl` pada setiap proyek di `data/projects.js`.
- Isi dengan URL yang benar.
- Jika belum ada, biarkan string kosong `""`.
- Jangan mengisi dengan URL palsu.

### Menambahkan Screenshot
1. Simpan file screenshot di folder `assets/screenshots/`.
2. Edit `screenshotPaths` pada proyek yang relevan di `data/projects.js`:
   ```javascript
   screenshotPaths: ["assets/screenshots/nama-proyek-1.png"],
   ```
3. Gunakan format gambar yang sudah dioptimalkan (WebP atau PNG terkompresi).

### Menghubungkan CV
1. Simpan file CV (PDF) di folder `assets/cv/`.
2. Edit `data/profile.js`:
   ```javascript
   cvUrl: "assets/cv/CV-Nama-Lengkap.pdf",
   cvFileName: "CV-Nama-Lengkap.pdf",
   ```

### Menyembunyikan Proyek
Set `visibility: false` pada proyek yang ingin disembunyikan di `data/projects.js`.

### Mengubah Urutan Proyek
Ubah nilai `order` pada setiap proyek. Nilai lebih kecil = ditampilkan lebih dulu.

## Deployment

### GitHub Pages
1. Buat repositori baru di GitHub (contoh: `portfolio`).
2. Push semua file ke repositori tersebut.
3. Buka Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder: `/ (root)`.
4. Website akan tersedia di `https://username.github.io/portfolio/`.
5. Periksa semua URL setelah deployment.

### Netlify / Vercel
1. Hubungkan repositori GitHub.
2. Tidak perlu build command (website statis).
3. Publish directory: `/` (root).

### Hosting Statis Lain
Upload semua file (index.html, css/, js/, data/, assets/) ke hosting Anda.

## Checklist Sebelum Publikasi

- [ ] Isi nama lengkap di `data/profile.js`
- [ ] Isi email asli di `data/profile.js`
- [ ] Isi URL GitHub asli di `data/profile.js`
- [ ] Isi URL LinkedIn (jika ada) di `data/profile.js`
- [ ] Isi data pendidikan di `data/profile.js`
- [ ] Tambahkan screenshot asli untuk setiap proyek
- [ ] Isi URL GitHub repositori untuk setiap proyek
- [ ] Isi URL demo (jika ada) untuk setiap proyek
- [ ] Isi kontribusi pribadi untuk setiap proyek
- [ ] Verifikasi teknologi dan fitur setiap proyek
- [ ] Update status proyek dari "unverified" ke status yang sesuai
- [ ] Tambahkan file CV (PDF) jika tersedia
- [ ] Tambahkan foto profil (opsional)
- [ ] Periksa semua tautan berfungsi
- [ ] Hapus semua placeholder `[ISI ...]`
- [ ] Periksa tampilan mobile dan desktop
- [ ] Pastikan tidak ada kredensial rahasia

## Catatan

- Website ini adalah halaman presentasi. Source code proyek tetap di repositori masing-masing.
- Jangan memasukkan kredensial, API key, atau data rahasia ke dalam file portofolio.
- Semua informasi yang ditampilkan harus berdasarkan fakta yang dapat dibuktikan.
