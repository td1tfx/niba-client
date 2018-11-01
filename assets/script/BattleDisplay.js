var strM = require('StringManager')

var green = "#00ff00"
var blue = "#0fffff"
var red = "#FF0000"
var gold = "#D9D919"

cc.Class({
    extends: cc.Component,

    properties: {
        max_item_num : 100,
        item:{
            type:cc.Prefab,
            default:null

        },     
        content:{
            type:cc.Layout,
            default:null
        },  
      

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var damage = 9999;
        this.items = [];
        for (var i = 0; i< 30; i++){
            var str_niba = strM.setColor(green,"泥巴");
            var str_wudi = strM.setColor(blue,"无敌");
            var str_jiqimao = strM.setColor(green,"机器猫");
            var str_wugong = strM.setColor(gold,"独孤九剑");
            var str_damage = strM.setColor(red, damage.toString());
            this.addItem(i.toString()+ "." +str_wudi + "的" + str_niba + "施展武功" + str_wugong + "给予" + str_jiqimao + str_damage+ "点伤害！");
        }
        //alert(this.items.length);
        this.updateDisplay();
    },

    start () {

    },

    

    addItem:function(item_string){
        while(this.items.length >= this.max_item_num){
            this.items.pop();
        }
        var m_item = cc.instantiate(this.item);
        m_item.getComponent(cc.RichText).string = item_string;
        m_item.getComponent(cc.RichText).maxWidth = this.content.node.width;
        //m_item.getComponent(cc.Widget).left = 0;
        //m_item.getComponent(cc.Widget).right = 0;
        this.items.push(m_item);
    },

    updateDisplay:function(){
        for (var i = 0; i< this.items.length; i++){
            this.content.node.addChild(this.items[i]);
        }
    },

    // update (dt) {},
});
