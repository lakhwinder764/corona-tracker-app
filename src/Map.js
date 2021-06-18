import React from 'react'
import {MapContainer ,TileLayer,Circle,Popup} from "react-leaflet"; 
 import "./Map.css";
import numeral from "numeral";
 const Map=({countries,mapcenter})=> {
    
  const casestypecolors={

    cases:{
        hex:"red",
        multiplier:800,
    },
    recovered:{
        hex:"#7dd71d",
        multiplier:1200,

    },
    deaths:{
        hex:"#fb4443",
        multiplier:2000,

    }
}
  return (
        <div className="map">
        <MapContainer center={mapcenter} zoom={4} scrollWheelZoom={true}>
       <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />{
              countries.map((country)=>{
               return(
                  <Circle
                    center={[country.countryInfo.lat,country.countryInfo.long]}
                    fillOpacity={0.4}
                    color={casestypecolors["recovered"].hex}
                    fillColor={casestypecolors["recovered"].hex}
                     radius={
                         Math.sqrt(country["recovered"]*(casestypecolors["recovered"].multiplier*10))
                    }

                  >
                    
                      <Popup >
                      <div className="info_container">
                        <div className="info_flag" style={{backgroundImage:`url(${country.countryInfo.flag})`}}/>
                        <div className="info_name">{country.country}</div>
                        <div className="info_confirmed">Cases: {numeral(country.cases).format("0,0")}</div>
                        <div  className="info_recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
                        <div  className="info_deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
                        </div>

                        </Popup>
                      </Circle>       
               )
           })
          }
       </MapContainer>
          </div>
    )
}

export default Map;
