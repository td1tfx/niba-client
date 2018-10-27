var Result = (status, message) => {
    return {
        status: status,
        message: message
    };
};

var Message = {    
    LoginRequest(id, password) {
        return {
            type: 0,
            id: id,
            password: password,
            validate() {
                if (this.id.length < 4 || this.id.length > 16) {
                    // TODO figure out how to return a meaningful error message
                    return Result(false, 'id长度应为4到16之间');
                }
                if (this.password.length < 6 || this.password.length > 24) {
                    return Result(false, '密码长度应为6到24之间');
                }
                return Result(true, '');
            },

        };  
    },

    RegisterRequest(id, password) {
        return {
            type: 1,
            id: id,
            password: password,
            validate() {
                if (this.id.length < 4 || this.id.length > 16) {
                    // TODO figure out how to return a meaningful error message
                    return Result(false, 'id长度应为4到16之间');
                }
                if (this.password.length < 6 || this.password.length > 24) {
                    return Result(false, '密码长度应为6到24之间');
                }
                return Result(true, '');
            },

        };
    },

};

module.exports = Message;