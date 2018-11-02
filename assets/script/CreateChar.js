// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var Message = require('NibaMessage')
var session = require('NibaSession')

cc.Class({
    extends: cc.Component,

    properties: {
        nameEdit: {
            default: null,
            type: cc.EditBox
        },
        maleToggle: {
            default: null,
            type: cc.Toggle
        },
        femaleToggle: {
            default: null,
            type: cc.Toggle
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    create() {
        var attrs = this.node.getChildByName("Attribute Layout").getComponent("Attribute");
        if (attrs.isOk()) {
            var createReq = Message.CreateRequest(this.nameEdit.string, this.maleToggle.isChecked, 
                {
                    strength: attrs.assignedStrength,
                    dexterity: attrs.assignedDexterity,
                    physique: attrs.assignedPhysique,
                    spirit: attrs.assignedSpirit
                });
            var validate = createReq.validate();
            if (validate.status) {
                session.socket.onmessage = (evt) => {
                    var response = JSON.parse(evt.data)
                    // could be reponse.error
                    if ('error' in response) {
                        alert("未知错误" + response.error);
                        return;
                    }
                    if (response.success) {
                        alert("创建人物成功，跳转游戏画面……");
                    } else {
                        alert("人物名被取用");
                    }
                };
                cc.log(createReq);
                session.socket.send(JSON.stringify(createReq));
            } else {
                alert(validate.message);
            }
        } else {
            alert("属性未分配");
        }
    },

    maleToggling() {
        this.femaleToggle.isChecked = false;
    },

    femaleToggling() {
        this.maleToggle.isChecked = false;
    },

    start () {

    },

    // update (dt) {},
});
