class Wizard {
    constructor(name, hp, spells) {
        this.name = name;
        this.hp = hp;
        this.spells = spells;
    }
    attack(name, defenseWizard, spell) {
        console.log(`${name} hits ${defenseWizard} with a ${spell}`);
    }
}
