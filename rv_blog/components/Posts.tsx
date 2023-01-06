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
          <div
            className="bg-secondary flex flex-col items-center rounded-lg w-3/4 md:w-1/3 mt-8 overflow-hidden"
            key={article.id}
          >
            <div className="overflow-hidden aspect-video w-full container object-fill relative ">
              <Image
                fill
                alt={article.title}
                src={article.featuredImage.secure_url}
              />
              <div className="w-full backdrop-blur-md absolute top-0 z-30 flex flex-row h-10 items-center justify-center gap-2 text-xs">
              <span className="">
                {moment(article.createdAt).format('MMM Do YY')}
                </span>
                <span className="font-bold ">{`By ${article.author.name}`}</span>
                </div>
            </div>
            <section className="flex flex-col items-center text-center gap-2 p-2">
              <h2>
                <Link href={`/post/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="text-fourth text-sm">{`${article.description.slice(
                0,
                70
              )}....`}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
