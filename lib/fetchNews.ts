import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
      $categories: String!
      $keywords: String
      $access_key: String!
    ) {
      myQuery(
        categories: $categories
        keywords: $keywords
        access_key: $access_key
        sort: "published_desc"
        countries: "gb"
      ) {
        data {
          author
          category
          description
          country
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch("https://bafia.stepzen.net/api/chan-news/__graphql", {
    method: "POST",
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        access_key: process.env.MEDIASTACK_API_KEY,
        categories: category,
        keywords: keywords,
      },
    }),
  });

  console.log(
    "LOADING NEW DATA FROM API for category >>> ",
    category,
    keywords
  );

  const newsResponse = await res.json();

  const news = sortNewsByImage(newsResponse.data.myQuery);
  console.log(news);

  return news;
};

export default fetchNews;
