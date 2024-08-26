import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const location = { lng: 73.8504619, lat:  18.4570715 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = 'bS6xTZquA6J8keFCWweI';

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
      
        map.current = new maptilersdk.Map({
          container: mapContainer.current,
          style: maptilersdk.MapStyle.STREETS,
          center: [location.lng, location.lat],
          zoom: zoom
        });

        var popup = new maptilersdk.Popup({ offset: 25 }).setText(
            'National Disaster Response Force (NDRF)'
        );

        var popup1 = new maptilersdk.Popup({ offset: 25 }).setText(
            'State Disastar Management Authority (SDMA)'
        );

        var popup2 = new maptilersdk.Popup({ offset: 25 }).setText(
          'Local Police Katraj'
      );

      var popup3 = new maptilersdk.Popup({ offset: 25 }).setText(
        'Ministry of Water Resources (MoWR)'
    );
        
        
        var marker = new maptilersdk.Marker({color: "#FF0000"})
        .setLngLat([location.lng, location.lat])
        .setPopup(popup1)
        .addTo(map.current);

        marker.togglePopup();

        var marker2 = new maptilersdk.Marker({color: "#FF0000"})
        .setLngLat([location.lng + 0.01, location.lat])
        .setPopup(popup2)
        .addTo(map.current);

        marker2.togglePopup();

        var marker3 = new maptilersdk.Marker({color: "#FF0000"})
        .setLngLat([location.lng, location.lat + 0.01])
        .setPopup(popup3)
        .addTo(map.current);

        marker3.togglePopup();

        var marker1 = new maptilersdk.Marker({color: "#FF0000"})
        .setLngLat([location.lng + 0.01, location.lat - 0.01])
        .setPopup(popup)
        .addTo(map.current);

        marker1.togglePopup();
            
      
      }, [location.lng, location.lat, zoom]);

      return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      );
  }
