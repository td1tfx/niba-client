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
        login:{
            default:null,
            type : cc.Button

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
        this.label.string = "注册";
        this.login.getComponent("Login").label.string = "返回登录";
        this.login.getComponent("Login").loginType = 2;
        //this.login.button.node.on(cc.Node.EventType.TOUCH_START, function(event){

        //    backtoLogin();
            
        //});
    },



    start () {

    },

    // update (dt) {},
});
