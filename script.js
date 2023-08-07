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
      const position = { lat: 37.74061216101497, lng: -122.20093266021861 };

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

      var place1 = { lat: 37.74061216101497, lng: -122.20093266021861 };
      var marker1 = new google.maps.Marker({ position: place1, map: map });

      var place2 = { lat: 37.76018716828384, lng: -122.2072094701916 };
      var marker2 = new google.maps.Marker({ position: place2, map: map });

      // Calculate and display the distance between markers
      var distance = haversine_distance(marker1, marker2);
      document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " mi.";
      
      document.getElementById('msg').innerHTML = "% Explored: " + roundedValue;

    }

    initMap();

 

    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const trashButton =document.getElementById('trashButton');
 
 
    startButton.addEventListener('click', () => {
      alert("Miles tracking has started!");
    });
 
 
    stopButton.addEventListener('click', () => {
      alert("Miles tracking has stopped.");
    });
    trashButton.addEventListener('click', ()=> {
        alert("Pinging Trash at your Location.");
    });
 
