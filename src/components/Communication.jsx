import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Communication = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: null,
      height: "150",
      width: "110",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      lineWidth: 0,
      crosshair: true,

      labels: {
        enabled: false,
      },
      minorTickLength: 0,
      tickLength: 0,
    },
    yAxis: {
      visible: false,
      crosshair: true,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        color: "",
        borderRadius: 5,
      },
    },

    tooltip: {
      backgroundColor: "white",
      borderColor: "rgba(168, 85, 247, 0)",
      borderRadius: 20,
      borderWidth: 3,
    },

    series: [
      {
        color:"#33BFFF",
        data: [
          {
            y: 40,
          },

          {
            
            y: 45,
            
          },

          {
            
            y: 40,
            
          },
          {
            
            y: 30,
            
          },

          {
            
            y: 10,
            
          },

          {
            
            y: 20,
            
          },

          {
            
            y: 10.57,
           
          },
          {
           
            y: 7.23,
           
          },
          {
           
            y: 5.58,
           
          },
          {
          
            y: 4.02,
           
          },
          {
           
            y: 1.92,
           
          },
          {
          
            y: 7.62,
            
          },
        ],
      },
    ],

  };

  return (
    <div className=" w-[264px] h-[168px] bg-sky-300 drop-shadow-2xl rounded-xl ">
      <div className="flex gap-5">
        <div className="flex flex-col gap-6 my-6 ml-6">
          <h4 className="font-bold text-sm text-sky-700">Communication</h4>
          <p className="font-bold text-sky-700 text-sm  ">5%</p>
          <p className="font-bold text-sky-700 text-[20px] leading-[28px] ">
            1 h 21 min
          </p>
        </div>
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Communication;
