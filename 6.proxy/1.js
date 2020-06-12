// 男孩追女孩 --> 送花
var Flower = function(){
    this.name = "玫瑰花";
};

var boy = {
    sendFlower(target) {
        var flower = new Flower();
        target.receiveFlower(flower.name);
    }
}

var girl = {
    receiveFlower(flower) {
        console.log('收到花 ' + flower);
    }
}

boy.sendFlower(girl);