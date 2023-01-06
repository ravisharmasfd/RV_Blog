import {request, gql } from "graphql-request";

const api:string = "https://api-ap-south-1.hygraph.com/v2/clacctm8100z901um1r9b2kl5/master";

export const getCategories = async () => {
  const query:string = gql`
  query Categories {
    categories {
      id
      slug
      title
    }
  }
  
  `;
  const result = await request(api, query);
  return result.categories;
};
export const getArticles = async () => {
  const query:string = gql`query RecentPost {
    articles {
      author {
        name
        avatar
      }
      categories {
        slug
        title
      }
      description
      id
      publishedAt
      slug
      title
      createdAt
      featuredImage
    }
  }`;
  const result = await request(api, query);
  return result.articles;
};
