import React from "react";
import HeatMap from "@uiw/react-heat-map";
import dayjs from "dayjs";
import { TiktokIcon } from "../../assets";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

interface ContributionData {
  date: string;
  count: number;
}

export const ContributionHeatmap: React.FC<{
  data: Array<ContributionData>;
}> = ({ data }) => {
  const startDate = dayjs().startOf("year").format("YYYY-MM-DD");
  const endDate = dayjs().endOf("year").format("YYYY-MM-DD");
  return (
    <div className="p-3 sm:py-6 sm:px-8 bg-black border border-gray text-white rounded-3xl my-8">
      <div className="flex flex-col-reverse sm:flex-row justify-start items-center my-6 gap-x-4">
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="text-left text-lg sm:text-2xl font-semibold ml-0 sm:ml-3 font-bold">
            Posting History
          </h1>
          <div className="text-base sm:text-lg">
            Last Posted:{" "}
            {dayjs(data?.[0]?.date).format("Do MMM 'YY")}
          </div>
        </div>
        <div className="ml-auto text-sm gap-x-2 flex bg-gray items-center px-4 py-2 rounded-3xl my-3 sm:mb-0">
          <TiktokIcon width={15} height={20} />
          TikTok data only
        </div>
      </div>
      <div className="w-[1200] overflow-auto">
        <HeatMap
          startDate={new Date(startDate)}
          legendCellSize={0}
          width={1210}
          endDate={new Date(endDate)}
          value={data}
          weekLabels={["S", "M", "T", "W", "T", "F", "S"]}
          monthLabels={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          className="text-white h-[200px]"
          style={{ color: "white", fontSize: "16px" }}
          rectProps={{
            rx: 5,
          }}
          rectSize={20}
        />
      </div>
    </div>
  );
};
