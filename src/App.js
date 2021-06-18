import './App.css';
import React,{useState,useEffect} from "react";
import {MenuItem,FormControl,Select,Card,CardContent} from "@material-ui/core";
import axios from "axios";
import InputBox from "./Input";
import Map from "./Map"; 
import Table from "./Table";
import {sortData} from "./util";
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css";
import {prettyprintstat} from "./util";
function App() {
   const [countries1,setcountries]=useState([]);
   const[countryinfo,setcountryinfo]=useState({});
    const [country,setcountry]=useState("worldwide");  
    const [Data,setTableData]=useState([]);
    const [mapcenter,setmapcenter]=useState({
      lat:"20",
      lng:"77"
    }); 
    const [mapcountries,setmapcountries]=useState([]);
    const [casetype,setcasetype]=useState([]);    
    
    useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/all")
    .then((res)=>{
      setcountryinfo(res.data);
    })
   
    
  }, [])

  useEffect(()=>{
             
    
      axios.get("https://disease.sh/v3/covid-19/countries")
      .then((res)=>{
       
         
         const countries=res.data.map((val)=>{
              return(
                {
                  name:val.country,
                  value:val.countryInfo.iso2
                }
              )
          //  })
         
      })
     const sortedData=sortData(res.data);
      setcountries(countries);
      setmapcountries(sortedData);
      setTableData(sortedData);
      
      
     
     
    }
      )
     
  }
    
   ,[])
   

  const onCountryChange=async(event)=>{
       const code =  event.target.value;
             

       const url=code==="worldwide"?"https://disease.sh/v3/covid-19/all":
       `https://disease.sh/v3/covid-19/countries/${code}`;
       
       
       axios.get(url)
       .then((res)=>{
         
        
          setcountry(code);
          
          setcountryinfo(res.data);
         setmapcenter([res.data.countryInfo.lat,res.data.countryInfo.long]);
          console.log(mapcountries);
         
         
      })
    
        }
  return (
    <div className="app">
        <div className="app_left">
           <div className="app_header">
             <h1>COVID-19 TRACKER</h1>
             <FormControl className="app_dropdown">
                 <Select
               variant="outlined"
               value={country}
               onChange={onCountryChange}
               >
         <MenuItem value="worldwide">worldwide</MenuItem>
         {
           countries1.map((val)=>{
             return(
               
            <MenuItem value={val.value}>{val.name}</MenuItem>
             )
           })
         }      
          
            </Select>

               </FormControl>
      </div>
             <div className="app_stats">
              <InputBox title="coronavirus cases" total={countryinfo.cases} cases={prettyprintstat(countryinfo.todayCases)}/>
              <InputBox title="recovered cases" total={countryinfo.recovered}  cases={prettyprintstat(countryinfo.todayRecovered)}/>
              <InputBox title="deaths" total={countryinfo.deaths}   cases={prettyprintstat(countryinfo.todayDeaths)}/>       
       
       </div>
               <Map countries={mapcountries} mapcenter={mapcenter}/> 
             </div>


        <Card className="app_right">
     <CardContent>
       <h3> Live cases By Country </h3>
       <Table countries={Data}/>
       <h3>Worldwide new cases</h3>
       <LineGraph/>

       </CardContent>
  </Card>



      </div>
  );
}

export default App;
