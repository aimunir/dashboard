import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Productivity = () => {

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
        color: "#A855F7",
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
    <div className="w-[264px] h-[168px] bg-purple-100 drop-shadow-2xl rounded-xl mt-6">
      <div className="flex gap-5">
        <div className="flex flex-col gap-6 my-6 ml-6">
          <h4 className="font-bold text-sm text-purple-700">Productivity</h4>
          <p className="font-bold text-purple-700 text-sm  ">5%</p>
          <p className="font-bold text-purple-700 text-[20px] leading-[28px] ">
            1 h 21 min
          </p>
        </div>

        {/* chart  */}
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        {/* chart  */}
      </div>
    </div>
  );
};

export default Productivity;
