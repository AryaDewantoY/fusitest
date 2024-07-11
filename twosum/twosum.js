/**
 * Fungsi untuk menemukan dua indeks angka dalam array yang jumlahnya sama dengan target.
 * 
 * @param {number[]} nums - Array of integer.
 * @param {number} target - Target jumlah yang diinginkan.
 * @returns {number[]} - Mengembalikan array berisi dua indeks jika ditemukan, atau null jika tidak ada solusi.
 */
function findTwoSum(nums, target) {
    // Objek untuk menyimpan angka yang telah dilihat beserta indeksnya
    const seenNumbers = {};

    // Loop melalui array
    for (let i = 0; i < nums.length; i++) {
        // Hitung pasangan angka yang dibutuhkan untuk mencapai target
        const complement = target - nums[i];

        // Periksa apakah pasangan angka telah terlihat sebelumnya
        if (seenNumbers.hasOwnProperty(complement)) {
            // Jika ditemukan, kembalikan indeks pasangan angka tersebut
            return [seenNumbers[complement], i];
        }

        // Simpan angka yang telah dilihat beserta indeksnya
        seenNumbers[nums[i]] = i;
    }

    // Jika tidak ada solusi ditemukan, kembalikan null
    return null;
}

// Contoh penggunaan:
console.log(findTwoSum([3, 6, 1, 7, 5], 10)); // [0, 3]
console.log(findTwoSum([2, 4, 3, 9], 7)); // [1, 2]
console.log(findTwoSum([1, 2, 3, 4, 5], 10)); // null
