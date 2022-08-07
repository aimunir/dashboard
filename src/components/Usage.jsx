import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Usage = () => {

  const options = {
    chart: {
        type: 'column',
        backgroundColor: null,
        height:"150"        
    },
    exporting:false,
    title: {
        text: ""
    },
    legend:{ enabled:false },
  credits: {
      enabled: false,
    },
    
    xAxis: {
        plotLines: [{ // mark the weekend
            color: 'red',
            width: 2,
         
            dashStyle: 'longdashdot'
        }],
    categories: ['M', 'T', 'W','T', 'F', 'S','S']
        
    },
    yAxis: {
  
   opposite: true,
        labels: {
        format: "{text}h", // The $ is literally a dollar unit
      },
        title:{
        text:""
        }
       
    },
    tooltip: {
        
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        },
           series: {
            pointWidth: 15,    

        }
        
    },
    series: [
    
    { 
        data: [0,1,1,1,1,1,1],
         color:"#F2F4F7" ,
         showInLegend: false,
        linkedTo: 'series1'
    },
      
    {
        name: 'Productivity',
        data: [0,1,1,0,3,2,1],
        color:"#1D4ED8"
    }, {
        name: 'Communication',
        data: [2, 1, 3, 2, 1,1,6],
         color:"#33BFFF"
    }, {
        name: 'Creativity',
        data: [3, 2, 4, 2, 5,1,6],
         color:"#EC4899"
    },
    {
        name: 'Others',
        data: [3, 4, 4, 2, 5,1,6],
         color:"#22C55E"
    },
    
     
      
   
    ]
}
  return (
    <div className="drop-shadow-2xl bg-gray-100 w-[48%] h-[48%]] rounded-xl ml-8 mr-6">
      <div>
        <div className="flex justify-between ">
          <h4 className="text-[15px] font-bold text-gray-500 mt-8 ml-8 ">
            Usage Yesterday, 24 June
          </h4>

          {/* slider  */}
          <div className="mt-8 mr-8 flex gap-2">
            <div className="w-7 h-7 bg-gray-50 drop-shadow-2xl rounded-md">
              <ChevronLeftIcon className="text-gray-200" />
            </div>

            <div className="bg-gray-50 drop-shadow-2xl rounded-md px-3 text-[10px] flex items-center justify-center font-bold ">
              <p className="text-gray-500">Today</p>
            </div>

            <div className="w-7 h-7 bg-gray-50 drop-shadow-2xl rounded-md">
              <ChevronRightIcon className="text-gray-200" />
            </div>
          </div>

          {/* slider end   */}
        </div>

        <p className="text-[30px] font-bold leading-10 text-gray-700 ml-8 mt-3">
          7 h 34 min
        </p>
      </div>

      <div className="mt-6">
      <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default Usage;
