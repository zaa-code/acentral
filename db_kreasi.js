const dbKreasi = {
    // 1. DATA CINEMA (VIDEO)
videos: [
        {
            judul: "All IN ONE | Eps.1",
            deskripsi: "Film pendek bertemakan sahabat karya ACENTRAL.",
            platform: "youtube",
            // Cukup taruh link youtube lengkap (bisa link share atau link browser)
            url: "https://youtu.be/5GVfVRvc0lc?si=rVz7KWKpYt4NH3Ym", 
            thumbnail: "", // KOSONGKAN SAJA, NANTI OTOMATIS KEISI
            kategori: "Short Movie"
        },
        {
            judul: "ALUMNI AL-ZAYTUN YANG PASTI..",
            deskripsi: "Podcast santai Ukku tim dari lognews.",
            platform: "youtube",
            // Cukup taruh link youtube lengkap (bisa link share atau link browser)
            url: "https://youtu.be/WA0nf7G3CTM?si=Rujssj54O__biVcL", 
            thumbnail: "", // KOSONGKAN SAJA, NANTI OTOMATIS KEISI
            kategori: "Podcast"
        },
        {
            judul: "2016 adalah 10 tahun yang lalu.",
            deskripsi: "Vidio ngobrol santai dari salah satu member ACENTRAL.",
            platform: "youtube",
            // Cukup taruh link youtube lengkap (bisa link share atau link browser)
            url: "https://youtu.be/3liCZ-H9xkA?si=iyTHFLFVi5kS4U6y", 
            thumbnail: "", // KOSONGKAN SAJA, NANTI OTOMATIS KEISI
            kategori: "Ngobrol"
        },
        {
            judul: "Akad | Duet cover by Qalishaati dan Atras",
            deskripsi: "Cover music Akad dari payung teduh",
            platform: "youtube",
            // Cukup taruh link youtube lengkap (bisa link share atau link browser)
            url: "https://youtu.be/4jiAROHAOtc?si=VeAfeitIEcIrG_Vg", 
            thumbnail: "", // KOSONGKAN SAJA, NANTI OTOMATIS KEISI
            kategori: "Cover"
        }
    ],

    // 2. DATA VISUAL ART (IMAGE)
    // Pastikan pakai "imgUrl" biar muncul
    images: [
        {
            judul: "Acentral Forever",
            karya: "Tim Dokumentasi",
            imgUrl: "assets/jeteso/full asentral.JPG",
            linkOriginal: "#",
            tipe: "Fotografi"
        },
    ],

    // 3. DATA OTHERS (PROJECT & E-BOOK)
    // Pakai "cover" untuk gambar, dan "fileUrl" untuk link PDF/Web
    others: [
        {
            judul: "Novel: Jejak Langkah",
            kategori: "Literasi / Novel",
            deskripsi: "Kisah fiksi tentang perjuangan santri mengejar mimpi di negeri orang. Karya tulis angkatan.",
            cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80", // Gambar Cover Buku
            fileUrl: "assets/novel_jejak_langkah.pdf", // Link ke file PDF
            creator: "Ahmad Penulis",
            tipe: "ebook" // Menandakan ini buku
        },
        {
            judul: "Cek Khodam",
            kategori: "Hiburan",
            deskripsi: "Kalian para manusia spesial punya khodam apasih?? ayok cek sekarang disini!!    ",
            cover: "assets/cek khodam.png", // Screenshot Web
            fileUrl: "cek-khodam.html", // Link Demo
            creator: "Reza A",
            tipe: "project" // Menandakan ini project/app
        },
        {
            judul: "Cek Jodoh",
            kategori: "Hiburan",
            deskripsi: "Siapa nih yg lagi cari jodoh?? bisa banget loh kalian cek jodoh kalian disni, ayok cek sekarang!!",
            cover: "assets/cek jodoh.png", // Screenshot Web
            fileUrl: "cek-jodoh.html", // Link Demo
            creator: "Reza A",
            tipe: "project" // Menandakan ini project/app
        },
    ]
};