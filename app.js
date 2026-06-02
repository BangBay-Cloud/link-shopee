const btnGenerate = document.getElementById('btnGenerate');
const btnCopy = document.getElementById('btnCopy');
const resultSection = document.getElementById('resultSection');
const hasilLink = document.getElementById('hasilLink');

btnGenerate.addEventListener('click', () => {
    const judul = document.getElementById('judul').value;
    const gambar = document.getElementById('gambar').value;
    const shopee = document.getElementById('shopee').value;

    if (!judul || !gambar || !shopee) {
        alert('Mohon isi semua kolom terlebih dahulu!');
        return;
    }

    // Mengubah teks input menjadi format URL yang aman
    const tEnc = encodeURIComponent(judul);
    const iEnc = encodeURIComponent(gambar);
    const uEnc = encodeURIComponent(shopee);

    // Mengambil domain utama Vercel secara otomatis
    const baseUrl = window.location.origin;

    // Menyusun link ajaib yang akan dikirim ke Facebook
    const linkFinal = `${baseUrl}/api/go?t=${tEnc}&i=${iEnc}&u=${uEnc}`;

    hasilLink.value = linkFinal;
    resultSection.style.display = 'block';
});

btnCopy.addEventListener('click', () => {
    hasilLink.select();
    document.execCommand('copy');
    alert('Link berhasil disalin ke clipboard!');
});