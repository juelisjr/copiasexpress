/*
* Código seguido de um artigo do Tableless
* (http://tableless.com.br/api-google-maps-v3/ - por Thulio Philipe)
*
* Implementado por Juelis Jr. (juelis.jr@outlook.com)
*/

function initialize() {

    // Exibir mapa;
    var myLatlng = new google.maps.LatLng(-23.3446174, -51.1824015,18);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false, //desabilita o zoom com o scroll do mouse
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // Parâmetros do texto que será exibido no clique;
    var content = "<h2>Copias Express</h2>\r\n<p><em class=\"icon-map-marker\"></em> Av. Terra de Santana, 650</p>\r\n<p><em class=\"icon-phone\"></em> (43) 3356-0925</p>\r\n<p><em class=\"icon-envelope\"></em> <a href=\"mailto:copiasexpresslda@hotmail.com\">copiasexpresslda@hotmail.com</a></p>\r\n<p>&nbsp;</p>";
    var infowindow = new google.maps.InfoWindow({
        content: content,
        maxWidth: 700
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


    // Exibir texto ao clicar no ícone;
    google.maps.event.addListener(marcadorCopiasExpress, 'click', function() {
        infowindow.open(map,marcadorCopiasExpress);
    });

}

// Função para carregamento assíncrono
function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src ="http://maps.googleapis.com/maps/api/js?key=AIzaSyCT14sPT0mLB-aWBB6ASeajiVhbVsZII7I&sensor=false&callback=initialize";

    document.body.appendChild(script);
}

window.onload = loadScript;