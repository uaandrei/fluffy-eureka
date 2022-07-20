import { ResponsiveLine, Serie } from "@nivo/line";
import _ from "lodash";
import { useState } from "react";
import { investService } from "../services";
import { HistoricalDataStorageModel } from "../models";

const InvestmentChart = () => {
  const [chartData, setChartData] = useState<HistoricalDataStorageModel[]>(
    investService.getHistoricData()
  );

  const importData = () => {
    const data = investService.getHistoricData();
    setChartData(data);
  };

  const transformData = (chartData: HistoricalDataStorageModel[]): Serie => {
    const data = _.map(chartData, (p) => ({
      x: p.date.split("T")[0],
      y: p.vuan.toString(),
    }));
    const serie: Serie = {
      id: "BRD Actiuni",
      data,
    };
    return serie;
  };
  const data = transformData(chartData);
  return (
    <>
      <div>
        <button type="button" onClick={importData}>
          Refresh data
        </button>
      </div>
      {data && (
        <div style={{ height: "600px" }}>
          <ResponsiveLine
            data={[data]}
            pointLabelYOffset={-12}
            enableSlices="x"
            margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
            axisBottom={{ tickRotation: -72 }}
            yScale={{
              type: "linear",
              min: "auto",
            }}
          />
        </div>
      )}
    </>
  );
};

export { InvestmentChart };
