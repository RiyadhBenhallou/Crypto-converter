import NewsFeed from './components/NewsFeed'
import CurrencyConverter from './components/CurrencyConverter'

export default function App() {
  return (
    <div className='bg-slate-800 w-full min-h-screen flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-xl shadow-slate-900 flex space-x-3 items-center justify-center border boreder-white hover:border-slate-500'>
        <CurrencyConverter />
    
          <NewsFeed />

      </div>
    </div>
  )
}