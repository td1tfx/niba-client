var BattleStats = ()=> {
    return {
        hp: 0,
        mp: 0,
        minDmg: 0,
        maxDmg: 0,
        innerPower: 0,
        accuracy: 0,
        evasion: 0,
        speed: 0,
        defence: 0,
        critChance: 0,
        critDamage: 0,
        reduceDef: 0,
        reduceDefPerc: 0,
        hpRegen: 0,
        mpRegen: 0,
        goldRes: 0,
        woodRes: 0,
        waterRes: 0,
        fireRes: 0,
        earthRes: 0,
        hpOnHit: 0,
        hpSteal: 0,
        mpOnHit: 0,
        mpSteal: 0,

        defaults() {
            this.hp = 100;
            this.mp = 100;
            this.minDmg = 3;
            this.maxDmg = 5;
            this.innerPower = 0;
            this.accuracy = 10;
            this.evasion = 0;
            this.speed = 10;
            this.defence = 0;
            this.critChance = 0;
            this.critDamage = 200;
            this.reduceDef = 0;
            this.reduceDefPerc = 0;
            this.hpRegen = 1;
            this.mpRegen = 0;
            this.goldRes = 0;
            this.woodRes = 0;
            this.waterRes = 0;
            this.fireRes = 0;
            this.earthRes = 0;
            this.hpOnHit = 0;
            this.hpSteal = 0;
            this.mpOnHit = 0;
            this.mpSteal = 0;       
        },

        add(otherStat) {
            // TODO: add other stat here
        },

        adjustStrength(val) {
            this.minDmg += val * 2;
            this.maxDmg += val * 2;
        },

        adjustDexterity(val) {
            this.evasion += val;
            this.speed += val;
            this.accuracy += val;
        },

        adjustPhysique(val) {
            this.hp += 5 * val;
            this.defence += val;
        },

        adjustSpirit(val) {
            this.mp += 5 * val;
            this.innerPower += val;
        }
    };
};

module.exports = BattleStats;