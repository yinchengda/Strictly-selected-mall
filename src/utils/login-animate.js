import $ from 'jquery';
export default function toggle(){
    $('#user-prompt').hide();
    $('#yiLogin').hide();
    $('#login_user').click(()=>{
        $('#user-prompt').show(1000);
        $('#yiLogin').show(1200);
        setTimeout(()=>{
            $('#user-prompt').hide(1000);
        },3000)
    })
}