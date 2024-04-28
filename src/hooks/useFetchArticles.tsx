import axios from 'axios';
import {useState, useEffect} from 'react'

export default function useFetchArticles() {
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

  return articles
}