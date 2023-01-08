import { GetServerSideProps } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import NavBottom from '../../components/NavBottom'
import Posts from '../../components/Posts'
import { getArticles, getArticlesByCategories, getCategories } from '../../BackendApi'
import { IArticle, IAuthor, ICategory, IIndexPageProps } from '../../types'
import Head from 'next/head'

interface IProps{
  categories:Array<ICategory>;
  articles:Array<IArticle>;
}
function Category({categories,articles}:IProps) {
    const router: NextRouter = useRouter();
    const {slug} = router.query;
    
    return (
        <>
        <Head><title>{slug}</title></Head>
          <main className='min-h-[70vh]' >
          <NavBottom categories={categories}/>
           <Posts articles={articles} />
          </main>
        </>
      )
}

export default Category

export const getServerSideProps :GetServerSideProps = async({params}:any)=>{
    const categories: Array<ICategory> = await getCategories();
    const articles:Array<IArticle> = await getArticlesByCategories(params.slug);
    let catName:string="" ;
    categories.forEach((cat:ICategory)=>{
      if(cat.slug == params.slug) catName = cat.title;
    })
    if(catName == ""){
      return {
        notFound:true,
      }
    } 
    return{
      props:{
        categories,
        articles,
        }
      }
  
  }