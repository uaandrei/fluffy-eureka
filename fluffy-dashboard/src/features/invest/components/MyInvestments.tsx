import { useState } from "react";
import { InvestmentKeys } from "../models";
import { InvestmentTypesSelect } from "./";

const MyInvestments = () => {
  const [investmentType, setInvestmentType] = useState<InvestmentKeys>();
  const [nrUnit, setNrUnit] = useState<Number>();
  const [vuan, setVuan] = useState<Number>();

  const addInvestment = () => {};

  const disabled = !investmentType || !nrUnit || !vuan;
  return (
    <div>
      <h2>My Investments</h2>
      <InvestmentTypesSelect onChange={setInvestmentType} />
      <label className="mx-1">
        Nr. unit
        <input
          type="number"
          className="ml-1"
          onChange={(e) => setNrUnit(parseFloat(e.target.value))}
          value={nrUnit?.toString()}
        />
      </label>
      <label className="mx-1">
        VUAN
        <input
          type="number"
          className="ml-1"
          onChange={(e) => setVuan(parseFloat(e.target.value))}
          value={vuan?.toString()}
        />
      </label>
      <button onClick={addInvestment} disabled={disabled}>
        Add
      </button>
    </div>
  );
};

export { MyInvestments };
