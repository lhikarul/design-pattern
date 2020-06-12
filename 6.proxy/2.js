// 男孩通過代理追女孩 --> 送花
var Flower = function(){
    this.name = "玫瑰花";
};

var boy = {
    sendFlower(target) {
        var flower = new Flower();
        target.receiveFlower(flower.name);
    }
}

var agent = {
    receiveFlower(flower) {
        girl.receiveFlower(flower);
    }
}

var girl = {
    receiveFlower(flower) {
        console.log('收到花 ' + flower);
    }
}

boy.sendFlower(agent);