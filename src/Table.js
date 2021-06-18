import React from 'react'
import "./table.css";
import numeral from "numeral";
const Table=(props)=>
 {
    return (
        <div className="table">
       {props.countries.map((val)=>{
        return(
        
          <tr>
               <td>{val.country}</td>
               <td><strong>{numeral(val.cases).format(0,0)}</strong></td>
               </tr>
              
               
        )
          
               

        })}
            
        </div>
       
    )
}

export default Table
