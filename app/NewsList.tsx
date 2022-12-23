"use client";

import Article from "./Article";

type Props = {
  news: NewsResponse;
};
const NewsList = ({ news }: Props) => {
  console.log(news);
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news?.data.map((article: Article) => (
        <Article article={article} />
      ))}
    </main>
  );
};

export default NewsList;
