const dbKreasi = {
    // 1. DATA CINEMA (VIDEO)
videos: [
        {
            judul: "Short Movie: Senja di Asrama",
            deskripsi: "Film pendek karya anak teater tentang persahabatan.",
            platform: "youtube",
            // Cukup taruh link youtube lengkap (bisa link share atau link browser)
            url: "https://youtu.be/5GVfVRvc0lc?si=rVz7KWKpYt4NH3Ym", 
            thumbnail: "", // KOSONGKAN SAJA, NANTI OTOMATIS KEISI
            kategori: "Short Movie"
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
        }
    ]
};