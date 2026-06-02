const btnGenerate = document.getElementById('btnGenerate');
const btnCopy = document.getElementById('btnCopy');
const btnReset = document.getElementById('btnReset');
const resultSection = document.getElementById('resultSection');
const hasilLink = document.getElementById('hasilLink');

// MASUKKAN API KEY IMGBB KAMU DI SINI ⚠️
const IMGBB_API_KEY = '22051b0098ee5cccf25015b3825b9032';

// Elemen input form
const inputJudul = document.getElementById('judul');
const inputGambarHidden = document.getElementById('gambar');
const fileGambar = document.getElementById('fileGambar');
const inputShopee = document.getElementById('shopee');
const uploadStatus = document.getElementById('uploadStatus');

// Logika Otomatis Upload saat File Gambar dipilih dari PC/HP
fileGambar.addEventListener('change', async () => {
    const file = fileGambar.files[0];
    if (!file) return;

    try {
        uploadStatus.innerText = '⏳ Sedang mengupload gambar ke internet...';
        uploadStatus.style.color = '#00ffcc';
        btnGenerate.disabled = true;

        // Siapkan form data untuk dikirim ke API Imgbb
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            // Simpan url gambar langsung dari internet ke input tersembunyi
            inputGambarHidden.value = data.data.display_url;
            uploadStatus.innerText = '✅ Gambar siap digunakan!';
            uploadStatus.style.color = '#00cc55';
        } else {
            throw new Error('Gagal mendapatkan link gambar');
        }
    } catch (error) {
        console.error(error);
        uploadStatus.innerText = '❌ Gagal mengupload gambar, coba lagi.';
        uploadStatus.style.color = '#e53935';
    } finally {
        btnGenerate.disabled = false;
    }
});

// Logika Membuat Link Final
btnGenerate.addEventListener('click', () => {
    const judul = inputJudul.value;
    const gambar = inputGambarHidden.value;
    const shopee = inputShopee.value;

    if (!judul || !gambar || !shopee) {
        alert('Mohon isi semua kolom dan pastikan gambar selesai di-upload!');
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

// Logika Reset Form
btnReset.addEventListener('click', () => {
    inputJudul.value = '';
    inputGambarHidden.value = '';
    fileGambar.value = '';
    inputShopee.value = '';
    hasilLink.value = '';
    uploadStatus.innerText = '*Gambar akan otomatis di-upload ke server internet saat kamu memilih file.';
    uploadStatus.style.color = '#888';
    resultSection.style.display = 'none';
    alert('Form berhasil dikosongkan!');
});