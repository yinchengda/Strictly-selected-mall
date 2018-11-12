export default function priceFilter(Parent,Children){
    var oBox = document.getElementById(Parent);
    var oChild = oBox.getElementsByTagName(Children);
    for(let i in oChild){
        if(i === 'length')return;
        oChild[i].onclick = function(){
            for(let j = 0; j<oChild.length;j++){
                oChild[j].className = '';
            }
            oChild[i].className = 'active'
        }
    }
}