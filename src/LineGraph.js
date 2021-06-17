import { SportsRugbySharp } from '@material-ui/icons';
import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Line } from "react-chartjs-2";




















const LineGraph=()=> {
    const [Data,setData]=useState({});
    const buildChartData=(data,casesType="cases")=>{
        const chartData=[];
        let lastDataPoint;
        for(let date in data.cases){
            if(lastDataPoint){
                const newDataPoint={
                    x:date,
                    y:data[casesType][date]-lastDataPoint
                }
               chartData.push(newDataPoint);
            }
            lastDataPoint=data[casesType][date];
        }
        return chartData;  
    }
       
       


    useEffect(() => {
       axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
       .then((res)=>{
          const  chartData=buildChartData(res.data)
          setData(chartData);
       
       })
         }
    , [])
    
    return (
        <div>
            <Line
                
            data={{
                datasets:[
                    {
                        backgroundColor:"rgba(204,16,52,0)",
                        borderColor:"#CC1034",
                        data:Data
                    },
                 ],
            }}

           
           
            
            
            />
        </div>
    )
}

export default LineGraph
