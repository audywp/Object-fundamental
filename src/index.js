console.log('hallo object');

// 3 cara membuat object

// bikin satu object dangen key nama, hobby, status, makananFavorit, dan method makan dan jalanJalan

// object declaration

const friend1 = {
  nama: 'Dewangga Aditya',
  hobby: 'Membaca komik',
  status: 'Unemployed',
  makananFavorit: 'Keju',
  energi: 100,
  makan: function (makanan) {
    return (this.energi = this.energi + makanan);
  },
  jalan: function (main) {
    return (this.energi -= main);
  },
};

const friend2 = {
  nama: 'Valin Fernanda',
  hobby: 'Nyanyi',
  status: 'Unemployed',
  makananFavorit: 'Baso Tahu',
  energi: 70,
  makan: function (makanan) {
    return (this.energi = this.energi + makanan);
  },
  jalan: function (main) {
    return (this.energi -= main);
  },
};

const friend3 = {
  nama: 'Andi Chaedir Dwiantara',
  hobby: 'ngomporin mas Audy',
  status: 'Unemployee',
  makananFavorit: 'Martabak',
  energi: 150,
  makan: function (makanan) {
    return (this.energi += makanan);
  },
  jalan: function (main) {
    return (this.energi -= main);
  },
};

// function declaration

const friend = function (nama, hobby, status, makananFavorit, energi) {
  let friendObject = {};
  friendObject.nama = nama;
  friendObject.hobby = hobby;
  friendObject.status = status;
  friendObject.makananFavorit = makananFavorit;
  friendObject.energi = energi;
  friendObject.makan = function (makanan) {
    return (friendObject.energi += makanan);
  };
  friendObject.main = function (main) {
    return (friendObject.energi -= main);
  };

  return friendObject;
};

const friend4 = friend(
  'Audy',
  'Ngecengin abg',
  'married',
  'apa aja dah yang penting makanan',
  1000000
);

const friend5 = friend(
  'Dhedy',
  'liat-liat',
  'single',
  'asal jgn daging darat',
  100
);

// function declaration with new keyword
const FriendWithNewKeyword = function (
  nama,
  hobby,
  status,
  makananFavorit,
  energi
) {
  this.nama = nama;
  this.hobby = hobby;
  this.status = status;
  this.makananFavorit = makananFavorit;
  this.energi = energi;
  this.makan = function (makanan) {
    return (this.energi += makanan);
  };
  this.main = function (main) {
    return (this.energi -= main);
  };
};

const friend6 = new FriendWithNewKeyword(
  'Dhedy',
  'liat-liat',
  'single',
  'asal jgn daging darat',
  100
);

// buat sebuah object Hero , type (melee atau range), attack, hp
// method serang, healing, armor

// serang, hp berkurang
// healing, hp bertambah

// armor melee per point di bagi 10
// armor range per point di bagi 8

// attack range 120
// attack melee 80
// oop , bikin kelas hero
