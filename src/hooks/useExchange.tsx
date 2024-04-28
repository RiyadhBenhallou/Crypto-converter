import {useState} from "react"
import axios from "axios"

export default function useExchnage() {

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

  return { currencies,
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
         convert }
}