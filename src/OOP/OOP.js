// HERO
// buat sebuah object Hero , type (melee atau range), attack, hp
// method serang, healing, armor

// serang, hp berkurang
// healing, hp bertambah

// armor melee per point di bagi 10
// armor range per point di bagi 8

// attack range 120
// attack melee 80
// oop , bikin kelas hero

// 2 type access modifier. (public, private)
class Hero {
  constructor(nama, type, attack, hp, armor, mp) {
    const UangSaya = 200000;
    this.nama = nama;
    this.type = type;
    this.attack = attack;
    this.hp = hp;
    this.armor = armor;
    this.mp = mp;
    this.serang = function () {
      this.mp--;
      if (type === 'range') {
        this.attack = this.attack - this.armor / 8;
      } else {
        this.attack = this.attack - this.armor / 10;
      }
      console.log(`MP remaining: ${this.mp}`);
      return this.attack;
    };
    this.healing = function (healingAmount) {
      this.hp += healingAmount;
      testIng();
      console.log(`HP remaining: ${this.hp}`);
    };
    this.attacked = function (enemyAttack) {
      this.hp -= enemyAttack;
      console.log(`HP remaining: ${this.hp}`);
    };

    this.checkHP = function () {
      if (this.hp <= 0) {
        alert(`${this.nama} telah di tumbangkan`);
      }
    };
    function testIng() {
      console.log('testing', UangSaya);
    }
    this.checkUangOrang();
  }

  checkUangOrang() {
    console.log(this.nama);
  }
}
// nama, type, attack, hp, armor, mp
const Hiro = new Hero('Hiro', 'Range', 67, 120, 50, 10);
const Dummy = new Hero('dummy', 'melee', 50, 100, 60, 5);
