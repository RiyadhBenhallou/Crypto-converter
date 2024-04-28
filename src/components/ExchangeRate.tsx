const ExchangeRate = ({ exchangeRate, primaryCurrency, secondaryCurrency }: Props) => {
  return (
      <div className="w-2/3">
        <p className="font-bold">Exchange Rate:</p>
        <p className="text-md font-medium">
          {exchangeRate ? exchangeRate : 0}
        </p>
        <p>from <span className="font-medium">{primaryCurrency}</span> to <span className="font-medium">{secondaryCurrency}</span></p>
      </div>
  );
};

export default ExchangeRate;

interface Props {
  exchangeRate: number | null
  primaryCurrency: string
  secondaryCurrency: string
}
