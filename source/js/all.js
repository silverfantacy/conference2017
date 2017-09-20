// Google Map API
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 25.0387255,
            lng: 121.5186745
        },
        zoom: 18
    });
    var marker = new google.maps.Marker({
        position: {
            lat: 25.0387255,
            lng: 121.5186745
        },
        map: map,
        title: '張榮發基金會'
    })
}

$(document).ready(function(){
    // nav flex 
    $(window).on("scroll",function(){
        var scrolDistance = $(window).scrollTop(); //滾動距離
        var $nav = $("nav");
        if(scrolDistance > 155) {
            $nav.addClass("fixed-top");
        }
        else{
            $nav.removeClass("fixed-top");
        };
        if(scrolDistance > 400) {
            $(".about-content").css("display","flex");
            $(".about-content").addClass("fadeInLeftBig");
        };
        
    })
    // traffic ul 
    $(".collapsed").on("click",function(){
        // console.log(123);
        $(this).parent().parent().parent().siblings().find(".card-header").removeClass("bottom-border-none");
        $(this).parent().parent().toggleClass("bottom-border-none");
    })
});