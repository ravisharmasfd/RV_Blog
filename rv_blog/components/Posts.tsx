import Image from "next/image";
import React from "react";
import Link from "next/link";
import moment from "moment";
import { IArticle, IArticlesProps } from "../types";

function Posts({ articles }: IArticlesProps) {
  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-4 items-center justify-start mb-10  md:items-start md:justify-evenly flex-wrap">
      {articles.map((article: IArticle) => {
        return (
          <Link href={`/post/${article.slug}`}
            className="bg-secondary hover:scale-105 hover:translate-y-4 flex flex-col items-center rounded-2xl w-3/4 md:w-1/3 mt-8 overflow-hidden boxShadow"
            key={article.id}
          >
            <div className="overflow-hidden aspect-video w-full container object-fill relative ">
              <Image
                fill
                alt={article.title}
                src={article.featuredImage.secure_url}
              />
              <div className="w-full backdrop-blur-sm absolute bottom-0 z-30 flex flex-row h-10 items-center justify-center gap-2 text-xs">
              <span className="">
                {moment(article.createdAt).format('MMM Do YY')}
                </span>
                <span className="font-bold ">{`By ${article.author.name}`}</span>
                </div>
            </div>
            <section className="flex flex-col items-center text-center gap-4 p-4">
              <h2 style={{textShadow: "2px 2px 5px #0F172A"}} className="text-white font-bold">
                {article.title}
              </h2>
              <p className="text-slate-500 text-ls">{`${article.description.slice(
                0,
                70
              )}....`}</p>
            </section>
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
