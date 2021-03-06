export interface IArticle {
    source?: object;
    name?: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    category?: string;
    id?: string;
    typeNews?: string;
}

export interface News {
    articles: IArticle[];
    totalResults: number;
    status: string;
}
