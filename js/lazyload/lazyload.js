/*
 * author fyr
 * data 2018-5-4
 */

//服务于任何图片元素，img 幕后 在将origin_src 设置过去
var LazyLoadImage = (function () {
    //变量的冒泡查找

    return {
        setSrc: function (ele) {
            const url =
                ele.getAttribute('origin_src') ?
                    ele.getAttribute('origin_src') : '';
            if (!url) {
                return;
            }
            const oImg = document.createElement('img');
            // none会离开文档流 不会影响界面
            //opacity：0 会撑长页面
            oImg.style.display = 'none';

            document.body.appendChild(oImg);
            //addEventListener 新的
            //旧的写法

            //设置了图片的src 后 会启动http请求，
            //图片下载完了后 ， onload 注册事件回调
            //函数就会执行
            //异步
            oImg.onload=function(){
                //不会立即执行
                //后执行
                // console.log('图片下载完成')
                ele.src=url;
                // 洋葱
                document.body.removeChild(this);
                // ele.parentNode
            }
                // 先执行
                // console.log('设置src')
                oImg.src = url;

        }
    }
})();
