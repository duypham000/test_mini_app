export interface IGetAllNewsData {
  createdDate: string;
  createdDateTimeAgo: string;
  description: string;
  id: string;
  lastUpdate: string;
  sourceNameDisplay: string;
  sourceThumbsUrl: string;
  thumbUrl: string;
  title: string;
}

export interface IGetDetailNewsData {
  ticker: string;
  author: string;
  content: string;
  sourceName: string;
  createdDate: string;
  createdDateTimeAgo: string;
  title: string;
  sourceUrl: string;
  imageUrl: string;
}
