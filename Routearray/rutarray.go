package main

import (
    "fmt"
)

// Fungsi untuk merotate array ke kanan sebanyak k langkah.
func rotateArray(nums []int, k int) []int {
    // Mengambil panjang array
    n := len(nums)

    // Mengatasi kasus ketika k lebih besar dari panjang array
    k = k % n

    // Fungsi untuk membalik sebagian array dari indeks start hingga end
    reverse := func(nums []int, start int, end int) {
        for start < end {
            nums[start], nums[end] = nums[end], nums[start]
            start++
            end--
        }
    }

    // Membalik seluruh array
    reverse(nums, 0, n-1)

    // Membalik bagian array dari 0 hingga k-1
    reverse(nums, 0, k-1)

    // Membalik bagian array dari k hingga akhir
    reverse(nums, k, n-1)

    return nums
}

func main() {
    // Contoh penggunaan
    nums := []int{1, 2, 3, 4, 5, 6, 7}
    k := 3
    fmt.Println(rotateArray(nums, k)) // [5, 6, 7, 1, 2, 3, 4]
}
