class Flower {
    constructor() {
        this.name = "玫瑰花";
    }
}

var boy = {
    sendFlower(target) {
        var flower = new Flower();
        target.receiveFlower(flower.name);
    }
}

var agent = {
    receiveFlower(flower) {
        girl.listenGoodMood(function(){ // 監聽 女孩 的心情
            girl.receiveFlower(flower);
        })
    }
}

var girl = {
    receiveFlower(flower) {
        console.log('收到花 ' + flower);
    },
    listenGoodMood(fn) {
        setTimeout(() => { // 假設 1.5 秒之後，女孩的心情變好
            fn();
        },1500);
    }
}

boy.sendFlower(agent);