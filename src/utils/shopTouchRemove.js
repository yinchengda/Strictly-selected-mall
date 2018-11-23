export default function shopTouchRemove(){
    var shop = document.getElementsByClassName('shop-item');
    var checkBox = document.getElementsByClassName('checked-box');
    var delBtn = document.getElementsByClassName('shop-item-remove');
    let ok = false;
    let index;
    var startX;
    var endX;
    var obj = {
        startTouch:startTouch,
        endTouch:endTouch
    }

    for(let i =0;i<shop.length;i++){
        shop[i].addEventListener('touchstart',function(){
            index = i;
        })
        shop[i].addEventListener('touchstart',obj.startTouch);
        shop[i].addEventListener('touchend',obj.endTouch);
        shop[i].removeEventListener('touchend',obj.startTouch)
        shop[i].removeEventListener('touchstart',obj.endTouch)
    }
    
    function startTouch(e){
        // console.log('开始')
        // console.log("位置"+e.changedTouches[0].pageX)
        startX = e.changedTouches[0].pageX;
        
    }
    function endTouch(e){
        // console.log('结束');
        // console.log("位置"+e.changedTouches[0].pageX);
        endX = e.changedTouches[0].pageX;
        if(startX-endX>100){
            checkBox[index].style.display="none";
            delBtn[index].style.width = '2rem';
        }
        if(startX-endX<-66){
            checkBox[index].style.display="block";
            delBtn[index].style.width = 0;
        }
    }
    
}