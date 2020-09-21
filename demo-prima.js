function angkaPrima(angka) {
  // you can only write your code here!
  if (angka === 1) {
    return false
  }

  if (angka === 2 || angka === 3) {
    return true
  }

  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) {
      return false
    }

    let angka_kanan = angka / i

    if (angka_kanan < i) {
      break;
    }
  }

  return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false

// cek sebuah angka itu prima atau bukan
// 1 ... angka
// 2 - ( angka - 1 )

// improvement 1 : loop dari 2 - ( angka - 1 ), kemudian cek count_pembagi harus 0 kalau mau prima
// improvement 2 : loop dari 2 - ( angka - 1 ), jika ada yang habis ngebagi angka, lgs return false
// improvement 3 : batas looping nya dibagi 2
// improvement 4 : batas looping nya adalah akar dari si angka
// improvement 5 : kita berhenti ketika angka kiri lebih besar daripada angka kanan