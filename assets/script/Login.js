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
                    "type" : 2,
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
            this.register.getComponent("Register").clickType = 1;
            this.register.getComponent("Register").CPwd.node.active = false;
            this.register.getComponent("Register").CPwd_text.node.active = false;
        }

    },



    send(msg){
        if(window.ws.readyState == 1){
            window.ws.send(msg);
        }
    },

    onLoad(){
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
