var synchronousFile = function(id) {
    console.log('開始同步文件, id為: ' + id);
}

var checkbox = document.getElementsByTagName('input');
console.log(checkbox);

for (let i=0, c; c = checkbox[i++];) {
    console.log(i);
    console.log(c);
    
    c.onclick = function() {
        if (this.checked === true) {
            synchronousFile(this.id);
        }
    }
}