var synchronousFile = function(id) {
    console.log('開始同步文件, id為: ' + id);
}

var proxySynchronousFile = (function(){

    var cache = [],
        timer;
    
    return function(id) {
        cache.push(id);
        if (timer) return;

        timer = setTimeout(function(){
            synchronousFile(cache.join(','));
            clearTimeout(timer);
            timer = null;
            cache.length = 0;
        },2000);
    }

})();

var checkbox = document.getElementsByTagName('input');

for (let i=0, c; c = checkbox[i++];) {
    
    c.onclick = function() {
        if (this.checked === true) {            
            proxySynchronousFile(this.id);
        }
    }
}