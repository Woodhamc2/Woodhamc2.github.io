
      function initMap() {
        var customMapType = new google.maps.StyledMapType([
            {
              stylers: [
                {hue: '#0a75e1'},
                {visibility: 'simplified'},
                {gamma: 0.5},
                {weight: 0.5}
              ]
            },
            {
              elementType: 'labels',
              stylers: [{visibility: 'on'}]
            },
            {
              featureType: 'water',
              stylers: [{color: '#0a75e1'}]
            }
          ], {
            name: 'Custom Style'
        });
        var customMapTypeId = 'custom_style';

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 35.0757091, lng: -80.85869559999998},  // Brooklyn.
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
          }
        });

        map.mapTypes.set(customMapTypeId, customMapType);
        map.setMapTypeId(customMapTypeId);
      }
