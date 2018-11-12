/* xiaomi rem 
 * 1rem = 100px;
 * windowWidth = 720;
 */
// var MP_CUR_TIME=+new Date;!function(e){var t=e.document,n=t.documentElement,i=e.devicePixelRatio||1,a="orientationchange"in e?"orientationchange":"resize",d=function(){var e=n.getBoundingClientRect().width||360;(1==i||e>720)&&(e=720),n.style.fontSize=e/7.2+"px"};n.setAttribute("data-dpr",i),t.addEventListener&&(e.addEventListener(a,d,!1),"complete"===t.readyState||t.addEventListener("DOMContentLoaded",function(){setTimeout(d)},!1))}(window)



/* me rem */
//只要用户改变了设备的查看模式(横竖屏),就会触发orientationChange事件
window.addEventListener('orientationchange', setRem);
//窗口缩放触发resize
window.addEventListener('resize', setRem);

setRem();

function setRem() {
    var html = document.querySelector('html');
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 16 + 'px';
};

export default setRem;