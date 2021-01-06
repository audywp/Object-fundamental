console.log('Encapsulation');

class Mobil {
  constructor(harga, warna, merk, nama, bbm, tipe, tahun) {
    // Private
    const color = warna;
    let Price = harga;
    // public
    this.merk = merk;
    this.nama = nama;
    this.bbm = bbm;
    this.tipe = tipe;
    this.tahun = tahun;

    this.details = () => {
      return {
        color,
        Price,
      };
    };

    this.kecepatan = () => {
      console.log(`Kecepatan  = 2000mph`);
    };
  }
}

const Ferrari = new Mobil(
  25000000,
  'pink',
  'Ferrari',
  "Audy'sCar",
  'premium',
  'sport',
  '1995'
);

Ferrari.harga = 250;
