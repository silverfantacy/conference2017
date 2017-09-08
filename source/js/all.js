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

// $(document).ready(function(){
//     $('.about-btn').on('click',function(e){
//         console.log("123");
//         $('html,body').animate({scrollTop:$('#about').offset().top},1000);
//     })
// });