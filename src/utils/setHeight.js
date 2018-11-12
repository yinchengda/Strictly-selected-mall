export default function scrollHeight(){
    var oList = document.getElementsByClassName('classify-left')[0];
    var oConent = document.getElementsByClassName('classify-content')[0];
    var oTop = document.getElementsByClassName('classify-top')[0];
    var oFoot = document.getElementsByTagName('footer')[0];
    // var height = html.getBoundingClientRect().height-(oTop.clientHeight+oFoot.clientHeight) //竟然不对 Σ(⊙▽⊙"a)！！；
    var height = document.documentElement.clientHeight-(oTop.clientHeight+oFoot.clientHeight+100);//what? 为什么要加100呢？因为经过我精准的计算，发现浏览器并不精准（即使是我这样的数学大师、奥数天才的公式它也出错）;但在经过我严密的计算后，知道了它的差值居然有100之多，为了弥补这破浏览器的错误，我只能帮它擦屁股了；这就是为什么要加100的原因，知道了吗？（不要质疑我）

    setHeight();
    function setHeight(){
        oList.style.height = height+'px';
        oConent.style.height = height+'px';
    }
    
    window.addEventListener('resize',setHeight);
}