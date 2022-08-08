import React, { useState } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import Chart from "react-apexcharts";

const Sales = () => {
  const [state, setState] = useState({
    series: [100, 55, 41],

    options: {
      chart: {
        // width: 100,
        width: "100%",
        background: "transparent",
        type: "donut",

        offsetX: 0,
        offsetY: 0,
      },
      colors: ["#7E22CE", "#D8B4FE", "#F3E8FF"],
      labels: ["Direct", "Google", "Apple"],
      plotOptions: {
        pie: {
          customScale: 1,
          // startAngle: -90,
          // endAngle: 270,
          expandOnClick: false,
          donut: {
            // size: "65%",
            labels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                show: true,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter",
        fontSize: "12px",
        fontWeight: 700,
      },

      title: {
        text: "",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div className="w-[360px] h-[466px] bg-white rounded-xl ml-8 mr-6 ">
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm text-gray-700 leading-5 ml-[30px] mt-[30px]  ">
            Sales By Referrer
          </h4>
          <div className="drop-shadow-2xl bg-white mr-6 mt-5 py-1 px-1 rounded-md">
            <DotsHorizontalIcon className="w-5 text-gray-200 " />
          </div>
        </div>

        <div className="mt-12">
          <Chart options={state.options} series={state.series} type="donut" />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Sales;
