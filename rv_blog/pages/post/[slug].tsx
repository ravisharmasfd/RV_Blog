import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import {getPost} from '../../dataFetch'
import { IArticle, IPostProps } from '../../types'
import Image from 'next/image';
import moment from 'moment';
import AuthorBox from '../../components/AuthorBox';
import PostData from '../../components/PostData';


function Post({article}:IPostProps){
  return (
    <main className='min-h-[70vh] w-full flex-col flex items-center pt-8'>
      <div className='flex flex-col w-full md:w-2/4 items-center justify-start gap-4 text-center'>
        <h1 style={{textShadow: "2px 2px 5px #9aa7c5"}} className='text-third text-center text-xl md:text-2xl'>{article.title}</h1>
        <div className="w-full flex flex-row h-10 items-center justify-center gap-2 text-xs text-white">
              <span className="">
                {moment(article.createdAt).format('MMM Do YY')}
                </span>
                <span className="font-bold ">{`By ${article.author.name}`}</span>
                
            </div>
        <div className='w-3/4 aspect-video overflow-hidden relative rounded-xl'>
          <Image fill alt={article.title} src={article.featuredImage.secure_url}></Image>
        </div>
        <PostData htmlData={article.content.html}/>
        <AuthorBox author={article.author}/>
      </div>    
    </main>
    
  )
}

export default Post
export const getServerSideProps: GetServerSideProps = async({params}:any)=>{
    const article:IArticle = await getPost(params.slug);    
    return {
        props:{
          article
        }
    }
}
