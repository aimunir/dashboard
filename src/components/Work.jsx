import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Work = () => {

  const options = {
    chart: {
      type: "column",
      backgroundColor: null,
      height: "200",
      width: "200",
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
        color:"#60A5FA",
        data: [
          {
            y: 40,
          },

          {
            name: "Chrome",
            y: 45,
            drilldown: "Chrome",
          },

          {
            name: "Chrome",
            y: 40,
            drilldown: "Chrome",
          },
          {
            name: "Chrome",
            y: 30,
            drilldown: "Chrome",
          },

          {
            name: "Chrome",
            y: 10,
            drilldown: "Chrome",
          },

          {
            name: "Chrome",
            y: 20,
            drilldown: "Chrome",
          },

          {
            name: "Firefox",
            y: 10.57,
            drilldown: "Firefox",
          },
          {
            name: "Internet Explorer",
            y: 7.23,
            drilldown: "Internet Explorer",
          },
          {
            name: "Safari",
            y: 5.58,
            drilldown: "Safari",
          },
          {
            name: "Edge",
            y: 4.02,
            drilldown: "Edge",
          },
          {
            name: "Opera",
            y: 1.92,
            drilldown: "Opera",
          },
          {
            name: "Other",
            y: 7.62,
            drilldown: null,
          },
        ],
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  };




  return (
    <div className="w-[264px] h-[264px]  bg-primary-600 rounded-xl">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-primary-400 ml-6 mt-6 ">Time At Work</h4>
          </div>
          <div className="drop-shadow-2xl bg-primary-500 mr-6 mt-5  px-1 rounded-xl ">
            <DotsHorizontalIcon className="w-5 text-gray-200 " />
          </div>
        </div>

        <div>
         
        <HighchartsReact highcharts={Highcharts} options={options} />




        </div>
      </div>
    </div>
  );
};

export default Work;
