import $ from 'jquery';
export default function toggleFn(){
    /* 这代码太烂了 -.- o(╥﹏╥)o  自己都看不下去 */
    $('.abc').eq(0).show();
    $('.abc').eq(1).hide();    
    $('li').click(function(){
        let q = $(this).index();
        $('ul>li').eq(q).addClass('active').siblings().removeClass('active');
        $('.abc').eq(q).show().siblings().hide();
    })
}