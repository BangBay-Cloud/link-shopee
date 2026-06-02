export default function handler(req, res) {
    // Membaca kiriman data dari parameter link (?t=judul&i=gambar&u=shopee)
    const { t, i, u } = req.query;
    
    const judulPromo = t || "Promo Spesial Hari Ini!";
    const linkGambar = i || "";
    const linkShopee = u || "https://shopee.co.id";

    // Set agar output yang dikeluarkan berupa halaman HTML utuh
    res.setHeader('Content-Type', 'text/html');
    
    // Kirim HTML instan ke Facebook / Browser Pengunjung dengan pemaksa gambar besar
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <!-- Meta tags dinamis yang dibaca sistem Facebook -->
            <meta property="og:title" content="${judulPromo}" />
            <meta property="og:description" content="Klik untuk melihat promo selengkapnya..." />
            <meta property="og:image" content="${linkGambar}" />
            
            <!-- TAG PENTING: Memaksa Facebook menampilkan pratinjau gambar besar/full -->
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            
            <meta property="og:type" content="website" />
            <title>Mengarahkan ke Halaman Produk...</title>
            <style>
                body { display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; background-color: #f5f5f5; color: #555; margin: 0; }
                .loader { border: 4px solid #e0e0e0; border-top: 4px solid #ee4d2d; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 20px auto 0; }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            </style>
        </head>
        <body>
            <div style="text-align: center;">
                <p>Sedang mengarahkan ke Shopee...</p>
                <div class="loader"></div>
            </div>
            <script>
                // Paksa lempar pengunjung asli langsung ke aplikasi/web Shopee
                window.location.replace("${linkShopee}");
            </script>
        </body>
        </html>
    `);
}