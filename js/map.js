/*
* Ccdigo seguido de um artigo do Tableless
* (http://tableless.com.br/api-google-maps-v3/ - por Thulio Philipe)
*
* Implementado por Juelis Jr. (juelis.jr@outlook.com)
*/

function initialize() {

    // Exibir mapa;
    var myLatlng = new google.maps.LatLng(-23.3446174, -51.1824015,18);
    var latLngJk = new google.maps.LatLng(-23.3172862,-51.1725535,17);

    var latLngMap = new google.maps.LatLng(-23.3289906,-51.182424,13);

    var mapOptions = {
        zoom: 13.8,
        center: latLngMap,
        scrollwheel: false, //desabilita o zoom com o scroll do mouse
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Parametros do texto que sera exibido no clique;
    var content = "<h2>Copias Express</h2>\r\n<p><em class=\"icon-map-marker\"></em> Av. Terra de Santana, 650</p>\r\n<p><em class=\"icon-phone\"></em> (43) 3356-0925</p>\r\n<p><em class=\"icon-envelope\"></em> <a href=\"mailto:copiasexpresslda@hotmail.com\">copiasexpresslda@hotmail.com</a></p>\r\n<p>&nbsp;</p>";
    var infowindow = new google.maps.InfoWindow({
        content: content,
        maxWidth: 700
    });

    var contentJK = "<h2>Copias Express</h2>\r\n<p><em class=\"icon-map-marker\"></em> Av. Juscelino Kubitschek, 1739</p>\r\n<p><em class=\"icon-phone\"></em> (43) 3304-1544</p>\r\n<p><em class=\"icon-envelope\"></em> <a href=\"mailto:copiasexpress2@outlook.com\">copiasexpress2@outlook.com</a></p>\r\n<p>&nbsp;</p>";
    var infowindowJk = new google.maps.InfoWindow({
        content: contentJK,
        maxWidth: 800
    });

    var map = new google.maps.Map(document.getElementById("copias-express-map"), mapOptions);

    // Marcador personalizado;
    var image = 'https://cdn1.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/48/MapMarker_Marker_Outside_Azure.png';
    var marcadorCopiasExpress = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image,
        title: 'Copias Express - Copiadora Londrina/PR',
        animation: google.maps.Animation.DROP
    });

    var marcadorCopiasExpressJK = new google.maps.Marker({
        position: latLngJk,
        map: map,
        icon: image,
        title: 'Copias Express JK - Copiadora Londrina/PR',
        animation: google.maps.Animation.DROP
    });

    // Exibir texto ao clicar no icone;
    google.maps.event.addListener(marcadorCopiasExpress, 'click', function() {
        infowindow.open(map,marcadorCopiasExpress);
    });
    google.maps.event.addListener(marcadorCopiasExpressJK, 'click', function() {
        infowindowJk.open(map,marcadorCopiasExpressJK);
    });

}

// Funçao para carregamento assincrono
function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src ="https://maps.googleapis.com/maps/api/js?key=AIzaSyCT14sPT0mLB-aWBB6ASeajiVhbVsZII7I&sensor=false&callback=initialize";

    document.body.appendChild(script);
}

window.onload = loadScript;
