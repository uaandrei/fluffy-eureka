import { ResponsiveLine, Serie } from "@nivo/line";
import _ from "lodash";
import { useState } from "react";
import { investService } from "../services";
import {
  HistoricalDataStorageModel,
  InvestmentDataState,
  InvestmentKeys,
  InvestmentTypes,
} from "../models";

const InvestmentChart = () => {
  const [state, setState] = useState<InvestmentDataState>(investService.getAllHistorical());

  const importData = () => {
    const data = investService.getAllHistorical();
    setState(data);
  };

  const transformData = (state: InvestmentDataState): Serie[] => {
    const series: Serie[] = [];

    _.map(state, (serieData: HistoricalDataStorageModel[] | undefined, key: InvestmentKeys) => {
      if (serieData) {
        const data = _.map(serieData, (p) => ({
          x: p.date.split("T")[0],
          y: p.vuan.toString(),
        }));
        const serie: Serie = {
          id: InvestmentTypes[key],
          data,
        };
        series.push(serie);
      }
    });

    return series;
  };
  const data = transformData(state);
  return (
    <>
      {data && (
        <div style={{ height: "600px" }}>
          <ResponsiveLine
            data={data}
            pointLabelYOffset={-12}
            enableSlices="x"
            margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
            axisBottom={{ tickRotation: -72 }}
          />
        </div>
      )}
      <div>
        <button type="button" onClick={importData} className="mt-3 ml-4">
          Refresh data
        </button>
      </div>
    </>
  );
};

export { InvestmentChart };
