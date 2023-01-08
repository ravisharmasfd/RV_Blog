import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import {getArticlesSlugs, getComments, getPost} from '../../BackendApi'
import { IArticle, ICommentForm, ICommentResult, IPostProps } from '../../types'
import Image from 'next/image';
import moment from 'moment';
import AuthorBox from '../../components/AuthorBox';
import PostData from '../../components/PostData';
import CommentBox from '../../components/CommentBox';
import PostComments from '../../components/PostComments';
import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import Loader from '../../components/Loader';


function Post({article,comments}:IPostProps){
  const router: NextRouter = useRouter();
  if(router.isFallback){
    return(
      <div className='w-screen h-[70vh] flex flex-row items-center justify-center' >
        <Loader/>
      </div>
    )
  }
  return (
  <>
      <Head>
        <title>{article? article.title : "No Post Available"}</title>
      </Head>
      <main className='min-h-[70vh] w-full flex-col flex items-center pt-8'>
      <div className='flex flex-col w-full md:w-2/4 items-center justify-start gap-4 text-center'>
        <h1 style={{textShadow: "2px 2px 5px #9aa7c5"}} className='text-third text-center text-xl md:text-2xl'>{article? article.title : "No Post Available"}</h1>
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
        <CommentBox slug={article.slug}/>
        <PostComments comments={comments}/>
      </div>    
    </main>
  </>
    
    
  )
}

export default Post

export const getStaticPaths:GetStaticPaths =async () => {
  const articlesSlugs:Array<IArticle> = await getArticlesSlugs();
  const paths = articlesSlugs.map((art)=>{return{params:{slug:art.slug}}})
  return {
    paths,
    fallback:true
  }
}
export const getStaticProps: GetStaticProps = async({params}:any)=>{
    const article:IArticle = await getPost(params.slug);
    const comments:Array<ICommentResult> = await getComments(params.slug);
    if (!article) {
      return {
        notFound: true
      }
    }   
    return {
        props:{
          article,
          comments
        }
    }
}

