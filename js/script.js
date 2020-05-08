$(document).ready(function(){

    $("ul,li").on('click',function(){
        $(this).addClass("active").siblings().removeClass("active");
        return false;
    })
    //Gestion de la navigation sidebar
     //initale page
     $('.app_container').load('menu/message.html');
    
     //gérer les menus on clicks
     $("#main a").click(function(){
         var lien = $(this).attr('href');
         $(".app_container").load('menu/'+lien+'.html');
     })

});
