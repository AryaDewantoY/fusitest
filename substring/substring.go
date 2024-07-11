package main

import (
    "fmt"
)

// Fungsi untuk menemukan substring terpanjang dari sebuah string yang tidak mengandung karakter berulang.
func lengthOfLongestSubstring(s string) string {
    // Peta untuk melacak karakter yang telah muncul dan posisinya
    charIndexMap := make(map[rune]int)
    
    // Inisialisasi variabel untuk melacak awal substring yang valid dan panjang maksimum
    start := 0
    maxLength := 0
    maxStart := 0
    
    // Loop melalui string
    for i, char := range s {
        if pos, ok := charIndexMap[char]; ok && pos >= start {
            start = pos + 1
        }
        charIndexMap[char] = i
        
        if i - start + 1 > maxLength {
            maxLength = i - start + 1
            maxStart = start
        }
    }
    
    return s[maxStart:maxStart + maxLength]
}

func main() {
    // Contoh penggunaan
    input := "abcabcbb"
    fmt.Println(lengthOfLongestSubstring(input)) // "abc"
    
    input = "bbbbb"
    fmt.Println(lengthOfLongestSubstring(input)) // "b"
    
    input = "pwwkew"
    fmt.Println(lengthOfLongestSubstring(input)) // "wke"
    
    input = "dvdf"
    fmt.Println(lengthOfLongestSubstring(input)) // "vdf"
}
