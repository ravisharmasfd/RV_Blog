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
    articles(orderBy: createdAt_DESC) {
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

export const getPost = async(slug:any) =>{
  const query = gql`query getPost($slug: String!){
    article(where: {slug: $slug}) {
        author {
          avatar
          id
          name
          description
        }
        createdAt
        featuredImage
        id
        title
        content {
          html
        }
        categories {
          id
          slug
          title
        }
      }
  }
  `
  const result = await request(api,query,{slug});
  return result.article;
}

export const getArticlesByCategories = async (slug:string) => {
  const query:string = gql`query getArticlesByCategories($slug: String!){
    articles(where: {categories_some: {slug: $slug}},orderBy: createdAt_DESC) {
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
  }
  
  `;
  const result = await request(api, query,{slug});
  return result.articles;
};

export const getArticlesBySearch = async (searchString:string) => {
  const query:string = gql`query getArticlesByCategories($searchString: String!){
    articles(where: {_search: $searchString}, ,orderBy: createdAt_DESC) {
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
  }
  
  `;
  const result = await request(api, query,{searchString});
  return result.articles;
};

