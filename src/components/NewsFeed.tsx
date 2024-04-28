import axios from 'axios';
import {useState, useEffect} from 'react'

function truncateString(str: string, limit: number) {
    if (str.length > limit) {
        return str.substring(0, limit) + '...';
    } else {
        return str;
    }
}

const NewsFeed = () => {
  const [articles, setArticles] = useState<any[]>([])

  const fetchArticles = async () => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
      headers: {
        'X-RapidAPI-Key': "7b14ed585amsh7dd662e5f11bcb2p11e4bfjsnc08e05e6fda9",
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setArticles(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchArticles()
  }, [])
  
  return (
    <div className="w-1/3">
      {articles.map(article => {
       return(
         <div className='border border-blue-800 rounded-lg p-1 mb-1'>
           <a href={article.url} target="_blank" className="text-xs font-bold">{truncateString(article.title, 35)}</a>
           <p className='text-xs'>{truncateString(article.description, 25)}</p>
         </div>
       )
      })}
      
      
    </div>
  )
}

export default NewsFeed