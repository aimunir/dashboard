import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Creativity = () => {
  const options = {
    chart: {
      type: "area",
      backgroundColor: null,
      marginLeft: 0,
      marginRight: 0,
      height: "233",
     
    },
    title: {
      text: "",
    },

    tooltip: {
      backgroundColor: "white",
      borderColor: "rgba(168, 85, 247, 0)",
      borderRadius: 20,
      borderWidth: 3,
    },
    legend: { enabled: false },
    credits: {
      enabled: false,
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
      crosshair: {
        // label: {
        //   enabled: false,
        // },
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
    },

    plotOptions: {
      series: {
        lineColor: '#b8bfc2'
      
    },
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        data: [
          6000, 0, 0, 0, 0, 6, 11, 32, 110, 235, 369, 640, 1005, 1436, 2063,
          3057, 4618, 6444, 9822, 15468, 20434, 24126, 27387, 29459, 31056,
          31982, 32040, 31233, 29224, 27342, 26662, 26956, 27912, 28999, 28965,
          27826, 25579, 25722, 24826, 24605, 24304, 23464, 23708, 24099, 24357,
          24237, 24401, 24344, 23586, 22380, 21004, 17287, 14747, 13076, 12555,
          12144, 11009, 10950, 10871, 10824, 10577, 10527, 10475, 10421, 10358,
          10295, 10104, 9914, 9620, 9326, 5113, 5113, 4954, 4804, 4761, 4717,
          4368, 4018,
        ],
        color: "rgba(168, 85, 247, 0)",
        lineWidth: 1
      },
    ],
  };

  return (
    <div className="drop-shadow-2xl bg-purple-600  w-[264px] h-[264px]  rounded-xl mt-6">
      <div className="">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-purple-300 ml-6 mt-6 ">
              Creativity
            </h4>
          </div>
          <div className="drop-shadow-2xl bg-purple-500 mr-6 mt-5  px-1 rounded-xl ">
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

export default Creativity;
