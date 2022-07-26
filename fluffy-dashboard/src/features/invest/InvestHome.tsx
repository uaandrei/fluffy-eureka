import { ImportHistoricalData, InvestmentChart, MyInvestments } from "./components";
const InvestHome = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1>Investments</h1>
        <div className="my-3">
          <MyInvestments />
        </div>
        <ImportHistoricalData />
      </div>
      <div>
        <InvestmentChart />
      </div>
    </>
  );
};

export { InvestHome };
