class Flower {
    constructor() {
        this.name = "玫瑰花";
    }
}

var boy = {
    sendFlower(target) {
        target.receiveFlower();
    }
}

var agent = {
    receiveFlower(flower) {
        girl.listenGoodMood(function(){
            var flower = new Flower(); // 女孩心情好的時候，在準備花
            girl.receiveFlower(flower.name);
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