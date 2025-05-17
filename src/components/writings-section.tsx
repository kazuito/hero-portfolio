import dayjs from "dayjs";
import NextLink from "next/link";
import Section from "./section";

const articles = [
  {
    title: "Designing for Mobile First",
    slug: "blog-3",
    date: "2024-12-15",
  },
  {
    title: "Building Accessible UIs",
    slug: "blog-2",
    date: "2025-4-8",
  },
  {
    title: "Understanding Design Systems",
    slug: "blog-1",
    date: "2025-5-18",
  },
];

const WritingsSection = () => {
  return (
    <Section heading="Writings">
      <div className="-m-3 mt-0 flex flex-col gap-1">
        {articles.map((article) => {
          return (
            <NextLink
              href="#"
              key={article.slug}
              className="hover:bg-default-50 flex items-center justify-between rounded-lg p-3 transition-colors"
            >
              <div className="text-sm">{article.title}</div>
              <div className="text-default-500 text-sm">
                {dayjs(article.date).format("MMM D, YYYY")}
              </div>
            </NextLink>
          );
        })}
      </div>
    </Section>
  );
};

export default WritingsSection;
