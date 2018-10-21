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

        
        loginType: 0,

        register:{
            default:null,
            type : cc.Button

        },

        Name: {
            default: null,
            type: cc.EditBox
        },
        Pwd: {
            default: null,
            type: cc.EditBox
        },
        label:{
            default:null,
            type : cc.Label
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

    cleanAcount(){
        this.Name.string = null;
    },

    cleanPwd(){
        this.Name.Pwd = null;
    },

    login(){

        if(this.loginType == 1){ //登录
            if(this.isEmpty(this.getUserName(),this.getPassword())){
                alert("Either acount or password is empty!");
                 return;
            }else{
                var data = {
                    "type" : 1,
                    "id": this.getUserName(),
                    "password": this.getPassword(),
                };
                this.send(JSON.stringify(data));
                alert(JSON.stringify(data));     
                //cc.game.addPersistRootNode("Login");       
                //cc.director.loadScene("ChooseChar");
            }
        }else if(this.loginType == 2){   //返回登录界面
            alert("backtologin");   
            //backtoLogin();
            this.label.string = "登录";
            this.register.getComponent("Register").label.string = "注册账号";

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
        this.loginType = 1;
    },

    start () {

    },

    backtoLogin(){
        this.label.string = "登录";
        this.register.getComponent("Register").label.string = "注册账号";

    },




    // update (dt) {},
});
