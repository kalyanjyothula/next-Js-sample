// domain.com/news/newsId
import { NewsPageWrapper } from "../../styles/news/elements";
import { useRouter } from "next/router";

function DynamicNewsPage() {
  const router = useRouter();
  console.log(router.query.newsId);
  return <NewsPageWrapper>Dynamic News Page</NewsPageWrapper>;
}

export default DynamicNewsPage;
