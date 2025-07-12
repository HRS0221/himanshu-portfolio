import { getAllArticles } from "../../utils/utils";
import { Grid } from "@once-ui-system/core";
import Article from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  direction,
}: PostsProps) {
  let allArticles = getAllArticles();

  const sortedArticles = allArticles.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedArticles = range
    ? sortedArticles.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedArticles.length
      )
    : sortedArticles;

  return (
    <>
      {displayedArticles.length > 0 && (
        <Grid
          columns={columns}
          mobileColumns="1"
          fillWidth
          marginBottom="40"
          gap="12"
        >
          {displayedArticles.map((post) => (
            <Article
              key={post.slug}
              article={post}
              thumbnail={thumbnail}
              direction={direction}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
