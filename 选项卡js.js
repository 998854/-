var ye = document.querySelectorAll('ul>li');
var ye1 = document.querySelectorAll('#yedye>div');
console.log(ye);
console.log(ye1);
for (var i = 0; i < ye.length; i++) {
    ye[i].onclick = function () {
        chao(i);
    }
}

for (var i = 0; i < ye.length; i++) {
    ye[i].myIndex = i;
    ye[i].onclick = function () {
        let i = this.myIndex;
        chao(i);
    }
}

function chao(index) {
    for (var i = 0; i < ye.length; i++) {
        ye[i].className = '';
        ye1[i].className = '';
    }
    ye[index].className = 'tive';
    ye1[index].className = 'tive';
}