// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

window.ws;
window.ws = new WebSocket("wss://localhost:19999", "niba-server", cc.loader.loadRes("server.crt"));

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        
        Name: {
            default: null,
            type: cc.EditBox
        },
        Pwd: {
            default: null,
            type: cc.EditBox
        },
        
    },

    // LIFE-CYCLE CALLBACKS:

    connect(){
 
        window.ws.onopen = function (evt) {
            console.log("onopen");
            alert("success");
            ws.readyState = 1;
        }
        window.ws.onerror = function (evt) {
            console.log("onerror");
            console.log(evt);
            alert("error");
        }
        window.ws.onclose = function (evt) {
            console.log("onclose");
            console.log(evt);
            alert("onclose");
        }

    },

    onLoad () {
  
        this.connect();
    },


    start () {

    },



    // update (dt) {},
});
