import $ from 'jquery';
export default function toggle(){
    $('#user-prompt').hide();
    $('#login_user').click(()=>{
        $('#user-prompt').show(1000);
        setTimeout(()=>{
            $('#user-prompt').hide(1000);
        },3000)
    })
}