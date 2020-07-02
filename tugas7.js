var tinggi = [195, 190, 185, 180, 175, 170, 165, 160, 155, 150];

for_biasa(tinggi);
for_of(tinggi);

function for_biasa(tinggi) {
  console.log("For Biasa: ");
  for (var i = 0; i < tinggi.length; i++) {
    console.log(tinggi[i]);
  }
}

function for_of(tinggi) {
  console.log("For Of: ");
  for (let value of tinggi) {
    console.log(value);
  }
}

/*
Analisis
- Perulangan for dicetak menggunakan index
- Perulangan for of dicetak menggunakan variabel yang nilai array telah ditampung pada variabel tsb  

*/
