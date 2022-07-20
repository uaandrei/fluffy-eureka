import { storageService } from "../../../utils";
import { HistoricalDataStorageModel } from "..";

const HISTORICAL_DATA_KEY = "HISTORICAL_DATA_KEY";
const setHistoricData = (value: any): void =>
  storageService.setData(HISTORICAL_DATA_KEY, value);

const getHistoricData = () =>
  storageService.getData(HISTORICAL_DATA_KEY) as HistoricalDataStorageModel[];

export default {
  setHistoricData,
  getHistoricData,
};
