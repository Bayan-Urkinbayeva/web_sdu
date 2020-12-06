function load(){
    $(".main_tit").animate({opacity: '0'},0)
    $(".main_tit").animate({opacity: '1'},1800)
    $(".p_tit").animate({opacity: '0'},0)
    $(".p_tit").animate({opacity: '1'},1800)
    $("#btn2").animate({opacity: '0'},0)
    $("#btn2").animate({opacity: '1'},1800)
    $(".line").animate({width: '700px'},1000)
}
$(document).ready(function() {
    
    $('#bottom').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });
    $('#place_btn').click(function(){
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top},2000);

    });
 
});
$(window).scroll(function() {
    if ($(window).width() <= 549) {
        if($(window).scrollTop() > 600) {
    
            firstAnimation();
        }
    } else if ($(window).width() > 549 && $(window).width() <= 991) {
        if($(window).scrollTop() > 480){
    
            firstAnimation();
        }
    } else {
        if ($(window).scrollTop() > 450) {
            firstAnimation();
        }
    }
});
var firstAnimation = function () {
    $(".box").each(
        function () {
            $(this).delay(500).animate({
                opacity: 1,
                height: "400",
                width: "330"
            }, 1000);
        }
    );
};
var menu =document.getElementsByClassName("menu");
function size(element){
    var a = element.innerHTML;
    switch(a){
        case "Home":
            menu[0].style.fontSize="40px";
            menu[0].style.opacity="1";
        break;
        case "Places":
            menu[1].style.fontSize="40px";
            menu[1].style.opacity="1";
        break;
        case "Order":
            menu[2].style.fontSize="40px";
            menu[2].style.opacity="1";
        break;
        case "Contact":
            menu[3].style.fontSize="40px";
            menu[3].style.opacity="1";
        break;
    }
}
function resize(element){
    var a =element.innerHTML;
    switch(a){
        case "Home":
            menu[0].style.fontSize="26px";
            menu[0].style.opacity="0.6";
        break;
        case "Places":
            menu[1].style.fontSize="26px";
            menu[1].style.opacity="0.6";
        break;
        case "Order":
            menu[2].style.fontSize="26px";
            menu[2].style.opacity="0.6";
        break;
        case "Contact":
            menu[3].style.fontSize="26px";
            menu[3].style.opacity="0.6";
        break;
    }
}
function close_popup(){
    $(".modal").animate({opacity: "0"}, "slow")
    document.querySelector(".modal").style.display="none";
    document.body.style.overflow="scroll"
    document.getElementById("user_name").value=""
    document.getElementById("user_mail").value=""
    document.getElementById("user_number").value=""
    document.getElementById("user_pass").value=""
    document.getElementById("user_check").value=""
}
function sign_in(){
    var btn = document.getElementById("btn2").innerHTML;
    if (btn == "Sign in") {
    document.querySelector(".modal").style.display="flex";
    $(".modal").animate({opacity: "1"}, "slow")
    /*document.body.style.overflow="hidden"*/
    }
    else{
        logout();
    }
}
function logout(){
    document.getElementsByClassName("prof")[0].style.display="none";
    document.getElementsByClassName("sidenav")[0].style.display="none";
    document.getElementById("btn2").innerHTML ="Sign in"
}
function profile(name1,name2,name3,e){
    document.getElementsByClassName("prof")[0].style.display="inline";
    var i0 = document.getElementsByClassName('inp')
    var i1 = i0[0].value.length
    var i2 = i0[1].value.length
    var i3 = i0[2].value.length
    var i4=i0[3].value.length
    if(i1==0){
        i0[0].style.border = '2px solid red'
        e.preventDefault();
    }
    else {
        i0[0].style.border = '2px solid green'
        
        if (i2==0){
            i0[1].style.border = '2px solid red'
            e.preventDefault();
        }
        else{
            i0[1].style.border = '2px solid green'
            if(i3==0){
                i0[2].style.border='2px solid red'
                e.preventDefault();
            }
            else{
                i0[2].style.border='2px solid green'
                if(i4==0){
                    i0[3].style.border="2px solid red"
                    e.preventDefault();
                }
                else{
                    i0[3].style.border="2px solid green"
                    if(document.getElementById('user_check').checked == false){ 
                        alert('Checkbox not checked');
                        return false;
                     }
                }
            }
            
        }
    }
    document.getElementById("prof_name").innerHTML = name1
    document.getElementById("prof_mail").innerHTML = name2
    document.getElementById("prof_number").innerHTML = name3
    document.getElementById("btn2").innerHTML="Log out"
    close_popup()
}
function openNav() {
    document.getElementsByClassName("sidenav")[0].style.display="inline";
    document.getElementById("mySidenav").style.width = "250px";

}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}