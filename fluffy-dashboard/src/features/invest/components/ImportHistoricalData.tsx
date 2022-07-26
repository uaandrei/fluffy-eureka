import _ from "lodash";
import { useState } from "react";
import { useNotificationsContext } from "../../notification";
import { HistoricalDataModel, InvestmentKeys } from "../models";
import { investService } from "../services";
import { InvestmentTypesSelect } from "./";

const ImportHistoricalData = () => {
  const [investmentType, setInvestmentType] = useState<InvestmentKeys>();
  const [file, setFile] = useState<File>();
  const { showNotification } = useNotificationsContext();

  const processFileUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, "utf-8");
      reader.onload = (ev) => {
        const rawJson = ev.target?.result! as string;
        processAndImportJson(rawJson);
      };
      reader.onerror = (err) => console.error(err);
    }
  };

  const processAndImportJson = (json: string) => {
    const values = JSON.parse(json) as { Data: string; VUAN: string }[];
    const parsedValues: HistoricalDataModel[] = _.map(values, (p) => {
      const date = new Date(p.Data);
      const vuan = parseFloat(p.VUAN);
      return {
        date,
        vuan,
      };
    });
    const referenceDate = new Date(Date.now() - 10000000000);
    const filteredValues = _.filter(parsedValues, (p) => p.date > referenceDate);
    const orderedValues = _.orderBy(filteredValues, (p) => p.date, "asc");
    investService.setHistoricalData(orderedValues, investmentType!);
    showNotification(`Import '${investmentType}' finished!`);
  };

  const isImportButtonDisabled = !investmentType || !file;

  return (
    <div>
      <h2>Investment historical data import</h2>
      <InvestmentTypesSelect onChange={setInvestmentType} />
      <label className="mx-1">
        Fisier
        <input
          type="file"
          title="upload historical data"
          className="ml-1"
          onChange={(e) => setFile(e.currentTarget.files![0])}
        />
      </label>
      <button type="button" onClick={processFileUpload} disabled={isImportButtonDisabled}>
        Import
      </button>
    </div>
  );
};

export { ImportHistoricalData };
