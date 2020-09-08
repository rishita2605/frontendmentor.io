$(".right").click(imageTwo);
$(".left").click(imageOne);


function imageTwo(){
    $(".profile-img-2").css("display","flex");
    $(".profile-img-1").css("display","none");

    setTimeout(()=>{
    $(".profile-img-2").css("opacity","1");
    $(".paraTwo").css("opacity","1");
    $(".paraTwo").css("display","block");
    $(".paraOne").css("display","none");
    },100);
    
    
}

function imageOne(){
    $(".profile-img-1").css("display","flex");
    $(".profile-img-2").css("display","none");

    setTimeout(()=>{
    $(".profile-img-1").css("opacity","1");
    $(".paraOne").css("opacity","1");
    $(".paraOne").css("display","block");
    $(".paraTwo").css("display","none");

    },100);
    
    
}

