const btnGenerate = document.getElementById('btnGenerate');
const btnCopy = document.getElementById('btnCopy');
const btnReset = document.getElementById('btnReset');
const resultSection = document.getElementById('resultSection');
const hasilLink = document.getElementById('hasilLink');

// Elemen input form
const inputJudul = document.getElementById('judul');
const inputGambar = document.getElementById('gambar');
const inputShopee = document.getElementById('shopee');

// Logika Membuat Link
btnGenerate.addEventListener('click', () => {
    const judul = inputJudul.value;
    const gambar = inputGambar.value;
    const shopee = inputShopee.value;

    if (!judul || !gambar || !shopee) {
        alert('Mohon isi semua kolom terlebih dahulu!');
        return;
    }

    const tEnc = encodeURIComponent(judul);
    const iEnc = encodeURIComponent(gambar);
    const uEnc = encodeURIComponent(shopee);

    const baseUrl = window.location.origin;
    const linkFinal = `${baseUrl}/api/go?t=${tEnc}&i=${iEnc}&u=${uEnc}`;

    hasilLink.value = linkFinal;
    resultSection.style.display = 'block';
});

// Logika Salin Link
btnCopy.addEventListener('click', () => {
    hasilLink.select();
    document.execCommand('copy');
    alert('Link berhasil disalin ke clipboard!');
});

// Logika Reset Form (Tombol Baru)
btnReset.addEventListener('click', () => {
    inputJudul.value = '';
    inputGambar.value = '';
    inputShopee.value = '';
    hasilLink.value = '';
    resultSection.style.display = 'none';
    alert('Form berhasil dikosongkan!');
});