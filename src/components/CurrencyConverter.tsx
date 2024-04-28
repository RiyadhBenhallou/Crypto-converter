import { useState } from 'react'
import axios from 'axios'
import ExchangeRate from './ExchangeRate'

const CurrencyConverter = () => {
  const currencies = ['BTC', 'ETH', 'USD'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState<string>(currencies[0])
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState<string>(currencies[0])
  const [amount, setAmount] = useState<number>(1)
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [exchangeRate, setExchangeRate] = useState<null | number>(null)


  async function convert() {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        from_currency: chosenPrimaryCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: chosenSecondaryCurrency
      },
      headers: {
        'X-RapidAPI-Key': "7b14ed585amsh7dd662e5f11bcb2p11e4bfjsnc08e05e6fda9",
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const rate = parseFloat(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      setExchangeRate(rate);
      console.log(exchangeRate); // Corrected the typo here
      const result = rate ? rate * amount : 0; // Using the updated rate variable
      setConvertedAmount(result);
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className='flex flex-col space-y-8'>

      <div className="w-2/3 flex flex-col">
        <table>
          <body>
            <tr className="flex items-center space-x-3">
              <td className="text-sm font-medium">Primary Currency</td>
              <td>
                <input type="number" className='border border-blue-800 p-1 rounded-lg' name="currency-1" value={amount} onChange={(e) => setAmount(e.target.value)} />
              </td>
              <td>
                <select value={chosenPrimaryCurrency} onChange={(e) => setChosenPrimaryCurrency(e.target.value)} className="focus:outline-none">
                  {currencies.map((currency, i) => (<option key={i}>{currency}</option>))}

                </select>
              </td>
            </tr>

            <tr className="flex items-center space-x-3">
              <td className="text-sm font-medium">Secondary Currency</td>
              <td>
                <input className='border border-blue-800 p-1 rounded-lg' type="number" name="currency-2" value={convertedAmount} readOnly />
              </td>
              <td>
                <select value={chosenSecondaryCurrency} onChange={(e) => setChosenSecondaryCurrency(e.target.value)} className="focus:outline-none">
                  {currencies.map((currency, i) => (<option key={i}>{currency}</option>))}

                </select>
              </td>
            </tr>
          </body>
        </table>
        <button className='mt-6 bg-blue-700 text-white p-1 rounded-lg hover:bg-blue-800 self-start' onClick={convert}>Convert</button>
      </div>
      <ExchangeRate exchangeRate={exchangeRate} primaryCurrency={chosenPrimaryCurrency} secondaryCurrency={chosenSecondaryCurrency} />
    </div>
  )
}

export default CurrencyConverter