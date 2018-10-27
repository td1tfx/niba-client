
var session = {
    socket: null,
    // other session specific data goes here
    id: null,
    connect() {
        this.socket = new WebSocket("wss://localhost:19999", "niba-server", cc.loader.loadRes("server.crt"));
        this.socket.onopen = (evt) => {
            cc.log("socket opened");
        }
        this.socket.onerror = (evt) => {
            cc.log("socket error");
        }
        this.socket.onclose = (evt) => {
            cc.log("socket closed");
        }
    }
}

session.connect()

module.exports = session;