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
    var my_lat = position.coords.latitude
    var my_long = position.coords.longitude
    function initMap() {


      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

      map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: my_lat, my_long,
        mapId: "DEMO_MAP_ID",
      });
      new google.maps.Marker({
          position: my_lat, my_long,
          map,
          title: "You",
      })

      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
      });

      var place1 = { lat: position.coords.latitude, lng: position.coords.longitude};
      var marker1 = new google.maps.Marker({ position: place1, map: map });

      var place2 = { lat: position.coords.latitude, lng: position.coords.longitude };
      var marker2 = new google.maps.Marker({ position: place2, map: map });

      // Calculate and display the distance between markers
      var distance = haversine_distance(marker1, marker2);
      document.getElementById('msg').innerHTML = "Area Covered: " + (distance.toFixed(2))*0.1 + " mi." + "Percentage Covered:" + (((distance.toFixed(2))*0.1) / 3.55).toFixed(2) + "%" ;
    }

    initMap();
