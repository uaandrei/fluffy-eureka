import _ from "lodash";
import { storageService } from "../../../utils";
import {
  HistoricalDataStorageModel,
  InvestmentDataState,
  InvestmentKeys,
  InvestmentStorageKeys,
  InvestmentTypes,
} from "../models";

const setHistoricalData = (value: any, key: InvestmentKeys): void => {
  const storageKey = InvestmentStorageKeys[key];
  storageService.setData(storageKey, value);
};

const getHistoricalData = (key: InvestmentKeys) => {
  const storageKey = InvestmentStorageKeys[key];
  const storedData = storageService.getData(storageKey);
  return storedData as HistoricalDataStorageModel[];
};

const getAllHistorical = (): InvestmentDataState => {
  const state: InvestmentDataState = {};
  _.map(InvestmentTypes, (_: any, key: InvestmentKeys) => {
    state[key] = getHistoricalData(key);
  });
  return state;
};

export default {
  setHistoricalData,
  getHistoricalData,
  getAllHistorical,
};
