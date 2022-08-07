import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Costs = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: null,
      height: "200",
      width: "330",
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    exporting: false,

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
     
      labels: {
        format: "${text}k", // The $ is literally a dollar unit
      },
      title: {
        text: "",
      },
      crosshair: true,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemMarginTop: 10,
      itemMarginBottom: 10,
      padding: 0,
    },
    plotOptions: {
      series: {
        column: {
          pointPadding: 0,
          borderWidth: 20,
        },
        borderWidth: 0,
        pointWidth: 10,
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
        name: "Actual",
        color: "#22C55E",
        data: [
          {
            name: "Actual",
            y: 5,
          },
        ],
      },
      {
        name: "Planning",
        color: "#A855F7",

        data: [
          {
            name: "Planning",
            y: 3.0,
          },
        ],
      },
      {
        name: "Buget",
        color: "#33BFFF",
        data: [
          {
            name: "Buget",
            y: 1.0,
          },
        ],
      },
    ],
  };

  return (
    <div className="w-[360px] h-[264px] bg-white rounded-xl mt-6">
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-gray-700 leading-5 ml-[30px] mt-[30px]  ">
            Costs
          </h4>
          <div className="drop-shadow-2xl bg-white mr-6 mt-5 py-1 px-1 rounded-md">
            <DotsHorizontalIcon className="w-5 text-gray-200 " />
          </div>
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

export default Costs;
