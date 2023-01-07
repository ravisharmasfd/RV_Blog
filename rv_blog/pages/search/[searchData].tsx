import { GetServerSideProps } from 'next'
import React from 'react'
import NavBottom from '../../components/NavBottom'
import Posts from '../../components/Posts'
import { getArticlesByCategories, getArticlesBySearch, getCategories } from '../../dataFetch'
import { IArticle, ICategory, IIndexPageProps } from '../../types'

function SearchPage({categories,articles}:IIndexPageProps) {
  return (
    <main className='min-h-[70vh]' >
        <NavBottom categories={categories}/>
       <Posts articles={articles} category="Search Page"/>
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