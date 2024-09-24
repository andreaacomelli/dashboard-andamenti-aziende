import React, { useState } from 'react';
import Card from '../Components/Card.jsx';
import '../Style/App.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/Data.js";

Chart.register(CategoryScale);

function App() {

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    
    <div className="App">
      <h1>Dati aggiornati</h1>
      <div className="card-container">
         <Card 
           title="Azienda 1" 
           content="Azienda che si occupa di ." 
           chartTest={chartData}
           button="Button"
         />
         <Card 
           title="Azienda 2" 
           content="Azienda che si occupa di ." 
           chartTest={chartData}
         />
         <Card 
           title="Azienda 3" 
           content="Azienda che si occupa di ." 
           chartTest={chartData}
         />
         <Card 
           title="Azienda 4" 
           content="Azienda che si occupa di ." 
           chartTest={chartData}
         />
       </div>
     </div>
  );
}

export default App;