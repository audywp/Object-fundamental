console.log('Inheritance');

class Kendaraan {
  constructor(tipe, roda) {
    const type = tipe;
    this.roda = roda;
    this.detail = function () {
      return {type: type};
    };

    this.Pembelian = () => {
      return {harga: 2500000};
    };
    console.log('test');
  }

  greetings() {
    return 'ini dari Kendaraan / parent';
  }
}
const mobil1 = new Kendaraan('mobil', 4);

// inheritance, mewariskan porperty atau method ke child

const checkThis = function () {
  console.log(this, 'window');
};
checkThis();

const ObjectBaru = {
  checkThis: function () {
    console.log(this, 'object');
  },
};
ObjectBaru.checkThis();

class Ferrary extends Kendaraan {
  constructor(tipe, roda, nama) {
    super(tipe, roda);
    this.nama = nama;
    this.Kecapatan = () => {
      return '2000 mph';
    };

    this.detail = () => {
      console.log(this);
      return 'detail dari child';
    };
  }
  // meng overide function greetings dari parent
  greetings() {
    return 'ini dari Ferrary / child';
  }

  //   jika kita hapus function greetings di child , kita akan meng overload function greetings dari parent
}

const FerraryKu = new Ferrary('mobil', 4, "Dheddy's car");

class Penjumlahan {
  constructor(value1, value2, value3) {
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    const summary = () => {
      return this.value1 + this.value2 + this.value3;
    };

    this.showHasil = () => summary();
  }
}

const HasilPenjumlahan = new Penjumlahan(24, 28, 29);
