var Message = require('message')
var session = require('session')

cc.Class({
    extends: cc.Component,

    properties: {
        userNameBox: {
            default: null,
            type: cc.EditBox
        },
        passwordBox: {
            default: null,
            type: cc.EditBox
        },
        confirmPasswordBox: {
            default: null,
            type: cc.EditBox
        },     
        confirmPasswordLabel: {
            default: null,
            type: cc.Label
        },
        loginBtn: {
            default: null,
            type: cc.Button
        },
        registerNewBtn: {
            default: null,
            type: cc.Button
        },
        registerBtn: {
            default: null,
            type: cc.Button
        }
    },
    setRegister(bool) {
        // set register to empty 
        this.registerBtn.node.active = bool;
        this.confirmPasswordBox.node.active = bool;
        this.confirmPasswordLabel.node.active = bool;
        this.registerNewBtn.node.active = !bool;
        this.loginBtn.node.active = !bool;
        this.userNameBox.string = '';
        this.passwordBox.string = '';
        this.confirmPasswordBox.string = '';
    },
    
    onLoad() {
        // while loading the properties aren't initialized LOL what a trash editor
    },

    registerNew() {
        this.setRegister(true);
    },

    register() {
        if (this.passwordBox.string != this.confirmPasswordBox.string) {
            alert("密码不匹配");
            return;
        }
        var regRequest = Message.RegisterRequest(this.userNameBox.string, this.passwordBox.string);
        // pass session? TBD
        var validate = regRequest.validate();
        if (validate.status) {
            session.socket.onmessage = (evt) => {
                var response = JSON.parse(evt.data)
                // could be reponse.error
                if ('error' in response) {
                    alert("未知错误" + response.error);
                    return;
                }
                if (response.success) {
                    alert("注册角色成功，跳转登陆界面……");
                    this.setRegister(false);
                } else {
                    this.alert("用户名被取用");
                }
            };
            session.socket.send(JSON.stringify(regRequest));
        } else {
            alert(validate.message);
        }
    },

    login() {
        var loginRequest = Message.LoginRequest(this.userNameBox.string, this.passwordBox.string)
        var validate = loginRequest.validate();
        if (validate.status) {
            session.socket.onmessage = (evt) => {
                var response = JSON.parse(evt.data)
                // could be reponse.error
                if ('error' in response) {
                    alert("未知错误" + response.error);
                    return;
                }
                if (response.success) {
                    alert("角色登陆成功");
                    // transition to next scene
                    this.loginBtn.node.active = false;
                    this.registerNewBtn.node.active = false;
                } else {
                    alert("账号密码错误");
                }
            };
            session.socket.send(JSON.stringify(loginRequest));
        } else {
            alert(validate.message);
        }
    }

    // update (dt) {},
});
