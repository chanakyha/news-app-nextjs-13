type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

type Article = {
  author: string;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
