/*
===
URL Parser
===
Buatlah sebuah fungsi yang bernama urlParser, yang akan menerima input sebuah URL. Format URL adalah 'protocol://domain/username. Kemudian fungsi ini akan menghasilkan objek yang merupakan hasil parser dari URL yang di input. Jika username kosong, maka keluarkan tulisan : "not available" pada key username

Contoh ada pada driver code di bawah :
*/
console.log(urlParser('https://facebook.com/foo'))
// {
//   protocol: 'https',
//   domain: 'facebook.com',
//   username: 'foo'
// }

console.log(urlParser('http://imgur.co.id/'))
// {
//   protocol: 'http',
//   domain: 'imgur.co.id',
//   username: 'not available'
// }