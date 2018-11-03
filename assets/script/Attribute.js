// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var BattleStats = require("BattleStats");

cc.Class({
    extends: cc.Component,

    properties: {
        hp: {
            type: cc.Label,
            default: null
        },
        mp: {
            type: cc.Label,
            default: null
        },
        dmgRange: {
            type: cc.Label,
            default: null
        },
        innerPower: {
            type: cc.Label,
            default: null
        },
        accuracy: {
            type: cc.Label,
            default: null
        },
        evasion: {
            type: cc.Label,
            default: null
        },
        speed: {
            type: cc.Label,
            default: null
        },
        defence: {
            type: cc.Label,
            default: null
        },
        critChance: {
            type: cc.Label,
            default: null
        },
        critDamage: {
            type: cc.Label,
            default: null
        },
        reduceDef: {
            type: cc.Label,
            default: null
        },
        reduceDefPerc: {
            type: cc.Label,
            default: null
        },
        hpRegen: {
            type: cc.Label,
            default: null
        },
        mpRegen: {
            type: cc.Label,
            default: null
        },
        goldRes: {
            type: cc.Label,
            default: null
        },
        woodRes: {
            type: cc.Label,
            default: null
        },
        waterRes: {
            type: cc.Label,
            default: null
        },
        fireRes: {
            type: cc.Label,
            default: null
        },
        earthRes: {
            type: cc.Label,
            default: null
        },
        hpOnHit: {
            type: cc.Label,
            default: null
        },
        hpSteal: {
            type: cc.Label,
            default: null
        },
        mpOnHit: {
            type: cc.Label,
            default: null
        },
        mpSteal: {
            type: cc.Label,
            default: null
        },
        remaining: {
            type: cc.Label,
            default: null
        },
        strengthLabel: {
            type: cc.Label,
            default: null
        },
        dexterityLabel: {
            type: cc.Label,
            default: null
        },
        physiqueLabel: {
            type: cc.Label,
            default: null
        },
        spiritLabel: {
            type: cc.Label,
            default: null
        },
        stats: null,
        strength: 0,
        dexterity: 0,
        physique: 0,
        spirit: 0,
        assignable: 5,
        used: 0,
        assignedStrength: 0,
        assignedDexterity: 0,
        assignedPhysique: 0,
        assignedSpirit: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // it's unclear to me how we could model this such that
        // 1. initialize with different attributes (then compute, which is easy)
        // 2. append stats 

    },

    start () {
        // this.hpRegenLabel.string = "999900";
        this.stats = BattleStats();
        this.stats.defaults();
        cc.log(this.stats);
        
        // this.stats.defaults();
    },

    adjustStrength() {
        if (this.used < this.assignable) {
            this.stats.adjustStrength(1);
            this.used += 1;
            this.assignedStrength += 1;
        }
    },

    adjustDexterity() {
        if (this.used < this.assignable) {
            this.stats.adjustDexterity(1);
            this.used += 1;
            this.assignedDexterity += 1;
        }
    },

    adjustPhysique() {
        if (this.used < this.assignable) {
            this.stats.adjustPhysique(1);
            this.used += 1;
            this.assignedPhysique += 1;
        }
    },

    adjustSpirit() {
        if (this.used < this.assignable) {
            this.stats.adjustSpirit(1);
            this.used += 1;
            this.assignedSpirit += 1;
        }
    },

    reset() {
        this.stats.adjustStrength(-this.assignedStrength);
        this.assignedStrength = 0;
        this.stats.adjustDexterity(-this.assignedDexterity);
        this.assignedDexterity = 0;
        this.stats.adjustPhysique(-this.assignedPhysique);
        this.assignedPhysique = 0;
        this.stats.adjustSpirit(-this.assignedSpirit);
        this.assignedSpirit = 0;
        this.used = 0;
    }, 

    isOk() {
        return this.used === this.assignable;
    },

    update (dt) {
        this.hp.string = this.stats.hp + ' ';
        this.mp.string = this.stats.mp + ' ';
        this.dmgRange.string = this.stats.attack_min + "~" + this.stats.attack_max+ ' ';
        this.innerPower.string = this.stats.inner_power + ' ';
        this.accuracy.string = this.stats.accuracy + ' ';
        this.evasion.string = this.stats.evasion + ' ';
        this.speed.string = this.stats.speed + ' ';
        this.defence.string = this.stats.defence+ ' ';
        this.critChance.string = this.stats.crit_chance + "%";
        this.critDamage.string = this.stats.crit_damage + "%";
        this.reduceDef.string = this.stats.reduce_def+ ' ';
        this.reduceDefPerc.string = this.stats.reduce_def_perc + "%";
        this.hpRegen.string = this.stats.hp_regen + ' ';
        this.mpRegen.string = this.stats.mp_regen + ' ';
        this.goldRes.string = this.stats.gold_res + ' ';
        this.woodRes.string = this.stats.wood_res + ' ';
        this.waterRes.string = this.stats.water_res + ' ';
        this.fireRes.string = this.stats.fire_res + ' ';
        this.earthRes.string = this.stats.earth_res + ' ';
        this.hpOnHit.string = this.stats.hp_on_hit + ' ';
        this.hpSteal.string = this.stats.hp_steal + "%";
        this.mpOnHit.string = this.stats.mp_on_hit + ' ';
        this.mpSteal.string = this.stats.mp_steal + "%"; 
        this.remaining.string = (this.assignable - this.used)+ ' ';

        // maybe have a class or something
        this.strengthLabel.string = (this.assignedStrength + this.strength).toString();
        this.dexterityLabel.string = (this.assignedDexterity + this.dexterity).toString();
        this.physiqueLabel.string = (this.assignedPhysique + this.physique).toString();
        this.spiritLabel.string = (this.assignedSpirit + this.spirit).toString();
    },
});
