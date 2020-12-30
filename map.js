
 var dict = {
    Thorncliffe: ["Thorncliffe Food Bank", "1 Leaside Park Dr, Unit 5B Toronto, ON M4H 1R1, Canada", 30000, "yes", "yes", 25000, 43.702648, -79.351601],
    DivineMercy: ["Divine Mercy Food Bank", "1074 Wyandotte St E, Windsor, ON N9A 3K2, Canada", 30000, "yes", "no", 25000, 42.319740, -83.021760],
    DailyBread: ["Daily Bread Food Bank", "191 New Toronto St, Etobicoke, ON M8V 2E7, Canada", 30000, "no", "no", 20000, 43.748547914999385, -79.519431997172]
  };
        
        function initMap() {
          var options = {
            zoom: 7,
            center: { lat:43.6532, lng: -79.3832 },
          };
          var map = new google.maps.Map(document.getElementById("map"), options);
  
          addMarker({
              coords: {lat: dict.DivineMercy[6], lng: dict.DivineMercy[7] },
              iconImage: {
              url: "../graphics/redapple.png",
              scaledSize: { width: 40, height: 40 },},
          content: formatDetails(dict.DivineMercy[0], dict.DivineMercy[1], dict.DivineMercy[2], dict.DivineMercy[3], dict.DivineMercy[4], dict.DivineMercy[5])
          });
          addMarker({ 
              coords:{lat: dict.Thorncliffe[6], lng: dict.Thorncliffe[7]},
              iconImage: { 
              url: "../graphics/greenapple.png",
              scaledSize: { width: 40, height: 40 },},
              content: formatDetails(dict.Thorncliffe[0], dict.Thorncliffe[1], dict.Thorncliffe[2], dict.Thorncliffe[3], dict.Thorncliffe[4], dict.Thorncliffe[5])
          });
          addMarker({ 
              coords:{lat: dict.DailyBread[6], lng:dict.DailyBread[7]},
              iconImage: { 
              url: "../graphics/yellowapple.png",
              scaledSize: { width: 40, height: 40 },},
              content: formatDetails(dict.DailyBread[0], dict.DailyBread[1], dict.DailyBread[2], dict.DailyBread[3], dict.DailyBread[4], dict.DailyBread[5])
          });
  
  
          function formatDetails(name, address, incomeLevel, identification, proofOfAddress, expenses){
              const html = `<div style=line-height:0.1 em>
              <p>${name}</p><br>
              <p>${address}</p><br>
              <p>income cutoff: ${incomeLevel}</p><br>
              <p>expense cutoff: ${expenses}</p><br>
              <p>id required: ${identification}</p> <br>
              <p>proof of address required: ${proofOfAddress}</p><br>
              </div>
              `;
              return html;        
          }
  
          function addMarker(props) {
            var marker = new google.maps.Marker({
              position: props.coords,
              map: map,
              icon: props.iconImage,
            });
          
  
          if(props.content){
              var infoWindow = new google.maps.InfoWindow({
            content: props.content,
          });
  
          marker.addListener("click", function() {
            infoWindow.open(map, marker);
          });
          }
        }
        }
