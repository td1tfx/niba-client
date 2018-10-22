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
        clickType:0,

        login:{
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
        CPwd: {
            default: null,
            type: cc.EditBox
        },     
        
        CPwd_text: {
            default: null,
            type: cc.Label
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


    register(){
        if(this.clickType == 1){
            this.label.string = "注册";
            this.clickType = 2;
            this.CPwd.node.active = true;
            this.CPwd_text.node.active = true;
            this.login.getComponent("Login").label.string = "返回登录";
            this.login.getComponent("Login").loginType = 2;
        }
        else if(this.clickType == 2){
            if(this.Pwd.string == this.CPwd.string){
                if(this.isEmpty(this.getUserName(),this.getPassword())){
                    alert("Either acount or password is empty!");
                     return;
                }else{
                    var data = {
                        "type" : 1,
                        "id": this.getUserName(),
                        "password": this.getPassword(),
                    };
                    alert(JSON.stringify(data));  
                    this.send(JSON.stringify(data));
                    alert(JSON.stringify(data));  
                }   
            }else{
                alert("两次输入密码不符，请重新输入！");                
            }

        }
    },

    send(msg){
        if(window.ws.readyState == 1){
            window.ws.send(msg);
        }
    },

    onLoad(){
        this.clickType = 1;
        this.CPwd.node.active = false;
        this.CPwd_text.node.active = false;
    },

    start () {

    },

    // update (dt) {},
});
