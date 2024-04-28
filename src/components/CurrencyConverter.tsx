import { useState } from 'react'
import axios from 'axios'
import ExchangeRate from './ExchangeRate'
import useExchange from '../hooks/useExchange'

const CurrencyConverter = () => {
  const { currencies,
    chosenPrimaryCurrency,
    setChosenPrimaryCurrency,
    chosenSecondaryCurrency,
    setChosenSecondaryCurrency,
    amount,
    setAmount,
    convertedAmount,
    setConvertedAmount,
    exchangeRate,
    setExchangeRate,
    convert } = useExchange()

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