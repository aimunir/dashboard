import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const WebStatistic = () => {
  const options = {
    chart: {
      type: "area",
      backgroundColor: null,
      height: "100",
    },
    title: {
      text: "",
    },
    legend: { enabled: false },
    credits: {
      enabled: false,
    },

    xAxis: {
      lineWidth: 0,

      labels: {
        enabled: false,
      },
      minorTickLength: 0,
      tickLength: 0,
    },
    yAxis: {
      visible: false,
      crosshair: {
        label: {
          enabled: false,
        },
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
    },
    tooltip: {
      backgroundColor: "white",
      borderColor: "rgba(168, 85, 247, 0)",
      borderRadius: 20,
      borderWidth: 3,

    },
    plotOptions: {
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
          6000, 0, 0, 0, 0, 6, 11, 32, 110, 235, 369, 640, 1005, 1436, 2063, 3057,
          4618, 6444, 9822, 15468, 20434, 24126, 27387, 29459, 31056, 31982,
          32040, 31233, 29224, 27342, 26662, 26956, 27912, 28999, 28965, 27826,
          25579, 25722, 24826, 24605, 24304, 23464, 23708, 24099, 24357, 24237,
          24401, 24344, 23586, 22380, 21004, 17287, 14747, 13076, 12555, 12144,
          11009, 10950, 10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295,
          10104, 9914, 9620, 9326, 5113, 5113, 4954, 4804, 4761, 4717, 4368,
          4018,
        ],
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgb(76, 175, 80)"],
            [1, "rgba(255,255,255,.25)"],
          ],
        },
      },
    ],
  };

  return (
    <div className="w-[360px] h-[178px] bg-white rounded-xl">
      <div className="flex flex-col">
        <div className=" flex items-center justify-between ">
          <h3 className="font-bold text-[14px] text-gray-700 mt-[30px] ml-[30px]">
            Web Statistic
          </h3>
          <div className="drop-shadow-2xl bg-white mr-6 mt-5 py-1 px-1 rounded-md">
            <DotsHorizontalIcon className="w-5 text-gray-200 " />
          </div>
        </div>

        <div className="w-full ">
        <HighchartsReact highcharts={Highcharts} options={options} />

        </div>
      </div>
    </div>
  );
};

export default WebStatistic;
