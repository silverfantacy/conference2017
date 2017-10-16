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
    $(".banner").addClass("animated fadeInLeftBig");
    // nav flex 
    $(window).on("scroll",function(){
        var scrolDistance = $(window).scrollTop(); //滾動距離
        var $nav = $("nav");
        if(scrolDistance > 155) {
            $nav.addClass("fixed-top");
            // $("nav").css("background-color","rgba(29, 63, 123, 1");
        }
        else{
            $nav.removeClass("fixed-top");
            // $("nav").css("background-color","rgba(29, 63, 123, 0.85");
        };
        // if(scrolDistance > 400) {
        //     $(".about-content").css("display","flex");
        //     $(".about-content").addClass("fadeInLeftBig");
        //     
        // };
    })
    // 滾動選單
     
    // $('.introduction-btn').click(function () {
    //     $('html,body').animate({
    //         scrollTop: $('#introduction').offset().top
    //     }, 1000);
    // });
    // $('.location-btn').click(function () {
    //     $('html,body').animate({
    //         scrollTop: $('#location').offset().top
    //     }, 1000);
    // });
    // $('.traffic-btn').click(function () {
    //     $('html,body').animate({
    //         scrollTop: $('#traffic').offset().top
    //     }, 1000);
    // });
    // $('.information-btn').click(function () {
    //     $('html,body').animate({
    //         scrollTop: $('#information').offset().top
    //     }, 1000);
    // });
    // $('.meeting-btn').click(function () {
    //     $('html,body').animate({
    //         scrollTop: $('#meeting').offset().top
    //     }, 1000);
    // });
    // $('.credit-btn').click(function () {
    //     $('html,body').animate({
    //         scrollTop: $('#credit').offset().top
    //     }, 1000);
    // });
    // traffic ul 
    $(".collapsed").on("click",function(){
        // console.log(123);
        $(this).parent().parent().parent().siblings().find(".card-header").removeClass("bottom-border-none");
        $(this).parent().parent().toggleClass("bottom-border-none");
    });
});