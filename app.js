// app.js

// 1. Masukkan Link Affiliate Shopee Asli kamu di sini
const linkShopeeAffiliate = "https://shopee.co.id/product/995567063/23541532266?channel_type=fb&content_source=fb&encrypted_payload=HTixgRV9sGjS8OaQcVTMCoov7euiUocYPxxQUFWZbGGwxuKUeOiXrJbVptOXw-YpfKm2-WDijcoEijF77nmTL1YJsheik--0jMIAjoyHT7IpQZ1BkBIO7-4Itk-NjJZS8qEjXRZu6g7BdILJMuxKmj24CaOTfdUQEUK_gBJEJjwn5a9P0p3BpWKZJiZHe-LmYQJ057xW721q7QkOZg&exp_group=rollout&fb_content_id=Q9-wBQGoShdLjv-Hsxw_EHfuq6ZtFYOWyPOHzvJxB6Xur7Lm4u1tVS8WGWx_NtkNOg&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElgAAAAwjkr6zU-O0wDiqSJ_OL3xoYrAtBFjn5G6mb5XUdOsBg5_Y4hMZKNj5cVB92Z6k1dB9rgVfyKpk2zKRfxeXZYCHuzC3deTOCXgLPIOWg8ph34iSRoePoUh7QTX0BdypVJSTyazPMqBgXb3OSTdhnmG6yyTAEe0vTIB9Z3X2e1SyXloYV4IiMhWIwJN83gj0VilADg&mmp_pid=an_11301780085&uls_trackid=55pvh5u7005c";

// 2. Fungsi untuk mengeksekusi pengalihan
function jalankanRedirect() {
    // location.replace() memastikan pengunjung tidak bisa menekan tombol "Back" ke halaman pancingan ini
    window.location.replace(linkShopeeAffiliate);
}

// 3. Jalankan script begitu struktur DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    // Jeda waktu (timeout) 300 milidetik agar transisi terlihat sedikit lebih mulus
    setTimeout(jalankanRedirect, 300);
});