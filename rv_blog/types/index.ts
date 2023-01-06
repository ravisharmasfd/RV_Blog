export interface ICategory {
  id: string;
  slug: string;
  title: string;
}
export interface ICategoriesProps {
    categories: Array<ICategory>;
  }
  export interface IArticlesProps {
    articles: Array<IArticle>;
  }

export interface IIndexPageProps {
  categories: Array<ICategory>;
  articles: Array<IArticle>;
}

export interface IAuthor {
  id: string;
  name: string;
  description: string;
  avatar: {
    secure_url: string;
  };
}
export interface IArticle {
  author: IAuthor;
  createdAt: string;
  categories: Array<ICategory>;
  featuredImage: {
    secure_url: string;
  };
  description:string;
  id: string;
  slug: string;
  title: string;
  content: {
    html: string;
  };
}
