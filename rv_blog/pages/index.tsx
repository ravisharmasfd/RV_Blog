import Head from 'next/head'
import { NextPage ,GetServerSideProps } from 'next'
import {getArticles, getCategories} from '../dataFetch/index'
import { IAuthor, ICategory,IIndexPageProps } from '../types'
import NavBottom from '../components/NavBottom'
import Posts from '../components/Posts'

export default function Home({categories,articles}:IIndexPageProps){
  return (
    <>
      <Head>
        <title>RV Blog</title>
        <meta name="description" content="A tech blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className='min-h-[70vh]' >
       <NavBottom categories={categories}/>
       <Posts articles={articles}/>
      </main>
    </>
  )
}

export const getServerSideProps :GetServerSideProps = async()=>{
    const categories: Array<ICategory> = await getCategories();
    const articles:Array<IAuthor> = await getArticles();    
    return{
      props:{
        categories,
        articles
        }
      }
  
  }
