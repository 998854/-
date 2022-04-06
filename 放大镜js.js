let ye = document.querySelector('#ye');
let jian = document.querySelector('#jian');
let sheng = document.querySelector('#sheng');
let qun = document.querySelector('#qun');
console.log(ye, jian);

ye.onmouseover = function () {
       jian.style.display = 'block';
}
ye.onmouseout = function () {
       jian.style.display = 'none';
}
ye.onmousemove = function (e) {
       // 获取鼠标在图片中与页面左，上相隔的距离
       let x = e.clientX;
       let y = e.clientY;

       // 获取图片距离页面左上相隔的距离
       let ye_left = ye.style.left = 150;
       let ye_top = ye.style.top = 0;

       // 获取到鼠标在图片中距离图片左，上相隔的距离
       let qing_left = x - ye_left;
       let qing_top = y - ye_top;

       // 鼠标在图片中的距离图片左，上相隔的距离，给到详情图
       sheng.style.left = (-qing_left) * 2 + 'px';
       sheng.style.top = (-qing_top) * 2 + 'px';

       // 遮罩层跟随鼠标移动
       qun.style.left = qing_left - 50 + 'px';
       qun.style.top = qing_top - 50 + 'px';
       
       // 实现遮罩层移动不超过边界的效果左，上封顶
       if (qun.style.left < 0 + 'px') {
              qun.style.left = 0 + 'px';
       }
       if (qun.style.top < 0 + 'px') {
              qun.style.top = 0 + 'px';
       }
       console.log(qun.style.top,qun.style.left);
}


