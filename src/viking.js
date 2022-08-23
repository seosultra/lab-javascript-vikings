// Soldier is a class
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  // This is a method:
  attack() {
    // returns the strength
    return this.strength;
  }
  // this is another method, it goes outside the constructor
  receiveDamage(damage) {
    // remove damage fron the health property; no return
    this.health -= damage;
  }
}

// Viking is a class ,it extends from soldier
class Viking extends Soldier {
  // an added property: name
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  // this is a method is gonna be rei-implemented
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  // attack method inherited from solider
  //attack()
  // this is a method
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon inherits from soldier
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return "A Saxon has died in combat";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingO) {
    this.vikingArmy.push(vikingO);
  }

  addSaxon(saxonO) {
    this.saxonArmy.push(saxonO);
  }

  vikingAttack() {
    saxon.receiveDamage = viking.strength;
  }

  saxonAttack() {}

  showStatus() {}
}
