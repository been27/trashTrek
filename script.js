let map;
    let msg;

    function haversine_distance(marker1, marker2) {
      var R = 3958.8; // Radius of the Earth in miles
      var rlat1 = marker1.position.lat() * (Math.PI/180); // Convert degrees to radians
      var rlat2 = marker2.position.lat() * (Math.PI/180); // Convert degrees to radians
      var difflat = rlat2 - rlat1; // Radian difference (latitudes)
      var difflon = (marker2.position.lng() - marker1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

      var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
      return d;
    }

    async function initMap() {
      const position = { lat: 40.7767, lng: -73.9761 };

      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

      map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position,
        mapId: "DEMO_MAP_ID",
      });

      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
      });

      var place1 = { lat: 40.7767, lng: -73.9761 };
      var marker1 = new google.maps.Marker({ position: place1, map: map });

      var place2 = { lat: 40.7712, lng: -73.9673 };
      var marker2 = new google.maps.Marker({ position: place2, map: map });

      // Calculate and display the distance between markers
      var distance = haversine_distance(marker1, marker2);
      document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " mi.";
    }

    initMap();


const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const trashButton = document.getElementById('trashButton');

startButton.addEventListener('click', () => {
  alert("Miles tracking has started!");
  InputLocation();
});

stopButton.addEventListener('click', () => {
  alert("Miles tracking has stopped.");
});

trashButton.addEventListener('click', () => {
  alert("Pinging Trash at your Location.");
});

function InputLocation() {
  let myDiv = document.getElementById("GFG");
            // creating button element
            let button = document.createElement('BUTTON');
            // creating text to be
            //displayed on button
            let text = document.createTextNode("Button");
             
            // appending text to button
            button.appendChild(text);
            // appending button to div
            myDiv.appendChild(button);;
}


function NavBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function createInputField() {
  // Create an input element
  var inputField = document.createElement("input");
  inputField.type = "text";
  inputField.placeholder = "Enter something";

  // Append the input element to the container
  var container = document.getElementById("inputFieldContainer");
  container.appendChild(inputField);
}



function showPos(position){   
  latt = position.coords.latitude;   
  long = position.coords.longitude;   
  var lattlong = new google.maps.LatLng(latt, long);   
  var myOptions = {   
      center: lattlong,   
      zoom: 15,   
      mapTypeControl: true,   
      navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL}   
  }   
  var maps = new google.maps.Map(document.getElementById("demo"), myOptions);   
  var markers =   
  new google.maps.Marker({position:lattlong, map:maps, title:"You are here!"});   
}   


var x= document.getElementById("location");  
            function getlocation() {  
                if(navigator.geolocation){  
                    navigator.geolocation.getCurrentPosition(showPosition)  
                  }  
                else  
                {  
                     alert("Sorry! your browser is not supporting")  
                 } }  
               
             function showPosition(position){  
               var y = "Your current location is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude + ")";  
                        document.getElementById("location").innerHTML = x;  
             }  
             function getlocation(){   
              if(navigator.geolocation){   
                  navigator.geolocation.getCurrentPosition(showPos, showErr);   
              }  
               
          }  
