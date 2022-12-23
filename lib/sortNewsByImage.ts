export default function sortNewsByImage(
  news: NewsResponse,
  category?: Category
) {
  const newsWithImages = news.data.filter((article) => article.image);
  const newsWithoutImages = news.data.filter((article) => !article.image);

  return {
    ...news,
    data: [...newsWithImages, ...newsWithoutImages],
  };
}
