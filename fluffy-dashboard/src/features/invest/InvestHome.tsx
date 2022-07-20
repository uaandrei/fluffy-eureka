import { ImportHistoricalData, InvestmentChart } from "./components";
const InvestHome = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>InvestHome</div>
        <div>
          <ImportHistoricalData />
        </div>
      </div>
      <div>
        <InvestmentChart />
      </div>
    </>
  );
};

export { InvestHome };
