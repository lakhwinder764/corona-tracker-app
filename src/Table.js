import React from 'react'
import "./table.css";
const Table=(props)=>
 {
    return (
        <div className="table">
       {props.countries.map((val)=>{
        return(
        
          <tr>
               <td>{val.country}</td>
               <td><strong>{val.cases}</strong></td>
               </tr>
              
               
        )
          
               

        })}
            
        </div>
       
    )
}

export default Table
