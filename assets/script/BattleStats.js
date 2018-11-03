var BattleStats = ()=> {
    return {
        hp: 0,
        mp: 0,
        attack_min: 0,
        attack_max: 0,
        inner_power: 0,
        accuracy: 0,
        evasion: 0,
        speed: 0,
        defence: 0,
        crit_chance: 0,
        crit_damage: 0,
        reduce_def: 0,
        reduce_def_perc: 0,
        hp_regen: 0,
        mp_regen: 0,
        gold_res: 0,
        wood_res: 0,
        water_res: 0,
        fire_res: 0,
        earth_res: 0,
        hp_on_hit: 0,
        hp_steal: 0,
        mp_on_hit: 0,
        mp_steal: 0,

        defaults() {
            this.hp = 100;
            this.mp = 100;
            this.attack_min = 3;
            this.attack_max = 5;
            this.innerPower = 0;
            this.accuracy = 10;
            this.evasion = 0;
            this.speed = 10;
            this.defence = 0;
            this.crit_chance = 0;
            this.crit_damage = 200;
            this.reduce_def = 0;
            this.reduce_def_perc = 0;
            this.hp_regen = 1;
            this.mp_regen = 0;
            this.gold_res = 0;
            this.wood_res = 0;
            this.water_res = 0;
            this.fire_res = 0;
            this.earth_res = 0;
            this.hp_on_hit = 0;
            this.hp_steal = 0;
            this.mp_on_hit = 0;
            this.mp_steal = 0;
        },

        add(otherStat) {
            // TODO: add other stat here
        },

        adjustStrength(val) {
            this.attack_min += val * 2;
            this.attack_max += val * 2;
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
            this.inner_power += val;
        }
    };
};

module.exports = BattleStats;