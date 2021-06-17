import React from 'react'
import {Map as LeafletMap,TitleLayer} from "react-leaflet"; 
import "./Map.css";
const Map=()=> {
    return (
        <div className="map">
            <LeafletMap>
                <TitleLayer
                 
                 url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               />
                
                </LeafletMap>
        </div>
    )
}

export default Map
