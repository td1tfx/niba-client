// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var ws = new WebSocket("wss://localhost:19999", "niba-server", cc.url.raw("../resources/server.crt"));
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

    // onLoad () {},

    isEmpty(userName,password){
        
        console.log(userName);
        console.log(password);

        if(userName == '' || password == '') return true;
        //if(userName[0] == '请') return true;
        return false;
    },

    getUserName(){
        return this.Name.string;
    },
    
    getPassword(){
        return this.Pwd.string;
    },



    login(){

        if(this.isEmpty(this.getUserName(),this.getPassword())){
            //this.msgBoxHandler.preAutoHide(this.emptyText);
            alert("Either acount or password is empty!");
             return;
        }else{
            //connect();
            //socket.emit('login',{
            //    userName : this.getUserName(),
            //    password : this.getPassword(),
            //});
            var data = {
                "type" : 1,
                "id": this.getUserName(),
                "password": this.getPassword(),
            };
            this.send(JSON.stringify(data));
            alert(JSON.stringify(data));            
        }
    },

    connect(){
 
        ws.onopen = function (evt) {
            console.log("onopen");
            alert("success");
            ws.readyState = 1;
        }
        ws.onerror = function (evt) {
            console.log("onerror");
            console.log(evt);
            alert("error");
        }
        ws.onclose = function (evt) {
            console.log("onclose");
            console.log(evt);
            alert("onclose");
        }

    },

    send(msg){
        if(ws.readyState == 1){
            ws.send(msg);
        }
    },

    onLoad(){
        this.connect();

    },

    start () {

    },


    // update (dt) {},
});
