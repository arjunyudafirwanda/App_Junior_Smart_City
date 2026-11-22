# Junior Smart City v1.0

Junior Smart City adalah aplikasi game edukasi berbasis web untuk peserta didik SMP usia 13–16 tahun. Pemain berperan sebagai urban planner yang menyelesaikan 20 misi untuk meningkatkan kualitas kota.

## Fitur

- Input nama dan usia 13–16 tahun.
- Profil tersimpan berdasarkan kombinasi nama dan usia.
- Login kembali selalu menampilkan dashboard dan peta misi terlebih dahulu.
- 20 misi dalam 5 zona: Energi Cerdas, Mobilitas Cerdas, Sampah & Ekonomi Sirkular, Lingkungan Tangguh, serta Data & Layanan Digital.
- Empat pilihan solusi pada setiap misi, cerita kontekstual, petunjuk, dan penjelasan solusi.
- Skor, bintang, level terbuka, riwayat misi, dan indikator kinerja kota.
- Penalti checkpoint setelah tiga jawaban salah berturut-turut pada misi yang sama.
- Dark mode dan light mode.
- Layout responsif untuk desktop, tablet, dan ponsel.
- Penyimpanan lokal menggunakan `localStorage`.

## Cara menjalankan

1. Ekstrak folder `Junior_Smart_City_v1.0`.
2. Buka folder tersebut di Visual Studio Code.
3. Jalankan `index.html` menggunakan ekstensi Live Server, atau buka file secara langsung pada browser modern.
4. Masukkan nama dan usia.
5. Pilih misi yang terbuka pada peta kota.
6. Baca cerita dan tantangan, pilih solusi, lalu tekan **Terapkan Solusi**.

## Struktur folder

```text
Junior_Smart_City_v1.0/
├── index.html
├── README.md
├── PANDUAN_MISI.md
└── assets/
    ├── css/style.css
    ├── js/app.js
    ├── js/missions.js
    └── images/
        ├── logo.svg
        └── favicon.svg
```

## Sistem pemain dan progres

- Kunci profil dibuat dari nama yang dinormalisasi dan usia, sehingga pemain dengan nama sama tetapi usia berbeda memiliki profil terpisah.
- Progres disimpan per profil: skor, misi terbuka, misi terakhir, misi selesai, jumlah percobaan, rangkaian kegagalan, penalti, serta nilai indikator kota.
- Ketika login kembali, aplikasi selalu menampilkan peta misi terlebih dahulu. Pemain memilih sendiri misi yang ingin dilanjutkan.
- Misi yang telah selesai dapat dibuka kembali untuk belajar. Penyelesaian ulang tidak menambah skor atau menaikkan indikator kota untuk kedua kalinya.
- Data tersimpan di browser/perangkat yang sama. Data tidak tersinkron antardevice dan dapat hilang jika data situs/browser dihapus.

## Skor

- Penyelesaian pertama: 140 poin jika benar pada percobaan pertama.
- Poin berkurang 10 untuk setiap percobaan tambahan, dengan batas minimum 50 poin.
- Bintang: 3 untuk percobaan pertama, 2 untuk percobaan kedua, dan 1 untuk percobaan berikutnya.
- Setiap tiga jawaban salah berturut-turut pada misi yang sama mengurangi maksimal 20 poin. Skor tidak pernah negatif.
- Percobaan dan rangkaian kegagalan disimpan secara terpisah untuk setiap misi dan pemain.

## Catatan teknis

- Aplikasi menggunakan HTML, CSS, dan JavaScript murni tanpa backend.
- Ikon menggunakan Font Awesome CDN; jika koneksi internet tidak tersedia, fungsi aplikasi tetap berjalan tetapi sebagian ikon mungkin tidak muncul.
- Font eksternal menggunakan Google Fonts dengan fallback font sistem.
- Tema dan progres menggunakan `localStorage`.
