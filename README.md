# Website Undangan Pernikahan - README

## Gambaran Umum

Repositori ini berisi website undangan pernikahan yang responsif dan indah untuk pernikahan Sari dan Budi pada tanggal 20 Juni 2025. Situs ini menampilkan desain yang elegan dengan skema warna romantis, profil pasangan, detail acara, galeri foto, kisah cinta, dan penghitung waktu mundur interaktif.

## Struktur

Website ini terdiri dari:
- Bagian header dengan nama pasangan dan tanggal pernikahan
- Bagian profil pasangan
- Detail acara dengan informasi akad dan resepsi
- Galeri foto
- Bagian kisah cinta
- Bagian harapan
- Footer

## Detail Teknis

### Struktur HTML
HTML mengikuti struktur semantik dengan pembagian bagian yang jelas untuk setiap bagian undangan. Website ini dibangun dengan mempertimbangkan prinsip desain responsif.

### Fitur CSS
- Variabel warna kustom melalui CSS variables
- Integrasi Google Fonts (Cormorant Garamond, Lato, Great Vibes)
- Desain responsif dengan media queries
- Efek animasi dan transisi
- Gaya elegan dengan elemen dekoratif (pembatas, kutipan)
- Tata letak galeri berbasis grid

### Fungsionalitas JavaScript

JavaScript dalam website undangan pernikahan ini menyediakan dua fitur interaktif utama:

#### 1. Indikator Kemajuan Scroll

Fitur ini menampilkan representasi visual seberapa jauh pengguna telah menggulir halaman:

```javascript
// Logika Indikator Kemajuan Scroll
document.addEventListener('DOMContentLoaded', function() {
    const progressIndicator = document.querySelector('.progress-indicator');
    const brideAvatar = document.querySelector('.bride-avatar');
    const groomAvatar = document.querySelector('.groom-avatar');
    const kissingImage = document.querySelector('.kissing');
    const containerWidth = document.querySelector('.scroll-progress-container').offsetWidth;
    const brideSize = brideAvatar.offsetWidth;
    
    // Pengaturan Animasi SVG (placeholder)
    function createSVGAvatars() {
        // Biasanya akan membuat animasi SVG
        // Menggunakan gambar placeholder sebagai gantinya
    }
    
    createSVGAvatars();
    
    // Perbarui progress bar dan avatar saat scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const progressWidth = scrollPercent * 100;
        
        // Perbarui lebar progress bar
        progressIndicator.style.width = progressWidth + '%';
        
        // Hitung posisi avatar pengantin wanita
        const maxTravelDistance = containerWidth - (brideSize * 2) - 10;
        const bridePosition = 5 + (scrollPercent * maxTravelDistance);
        brideAvatar.style.left = bridePosition + 'px';
        
        // Periksa apakah scroll telah mencapai bagian bawah
        if (scrollPercent > 0.98) {
            // Tampilkan gambar berciuman dan sembunyikan avatar individu
            kissingImage.style.display = 'block';
            brideAvatar.style.display = 'none';
            groomAvatar.style.display = 'none';
        } else {
            // Tampilkan avatar individu dan sembunyikan gambar berciuman
            kissingImage.style.display = 'none';
            brideAvatar.style.display = 'block';
            groomAvatar.style.display = 'block';
        }
    });
```
- Membuat indikator kemajuan di bagian bawah layar
- Menampilkan dua gambar avatar (pengantin wanita dan pria) yang bergerak semakin dekat saat pengguna menggulir
- Ketika pengguna mencapai bagian bawah halaman, mengganti avatar terpisah dengan gambar "berciuman"
- Menghitung posisi scroll sebagai persentase dari total konten yang dapat digulir
- Memperbarui elemen visual berdasarkan persentase tersebut

#### 2. Penghitung Waktu Mundur

Penghitung waktu mundur menampilkan sisa hari, jam, menit, dan detik hingga hari pernikahan:

```javascript
// Penghitung Waktu Mundur
const weddingDate = new Date('June 20, 2025 08:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('days').innerText = '0';
        document.getElementById('hours').innerText = '0';
        document.getElementById('minutes').innerText = '0';
        document.getElementById('seconds').innerText = '0';
    }
}

updateCountdown();
const countdownTimer = setInterval(updateCountdown, 1000);
```
- Menetapkan tanggal pernikahan target (20 Juni 2025)
- Menghitung perbedaan waktu antara sekarang dan tanggal pernikahan
- Mengkonversi perbedaan waktu menjadi hari, jam, menit, dan detik
- Memperbarui elemen HTML dengan nilai-nilai ini
- Menyegarkan penghitung waktu mundur setiap detik menggunakan setInterval
- Berhenti menghitung dan menampilkan angka nol jika tanggal pernikahan telah berlalu

## Catatan Implementasi

1. Event listener diatur ketika DOM sepenuhnya dimuat menggunakan `DOMContentLoaded`
2. Kedua fitur interaktif dibungkus dalam fungsi mereka sendiri
3. Kemajuan scroll menggunakan perhitungan berdasarkan tinggi dokumen dan viewport
4. Penghitung waktu mundur menggunakan objek Date JavaScript dan perhitungan konversi waktu
5. Kode menangani kasus-kasus khusus seperti ketika pengguna mencapai bagian bawah halaman atau ketika tanggal pernikahan telah berlalu

## Kompatibilitas Browser

Website ini seharusnya bekerja pada semua browser modern yang mendukung:
- Variabel CSS
- Tata letak Flexbox dan Grid
- Fitur JavaScript ES6
- API DOM Modern

## Kustomisasi

Untuk menyesuaikan undangan pernikahan ini untuk pasangan lain:
1. Perbarui detail pribadi (nama, tanggal, lokasi)
2. Ubah skema warna dalam variabel CSS
3. Ganti gambar placeholder dengan foto pasangan yang sebenarnya
4. Perbarui tanggal pernikahan dalam JavaScript penghitung waktu mundur