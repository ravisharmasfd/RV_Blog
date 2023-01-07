import { GetServerSideProps } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import NavBottom from '../../components/NavBottom'
import Posts from '../../components/Posts'
import { getArticles, getArticlesByCategories, getCategories } from '../../dataFetch'
import { IArticle, IAuthor, ICategory, IIndexPageProps } from '../../types'

function Category({categories,articles}:IIndexPageProps) {
    const router: NextRouter = useRouter();
    const {slug} = router.query;
    let catName:string="" ;
    categories.forEach((cat:ICategory)=>{
      if(cat.slug == slug) catName = cat.title;
    })
    return (
        <>
          <main className='min-h-[70vh]' >
          <NavBottom categories={categories}/>
           <Posts articles={articles} category={catName} />
          </main>
        </>
      )
}

export default Category

export const getServerSideProps :GetServerSideProps = async({params}:any)=>{
    const categories: Array<ICategory> = await getCategories();
    const articles:Array<IArticle> = await getArticlesByCategories(params.slug);    
    return{
      props:{
        categories,
        articles
        }
      }
  
  }