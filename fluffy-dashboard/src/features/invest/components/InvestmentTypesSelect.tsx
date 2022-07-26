import _ from "lodash";
import { InvestmentKeys, InvestmentTypes } from "../models";

interface InvestmentTypesSelectProps {
  onChange: (investmentType: InvestmentKeys) => void;
}

const InvestmentTypesSelect: React.FC<InvestmentTypesSelectProps> = ({ onChange }) => (
  <label>
    Investment type
    <select
      className="border ml-1 py-1"
      defaultValue=""
      onChange={(e) => onChange(e.target.value as InvestmentKeys)}
    >
      <option></option>
      {_.map(InvestmentTypes, (value, key) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  </label>
);

export { InvestmentTypesSelect };
