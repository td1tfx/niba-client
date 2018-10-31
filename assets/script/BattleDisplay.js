// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

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
        this.items = [];
        for (var i = 0; i< 30; i++){
            this.addItem(i.toString()+"你看我说这么瞎搞，你说这么瞎搞搞搞可否？不可以怎么瞎搞才可以？");
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
        m_item.getComponent(cc.Label).string = item_string;
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
