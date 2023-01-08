import { GetServerSideProps } from 'next'
import React from 'react'
import NavBottom from '../../components/NavBottom'
import Posts from '../../components/Posts'
import { getArticlesByCategories, getArticlesBySearch, getCategories } from '../../BackendApi'
import { IArticle, ICategory, IIndexPageProps } from '../../types'

function SearchPage({categories,articles}:IIndexPageProps) {
  const match = (articles.length == 0);
  return (
    <main className='min-h-[70vh]' >
      <NavBottom categories={categories}/>
    {match ?<div className='container my-auto mx-auto mt-10 text-white text-xl text-center '>Nothing to show you</div> : <Posts articles={articles}/>}
    </main>
  )
}

export default SearchPage

export const getServerSideProps :GetServerSideProps = async({params}:any)=>{
    const categories: Array<ICategory> = await getCategories();
    const articles:Array<IArticle> = await getArticlesBySearch(params.searchData);    
    return{
      props:{
        categories,
        articles
        }
      }
  
  }