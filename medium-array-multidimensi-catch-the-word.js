/*
Buatlah sebuah function catchTheWord yang akan menerima input berupa array 2 dimensi. Ambil huruf dari tiap nested array dan rangkaikan jadi 1 kalimat. Hiraukan semua spasi. Dan jika di nested array tersebut tidak ada huruf, tidak usah ambil apapun
*/

let arr_str = [
  [' ', 'H', ' '],
  ['a', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'c', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 't', ' '],
  [' ', ' ', 'i', ' ', ' '],
  [' ', ' ', ' ', 'v', ' '],
  [' '],
  [' ', ' ', ' ', ' ', '8']
]

console.log(catchTheWord(arr_str)) // Hacktiv8