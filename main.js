/* 
Tugas 1 = Apa perbedaan utama antara var, let, dan const dalam JavaScript?
jawab = var dapat dideklarasikan ulang dan memiliki scope function, let memiliki scope block, const bersifat tetap dan tidak dapat diubah.
*/

/*
tugas 2 mendeklarasikan variabel

var x = 10;
let y = 5;
const z = 20;
x = 15;
y = 10;
z=25

console.log(x, y, z);
*/

//tugas 3 membenarkan soal no 2
var x = 10;
let y = 5;
const z = 20;
x = 15;
y = 10;

console.log(x, y, z);

//tugas 4 menentukan tipe data
let a = 'Hello';
let b = 42;
let c = true;
let d = [1, 2, 3];
let e = { name: 'Alice', age: 25 };

//tugas 5 membuat array
let buah = ['Apel', 'Jeruk', 'Mangga', 'Pisang', 'Durian'];
console.log(buah[2]);

//tugas 6 membuat object seseorang
let orang = {nama: 'Budi', umur: 25, pekerjaan: 'Programmer'}; 
console.log(orang.nama);

//tugas 7 menentukan hasil setiap operasi
console.log(10 + '5'); 
console.log(10 - '5'); 
console.log(10 === '10'); 
console.log(10 == '10'); 
console.log(true && false); 
console.log(true || false); 
console.log(!true);

//tugas 8 membuat operator perbandingan
let num = 200; 
console.log(num > 100 && num < 500);

//tugas 9 membuat program if-else menentukan ganjil genap
let numz = 10; 
if (numz % 2 === 0){
    console.log('Genap');
}else{
    console.log('Ganjil');
}

//tugas 10 mencetak nama hari menggunakan angka
let hari = 3;
switch(hari){
    case 1: 
        console.log('Senin');
    break; 
    case 2:
        console.log('Selasa'); 
    break; 
    case 3: 
        console.log('Rabu');
    break; 
    case 4: 
        console.log('Kamis'); 
    break; 
    case 5: 
        console.log('Jumat'); 
    break; 
    case 6: 
        console.log('Sabtu'); 
    break; 
    case 7: 
        console.log('Minggu'); 
    break; 
    default: 
        console.log('Hari tidak valid'); 
}

//tugas 11 loop 1-10
for(let i = 1; i <= 10; i++){ 
    console.log(i); 
}

//tugas 12 loop 10 -1
let j = 10; 
while(j >= 1){ 
    console.log(j);
    j--; 
}

//tugas 13 do while 1-10
let n = 1; 
do{ 
    console.log(n);
    n++;
}while(n <= 5);