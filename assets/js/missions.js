(() => {
  const missions = [
    {
      id: 1,
      zone: "energy",
      zoneName: "Energi Cerdas",
      title: "Lampu Jalan yang Bijak",
      emoji: "💡",
      difficulty: "PEMULA",
      story:
        "Warga mengeluhkan lampu jalan yang tetap menyala terang pada siang hari. Kota ingin menghemat listrik tanpa mengurangi keamanan saat malam.",
      question: "Solusi apa yang paling tepat untuk mengelola lampu jalan?",
      hint: "Pikirkan perangkat yang dapat menyesuaikan lampu dengan kondisi cahaya dan aktivitas di sekitarnya.",
      metric: "energy",
      gain: 9,
      options: [
        {
          title: "Memasang lampu LED dengan sensor cahaya",
          desc: "Lampu menyala saat gelap dan mati ketika terang.",
          correct: true,
        },
        {
          title: "Mengganti semua lampu dengan lampu yang lebih besar",
          desc: "Daya lampu meningkat agar jalan selalu sangat terang.",
        },
        {
          title: "Menyalakan semua lampu selama 24 jam",
          desc: "Lampu tidak pernah mati agar tidak perlu pengaturan.",
        },
        {
          title: "Mengurangi jumlah lampu tanpa melihat kondisi jalan",
          desc: "Beberapa titik jalan dibiarkan gelap untuk menghemat energi.",
        },
      ],
      explanation:
        "Lampu LED lebih hemat energi, sedangkan sensor cahaya mengatur nyala lampu sesuai kebutuhan. Kota tetap terang saat malam dan tidak membuang listrik pada siang hari.",
    },
    {
      id: 2,
      zone: "energy",
      zoneName: "Energi Cerdas",
      title: "Atap Sekolah Bertenaga Surya",
      emoji: "☀️",
      difficulty: "PEMULA",
      story:
        "Sekolah memiliki atap luas yang terkena sinar matahari hampir sepanjang hari. Tagihan listrik meningkat, sehingga sekolah mencari sumber energi alternatif.",
      question:
        "Teknologi apa yang dapat mengubah sinar matahari menjadi listrik?",
      hint: "Teknologi ini menggunakan panel yang biasanya dipasang di atap bangunan.",
      metric: "energy",
      gain: 9,
      options: [
        {
          title: "Panel surya",
          desc: "Sel fotovoltaik mengubah energi cahaya menjadi energi listrik.",
          correct: true,
        },
        {
          title: "Turbin diesel",
          desc: "Mesin membakar bahan bakar untuk menghasilkan listrik.",
        },
        {
          title: "Generator bensin",
          desc: "Mesin berbahan bakar fosil menjadi sumber energi utama.",
        },
        {
          title: "Lampu neon",
          desc: "Perangkat ini menggunakan listrik untuk menghasilkan cahaya.",
        },
      ],
      explanation:
        "Panel surya memanfaatkan energi matahari yang terbarukan. Atap sekolah dapat menjadi area pembangkit listrik bersih.",
    },
    {
      id: 3,
      zone: "energy",
      zoneName: "Energi Cerdas",
      title: "Gedung Hemat Pendingin",
      emoji: "🏢",
      difficulty: "MENENGAH",
      story:
        "Gedung balai kota terasa panas pada siang hari. Pendingin ruangan bekerja terus-menerus dan memakai banyak listrik.",
      question:
        "Kombinasi tindakan apa yang paling efektif mengurangi kebutuhan pendingin?",
      hint: "Pikirkan cara mengurangi panas yang masuk ke gedung sebelum menyalakan pendingin.",
      metric: "energy",
      gain: 8,
      options: [
        {
          title: "Menambah peneduh, ventilasi silang, dan pengaturan suhu",
          desc: "Desain pasif mengurangi panas dan membantu sirkulasi udara.",
          correct: true,
        },
        {
          title: "Membuka pintu kulkas gedung",
          desc: "Udara dingin dari kulkas dianggap dapat mendinginkan ruangan.",
        },
        {
          title: "Menyalakan pendingin pada suhu terendah sepanjang hari",
          desc: "Pendingin dipaksa bekerja lebih berat.",
        },
        {
          title: "Menutup seluruh ventilasi dan jendela",
          desc: "Udara tidak dapat bersirkulasi di dalam gedung.",
        },
      ],
      explanation:
        "Peneduh mengurangi panas matahari, ventilasi silang membantu aliran udara, dan pengaturan suhu yang wajar mengurangi konsumsi listrik.",
    },
    {
      id: 4,
      zone: "energy",
      zoneName: "Energi Cerdas",
      title: "Cadangan Energi Lingkungan",
      emoji: "🔋",
      difficulty: "MENENGAH",
      story:
        "Sebuah lingkungan menggunakan panel surya. Namun, listrik yang dihasilkan pada siang hari tidak selalu sama dengan kebutuhan pada malam hari.",
      question:
        "Apa cara yang tepat untuk menyimpan kelebihan energi surya agar dapat dipakai kemudian?",
      hint: "Cari perangkat penyimpan energi listrik yang dapat diisi dan digunakan kembali.",
      metric: "energy",
      gain: 9,
      options: [
        {
          title: "Menggunakan sistem baterai penyimpanan energi",
          desc: "Energi yang dihasilkan siang hari disimpan untuk digunakan saat dibutuhkan.",
          correct: true,
        },
        {
          title: "Membuang kelebihan listrik ke tanah",
          desc: "Energi dialirkan ke tanah agar tidak tersisa.",
        },
        {
          title:
            "Membiarkan panel surya terus terpasang tanpa sistem penyimpanan",
          desc: "Listrik siang hari tidak dapat digunakan pada malam hari.",
        },
        {
          title: "Menambah lampu sebanyak mungkin pada siang hari",
          desc: "Semua listrik langsung dipakai meskipun tidak diperlukan.",
        },
      ],
      explanation:
        "Baterai penyimpanan energi membantu menyeimbangkan produksi dan kebutuhan listrik, termasuk saat malam atau ketika sinar matahari berkurang.",
    },
    {
      id: 5,
      zone: "mobility",
      zoneName: "Mobilitas Cerdas",
      title: "Pagi Hari di Depan Sekolah",
      emoji: "🚌",
      difficulty: "PEMULA",
      story:
        "Setiap pagi, jalan di depan sekolah macet karena banyak kendaraan pribadi mengantar siswa. Asap kendaraan membuat udara tidak nyaman.",
      question:
        "Kebijakan apa yang dapat mengurangi jumlah kendaraan pribadi di sekitar sekolah?",
      hint: "Pertimbangkan sarana transportasi yang dapat mengangkut banyak siswa dalam satu perjalanan.",
      metric: "mobility",
      gain: 9,
      options: [
        {
          title: "Menyediakan bus sekolah dengan titik jemput aman",
          desc: "Banyak siswa dapat bepergian bersama dalam satu kendaraan.",
          correct: true,
        },
        {
          title: "Memperlebar area parkir kendaraan pribadi",
          desc: "Lebih banyak kendaraan akan masuk ke area sekolah.",
        },
        {
          title: "Meminta setiap siswa memakai kendaraan sendiri",
          desc: "Jumlah kendaraan di jalan akan bertambah.",
        },
        {
          title: "Menutup trotoar agar kendaraan punya ruang tambahan",
          desc: "Pejalan kaki kehilangan jalur aman.",
        },
      ],
      explanation:
        "Bus sekolah dapat mengurangi jumlah kendaraan pribadi. Titik jemput yang aman juga membuat perjalanan lebih tertib.",
    },
    {
      id: 6,
      zone: "mobility",
      zoneName: "Mobilitas Cerdas",
      title: "Jalur Aman untuk Sepeda",
      emoji: "🚲",
      difficulty: "PEMULA",
      story:
        "Jarak rumah beberapa warga ke sekolah dan taman cukup dekat. Namun, mereka enggan bersepeda karena harus berbagi jalan dengan kendaraan cepat.",
      question:
        "Infrastruktur apa yang paling mendukung perjalanan sepeda yang aman?",
      hint: "Pengguna sepeda membutuhkan jalur khusus yang dipisahkan dari kendaraan bermotor.",
      metric: "mobility",
      gain: 9,
      options: [
        {
          title: "Membangun jalur sepeda yang jelas dan terlindungi",
          desc: "Jalur khusus memberi ruang aman bagi pesepeda.",
          correct: true,
        },
        {
          title: "Membuat pesepeda selalu berada di tengah jalan",
          desc: "Pesepeda bercampur dengan kendaraan cepat.",
        },
        {
          title: "Menghilangkan marka jalan",
          desc: "Pengguna jalan kehilangan panduan jalur.",
        },
        {
          title: "Mengarahkan sepeda masuk ke jalur pejalan kaki yang sempit",
          desc: "Pejalan kaki dan pesepeda saling mengganggu.",
        },
      ],
      explanation:
        "Jalur sepeda yang terlindungi membantu mengurangi konflik dengan kendaraan bermotor dan mendorong mobilitas rendah emisi.",
    },
    {
      id: 7,
      zone: "mobility",
      zoneName: "Mobilitas Cerdas",
      title: "Lampu Lalu Lintas Adaptif",
      emoji: "🚦",
      difficulty: "MENENGAH",
      story:
        "Persimpangan utama sering macet. Pada satu arah kendaraan menumpuk, sedangkan arah lain kosong, tetapi durasi lampu hijau selalu sama.",
      question:
        "Bagaimana teknologi dapat membantu mengatur lampu lalu lintas secara lebih efisien?",
      hint: "Kota dapat menggunakan sensor untuk mengetahui jumlah kendaraan pada setiap arah.",
      metric: "mobility",
      gain: 8,
      options: [
        {
          title: "Menggunakan sensor kendaraan dan pengaturan waktu adaptif",
          desc: "Durasi lampu disesuaikan dengan kondisi lalu lintas.",
          correct: true,
        },
        {
          title: "Membuat semua lampu selalu merah",
          desc: "Semua kendaraan berhenti tanpa solusi antrean.",
        },
        {
          title: "Mengatur lampu berdasarkan warna kendaraan",
          desc: "Warna kendaraan tidak menunjukkan kepadatan jalan.",
        },
        {
          title: "Mematikan seluruh lampu lalu lintas",
          desc: "Persimpangan menjadi tidak teratur dan berisiko.",
        },
      ],
      explanation:
        "Sensor dapat mendeteksi kepadatan kendaraan. Sistem adaptif menyesuaikan durasi lampu hijau berdasarkan data aktual.",
    },
    {
      id: 8,
      zone: "mobility",
      zoneName: "Mobilitas Cerdas",
      title: "Kawasan Ramah Pejalan Kaki",
      emoji: "🚶",
      difficulty: "MENENGAH",
      story:
        "Di pusat kota, banyak warga berjalan kaki menuju halte dan pertokoan. Trotoar terputus-putus dan sering terhalang kendaraan parkir.",
      question:
        "Perbaikan apa yang paling tepat untuk meningkatkan keselamatan pejalan kaki?",
      hint: "Pejalan kaki memerlukan jalur yang kontinu, mudah diakses, dan terpisah dari kendaraan.",
      metric: "mobility",
      gain: 9,
      options: [
        {
          title: "Menyediakan trotoar kontinu, ramp, dan penyeberangan aman",
          desc: "Semua pejalan kaki memiliki jalur yang mudah diakses.",
          correct: true,
        },
        {
          title: "Mengubah trotoar menjadi tempat parkir",
          desc: "Ruang berjalan kaki semakin berkurang.",
        },
        {
          title: "Meminta pejalan kaki berjalan di badan jalan",
          desc: "Pejalan kaki lebih dekat dengan kendaraan bermotor.",
        },
        {
          title: "Membangun pagar yang menutup semua akses halte",
          desc: "Warga kesulitan menuju transportasi umum.",
        },
      ],
      explanation:
        "Trotoar yang menyambung, akses ramah disabilitas, dan penyeberangan aman membuat kota lebih inklusif dan nyaman.",
    },
    {
      id: 9,
      zone: "waste",
      zoneName: "Sampah & Ekonomi Sirkular",
      title: "Tempat Sampah Terpilah",
      emoji: "♻️",
      difficulty: "PEMULA",
      story:
        "Tempat sampah di taman selalu tercampur. Botol plastik, sisa makanan, dan kertas akhirnya dibuang bersama sehingga sulit didaur ulang.",
      question: "Sistem apa yang sebaiknya diterapkan di taman kota?",
      hint: "Pisahkan sampah berdasarkan jenis agar setiap bahan dapat ditangani dengan cara yang tepat.",
      metric: "waste",
      gain: 9,
      options: [
        {
          title: "Menyediakan tempat sampah terpilah dengan label yang jelas",
          desc: "Organik, anorganik, dan residu memiliki wadah berbeda.",
          correct: true,
        },
        {
          title: "Menggabungkan semua sampah ke satu wadah besar",
          desc: "Sampah tetap tercampur dan sulit diolah.",
        },
        {
          title: "Membuang sampah ke sungai",
          desc: "Sampah dapat mencemari air dan menyumbat aliran.",
        },
        {
          title: "Membakar semua sampah di taman",
          desc: "Pembakaran terbuka menghasilkan polusi udara.",
        },
      ],
      explanation:
        "Pemilahan dari sumber memudahkan pengomposan, daur ulang, dan pengelolaan residu secara aman.",
    },
    {
      id: 10,
      zone: "waste",
      zoneName: "Sampah & Ekonomi Sirkular",
      title: "Sisa Makanan Jadi Manfaat",
      emoji: "🍂",
      difficulty: "PEMULA",
      story:
        "Pasar tradisional menghasilkan banyak sisa sayur dan buah setiap hari. Sampah organik menumpuk dan menimbulkan bau.",
      question: "Pengolahan apa yang paling sesuai untuk sisa sayur dan buah?",
      hint: "Sampah organik dapat diuraikan oleh mikroorganisme menjadi bahan yang bermanfaat bagi tanaman.",
      metric: "waste",
      gain: 9,
      options: [
        {
          title: "Mengolahnya menjadi kompos",
          desc: "Sisa organik diuraikan menjadi penyubur tanah.",
          correct: true,
        },
        {
          title: "Mencampurnya dengan baterai bekas",
          desc: "Baterai dapat mengandung bahan berbahaya.",
        },
        {
          title: "Membuangnya ke selokan",
          desc: "Sampah dapat menyumbat saluran air.",
        },
        {
          title: "Membungkusnya rapat lalu membuang tanpa pemilahan",
          desc: "Potensi pengolahan organik tidak dimanfaatkan.",
        },
      ],
      explanation:
        "Pengomposan mengubah sampah organik menjadi kompos yang dapat memperbaiki kualitas tanah dan mengurangi sampah ke tempat pembuangan akhir.",
    },
    {
      id: 11,
      zone: "waste",
      zoneName: "Sampah & Ekonomi Sirkular",
      title: "Bank Sampah Digital",
      emoji: "🏦",
      difficulty: "MENENGAH",
      story:
        "Warga ingin mengumpulkan botol dan kertas untuk didaur ulang. Mereka membutuhkan sistem pencatatan agar jumlah setoran dan nilai tabungan tercatat rapi.",
      question:
        "Teknologi apa yang membantu bank sampah mencatat setoran warga secara teratur?",
      hint: "Sistem digital dapat menyimpan nama penyetor, jenis bahan, berat, dan riwayat transaksi.",
      metric: "waste",
      gain: 8,
      options: [
        {
          title: "Aplikasi pencatatan setoran dengan basis data",
          desc: "Data jenis, berat, dan pemilik sampah dapat dikelola.",
          correct: true,
        },
        {
          title: "Mengandalkan ingatan petugas tanpa catatan",
          desc: "Riwayat setoran mudah terlupakan.",
        },
        {
          title: "Menghapus data setiap akhir hari",
          desc: "Riwayat transaksi tidak dapat ditelusuri.",
        },
        {
          title: "Mencampur sampah sebelum ditimbang",
          desc: "Jenis dan berat bahan sulit diketahui.",
        },
      ],
      explanation:
        "Basis data membantu mencatat transaksi secara konsisten, memantau jumlah material, dan membuat laporan bank sampah.",
    },
    {
      id: 12,
      zone: "waste",
      zoneName: "Sampah & Ekonomi Sirkular",
      title: "Kurangi Plastik Sekali Pakai",
      emoji: "🛍️",
      difficulty: "MENENGAH",
      story:
        "Kawasan wisata menghasilkan banyak kantong plastik dan botol sekali pakai. Tempat sampah cepat penuh saat akhir pekan.",
      question:
        "Program apa yang paling baik untuk mengurangi sampah dari sumbernya?",
      hint: "Prinsip terbaik adalah mencegah sampah terbentuk sebelum harus diolah.",
      metric: "waste",
      gain: 9,
      options: [
        {
          title: "Mendorong wadah pakai ulang dan stasiun isi ulang",
          desc: "Pengunjung dapat membawa botol dan tas sendiri.",
          correct: true,
        },
        {
          title: "Membagikan kantong plastik tambahan kepada semua pengunjung",
          desc: "Jumlah plastik sekali pakai meningkat.",
        },
        {
          title: "Memindahkan sampah plastik ke taman lain",
          desc: "Masalah hanya berpindah tempat.",
        },
        {
          title: "Menutup tempat sampah agar tidak terlihat penuh",
          desc: "Sampah tetap dihasilkan dan tidak terkelola.",
        },
      ],
      explanation:
        "Mengurangi penggunaan sejak awal lebih efektif daripada hanya menangani sampah setelah terbentuk. Wadah pakai ulang mengurangi kebutuhan produk sekali pakai.",
    },
    {
      id: 13,
      zone: "green",
      zoneName: "Lingkungan Tangguh",
      title: "Taman di Tengah Kota",
      emoji: "🌳",
      difficulty: "PEMULA",
      story:
        "Kawasan permukiman padat memiliki sedikit ruang terbuka. Suhu terasa panas dan warga tidak memiliki tempat nyaman untuk beraktivitas.",
      question:
        "Solusi apa yang dapat meningkatkan kualitas lingkungan sekaligus kenyamanan warga?",
      hint: "Vegetasi dapat memberi keteduhan, menyerap karbon, dan menyediakan ruang publik.",
      metric: "green",
      gain: 9,
      options: [
        {
          title: "Membangun taman kota dengan pohon dan tanaman lokal",
          desc: "Ruang hijau memberi teduh dan mendukung keanekaragaman hayati.",
          correct: true,
        },
        {
          title: "Menutup semua lahan kosong dengan beton",
          desc: "Permukaan keras bertambah dan suhu dapat meningkat.",
        },
        {
          title: "Menebang pohon agar lahan lebih terbuka",
          desc: "Keteduhan dan habitat berkurang.",
        },
        {
          title: "Menggunakan lahan taman sebagai tempat parkir permanen",
          desc: "Ruang publik hijau semakin sedikit.",
        },
      ],
      explanation:
        "Taman kota membantu menurunkan suhu lokal, menyediakan ruang aktivitas, menyerap air hujan, dan mendukung keanekaragaman hayati.",
    },
    {
      id: 14,
      zone: "green",
      zoneName: "Lingkungan Tangguh",
      title: "Panen Air Hujan",
      emoji: "🌧️",
      difficulty: "MENENGAH",
      story:
        "Sebuah sekolah sering kekurangan air untuk menyiram tanaman saat musim kemarau, padahal atap sekolah cukup luas dan hujan deras terjadi pada musim hujan.",
      question:
        "Sistem apa yang dapat membantu menyimpan air hujan untuk digunakan kembali?",
      hint: "Air dari talang atap dapat dialirkan melalui penyaring menuju tempat penampungan.",
      metric: "green",
      gain: 8,
      options: [
        {
          title: "Memasang talang, penyaring, dan tangki penampungan air hujan",
          desc: "Air hujan dapat disimpan untuk kebutuhan nonminum.",
          correct: true,
        },
        {
          title: "Membiarkan seluruh air hujan langsung terbuang ke jalan",
          desc: "Air tidak dimanfaatkan dan dapat menambah limpasan.",
        },
        {
          title: "Mencampur air hujan dengan limbah berbahaya",
          desc: "Air menjadi tercemar.",
        },
        {
          title: "Menutup semua saluran air atap",
          desc: "Air dapat meluap dan merusak bangunan.",
        },
      ],
      explanation:
        "Panen air hujan mengumpulkan limpasan atap, menyaring kotoran, lalu menyimpannya untuk penyiraman dan kebutuhan nonminum lainnya.",
    },
    {
      id: 15,
      zone: "green",
      zoneName: "Lingkungan Tangguh",
      title: "Mengurangi Genangan Kota",
      emoji: "💧",
      difficulty: "MENENGAH",
      story:
        "Hujan deras sering menyebabkan genangan di area parkir dan trotoar yang seluruh permukaannya tertutup beton.",
      question:
        "Perubahan desain apa yang membantu air hujan meresap ke tanah?",
      hint: "Pilih permukaan yang memiliki celah atau pori sehingga air dapat masuk ke lapisan tanah.",
      metric: "green",
      gain: 9,
      options: [
        {
          title: "Menggunakan paving berpori dan taman resapan",
          desc: "Air hujan dapat meresap dan limpasan berkurang.",
          correct: true,
        },
        {
          title: "Menambah lapisan aspal kedap air",
          desc: "Air semakin sulit masuk ke tanah.",
        },
        { title: "Menutup saluran drainase", desc: "Aliran air terhambat." },
        {
          title: "Membuang semua air ke jalan yang lebih rendah",
          desc: "Genangan berpindah ke lokasi lain.",
        },
      ],
      explanation:
        "Permukaan berpori dan taman resapan membantu meningkatkan infiltrasi air dan mengurangi limpasan yang membebani drainase.",
    },
    {
      id: 16,
      zone: "green",
      zoneName: "Lingkungan Tangguh",
      title: "Memantau Kualitas Udara",
      emoji: "🌬️",
      difficulty: "LANJUTAN",
      story:
        "Warga mengeluhkan udara yang terasa berdebu di beberapa ruas jalan. Pemerintah kota ingin mengetahui lokasi dan waktu dengan kualitas udara terburuk.",
      question: "Langkah awal berbasis data apa yang paling tepat?",
      hint: "Kota perlu mengumpulkan pengukuran dari beberapa titik secara berkala sebelum menentukan kebijakan.",
      metric: "green",
      gain: 8,
      options: [
        {
          title:
            "Memasang sensor kualitas udara dan menampilkan hasilnya pada peta",
          desc: "Data polutan dapat dipantau menurut lokasi dan waktu.",
          correct: true,
        },
        {
          title: "Menentukan kualitas udara hanya dari warna langit",
          desc: "Pengamatan visual tidak mengukur konsentrasi polutan.",
        },
        {
          title: "Mengabaikan keluhan karena udara tidak terlihat",
          desc: "Polusi tetap perlu diukur meskipun tidak selalu tampak.",
        },
        {
          title: "Mengukur udara hanya satu kali di satu tempat",
          desc: "Data tidak mewakili kondisi seluruh kota.",
        },
      ],
      explanation:
        "Sensor di beberapa lokasi menghasilkan data berkala yang dapat membantu mengidentifikasi pola polusi dan menentukan tindakan yang sesuai.",
    },
    {
      id: 17,
      zone: "digital",
      zoneName: "Data & Layanan Digital",
      title: "Sensor Kebocoran Air",
      emoji: "🚰",
      difficulty: "MENENGAH",
      story:
        "Pipa air di beberapa kawasan sering bocor. Petugas baru mengetahui kebocoran setelah jalan tergenang atau tagihan air meningkat.",
      question:
        "Bagaimana teknologi IoT dapat membantu mendeteksi kebocoran lebih cepat?",
      hint: "Sensor dapat mengukur aliran atau tekanan air dan mengirimkan data ke sistem pemantauan.",
      metric: "digital",
      gain: 9,
      options: [
        {
          title: "Memasang sensor aliran dan tekanan yang mengirim peringatan",
          desc: "Perubahan tidak normal dapat dideteksi lebih cepat.",
          correct: true,
        },
        {
          title: "Mematikan semua meter air warga",
          desc: "Kota kehilangan informasi penggunaan air.",
        },
        {
          title: "Mengandalkan laporan setelah pipa pecah besar",
          desc: "Deteksi menjadi terlambat.",
        },
        {
          title: "Mengirim petugas memeriksa semua pipa setiap jam",
          desc: "Pemeriksaan manual terus-menerus tidak efisien.",
        },
      ],
      explanation:
        "Sensor IoT memantau data aliran dan tekanan. Ketika terdeteksi pola tidak normal, sistem dapat memberi peringatan kepada petugas.",
    },
    {
      id: 18,
      zone: "digital",
      zoneName: "Data & Layanan Digital",
      title: "Tempat Sampah Pintar",
      emoji: "🗑️",
      difficulty: "MENENGAH",
      story:
        "Petugas kebersihan mengunjungi banyak tempat sampah, tetapi sebagian masih kosong sementara beberapa tempat sudah penuh dan meluap.",
      question:
        "Fitur apa yang membuat pengangkutan sampah menjadi lebih efisien?",
      hint: "Tempat sampah dapat mengirimkan informasi kapasitasnya kepada petugas.",
      metric: "digital",
      gain: 9,
      options: [
        {
          title: "Sensor kapasitas yang mengirim status tempat sampah",
          desc: "Petugas dapat memprioritaskan lokasi yang hampir penuh.",
          correct: true,
        },
        {
          title: "Membuat semua tempat sampah tanpa penanda lokasi",
          desc: "Petugas sulit mengetahui titik yang perlu dikunjungi.",
        },
        {
          title: "Mengangkut semua tempat sampah setiap 10 menit",
          desc: "Perjalanan menjadi boros meskipun wadah belum penuh.",
        },
        {
          title: "Menonaktifkan jadwal petugas kebersihan",
          desc: "Sampah tidak tertangani.",
        },
      ],
      explanation:
        "Sensor kapasitas dan data lokasi membantu menyusun rute pengangkutan berdasarkan kebutuhan aktual, sehingga waktu dan bahan bakar dapat dihemat.",
    },
    {
      id: 19,
      zone: "digital",
      zoneName: "Data & Layanan Digital",
      title: "Dashboard Data Kota",
      emoji: "📊",
      difficulty: "LANJUTAN",
      story:
        "Dinas kota memiliki data penggunaan listrik, kemacetan, sampah, dan kualitas udara. Namun, data tersimpan di beberapa berkas berbeda sehingga sulit dibandingkan.",
      question: "Apa manfaat utama dashboard data kota yang terintegrasi?",
      hint: "Dashboard menyajikan indikator dari banyak sumber dalam tampilan yang mudah dipahami.",
      metric: "digital",
      gain: 9,
      options: [
        {
          title:
            "Menggabungkan indikator menjadi visualisasi yang mudah dipantau",
          desc: "Pengambil keputusan dapat melihat tren dan membandingkan kondisi.",
          correct: true,
        },
        {
          title: "Menghapus data lama tanpa analisis",
          desc: "Informasi historis yang penting akan hilang.",
        },
        {
          title: "Menampilkan angka secara acak agar terlihat menarik",
          desc: "Informasi menjadi tidak akurat.",
        },
        {
          title: "Menyimpan semua data hanya pada kertas yang terpisah",
          desc: "Analisis lintas sektor semakin sulit.",
        },
      ],
      explanation:
        "Dashboard terintegrasi membantu pemangku kepentingan memahami kondisi, melihat tren, menemukan masalah, dan mengevaluasi kebijakan berbasis data.",
    },
    {
      id: 20,
      zone: "digital",
      zoneName: "Data & Layanan Digital",
      title: "Pusat Respons Banjir Cerdas",
      emoji: "🚨",
      difficulty: "FINAL CHALLENGE",
      story:
        "Hujan ekstrem diperkirakan datang malam ini. Beberapa titik kota rawan banjir, tetapi informasi tinggi air, cuaca, dan lokasi warga rentan belum terhubung.",
      question:
        "Rancangan sistem apa yang paling membantu kota merespons banjir secara cepat dan terkoordinasi?",
      hint: "Gabungkan data sensor, peringatan, peta risiko, dan jalur komunikasi petugas serta warga.",
      metric: "digital",
      gain: 12,
      options: [
        {
          title:
            "Mengintegrasikan sensor tinggi air, data cuaca, peta risiko, dan notifikasi",
          desc: "Informasi dapat dipakai untuk peringatan dini dan koordinasi evakuasi.",
          correct: true,
        },
        {
          title: "Menunggu air masuk ke rumah sebelum mengumumkan bahaya",
          desc: "Peringatan diberikan terlalu terlambat.",
        },
        {
          title: "Mengirim satu pesan yang sama tanpa informasi lokasi",
          desc: "Warga tidak tahu area dan jalur yang harus dihindari.",
        },
        {
          title: "Menonaktifkan sensor saat hujan deras",
          desc: "Kota kehilangan data penting saat kondisi kritis.",
        },
      ],
      explanation:
        "Sistem respons banjir cerdas menggabungkan data real-time dan peta risiko untuk mendukung peringatan dini, penentuan prioritas, serta koordinasi evakuasi.",
    },
  ];
  window.SMART_CITY_MISSIONS = missions;
})();
