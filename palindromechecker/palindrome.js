/**
 * Fungsi untuk memeriksa apakah sebuah string adalah palindrome.
 * Sebuah palindrome adalah string yang dibaca sama dari depan maupun belakang, mengabaikan spasi, tanda baca, dan perbedaan huruf besar-kecil.
 *
 * @param {string} str - String input yang akan diperiksa.
 * @returns {boolean} - Mengembalikan true jika string adalah palindrome, sebaliknya false.
 */
function isPalindrome(str) {
    // Mengubah string menjadi huruf kecil dan menghapus karakter non-alfanumerik
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Inisialisasi dua pointer: satu di awal dan satu di akhir string
    let kiri = 0;
    let kanan = str.length - 1;

    // Loop melalui string sampai kedua pointer bertemu di tengah
    while (kiri < kanan) {
        // Membandingkan karakter dari kedua ujung
        if (str[kiri] !== str[kanan]) {
            return false; // Jika karakter tidak cocok, string bukan palindrome
        }
        kiri++; // pointer kiri ke kanan
        kanan--; // pointer kanan ke kiri
    }

    return true;
}

// Contoh penggunaan:
console.log(isPalindrome("tamat")); // success
console.log(isPalindrome("rusak")); // failed
console.log(isPalindrome("Membuat task, mengguanakn javascript")); // true
console.log(isPalindrome("Benar 'atau' salah")); // true
