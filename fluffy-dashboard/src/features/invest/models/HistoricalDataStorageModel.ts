import { InvestmentKeys } from "../models";

export interface HistoricalDataStorageModel {
  date: string;
  vuan: Number;
}

type InvestmentSeries = {
  [key in InvestmentKeys]: HistoricalDataStorageModel[];
};

export type InvestmentDataState = Partial<InvestmentSeries>;
