import axios from 'axios';
import {useState, useEffect} from 'react'
import useFetchArticles from '../hooks/useFetchArticles';
import truncateString from '../utils/truncateString';

const NewsFeed = () => {
  const articles = useFetchArticles()
  
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