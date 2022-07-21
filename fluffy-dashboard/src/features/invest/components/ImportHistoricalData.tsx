import _ from "lodash";
import { useState } from "react";
import { HistoricalDataModel, InvestmentTypes } from "../models";
import { investService } from "../services";

const ImportHistoricalData = () => {
  const [type, setType] = useState("");
  const [file, setFile] = useState<File>();

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
    const filteredValues = _.filter(
      parsedValues,
      (p) => p.date > referenceDate
    );
    const orderedValues = _.orderBy(filteredValues, (p) => p.date, "asc");
    investService.setHistoricData(orderedValues);
  };

  const isImportButtonDisabled = !type || !file;

  return (
    <>
      <div>
        <span>Actiuni: </span>
        <select
          className="border py-1"
          defaultValue=""
          onChange={(e) => setType(e.target.value)}
        >
          <option></option>
          {_.map(InvestmentTypes, (value, key) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <span className="ml-2 w-full">Fisier: </span>
        <input
          type="file"
          title="upload historical data"
          className="border mx-3"
          onChange={(e) => setFile(e.currentTarget.files![0])}
        />
        <button
          type="button"
          onClick={processFileUpload}
          disabled={isImportButtonDisabled}
        >
          Import
        </button>
      </div>
    </>
  );
};

export { ImportHistoricalData };
