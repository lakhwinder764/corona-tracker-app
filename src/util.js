import React from "react";
import {Circle,Popup} from "react-leaflet";
import numeral from "numeral";


export const sortData=(data)=>{
    const sortedData=[...data];
return sortedData.sort((a,b)=>a.cases>b.cases? -1:1)

}

export const prettyprintstat=(stat)=>{
    stat?`+${numeral(stat).format("0.0a")}`:""
}


     
