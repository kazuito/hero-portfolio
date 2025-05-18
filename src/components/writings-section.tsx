import dayjs from "dayjs";
import NextLink from "next/link";
import Section from "./section";
import { Chip } from "@heroui/react";

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
].reverse();

const WritingsSection = () => {
  return (
    <Section heading="Writings">
      <div className="-m-3 mt-0 flex flex-col gap-1">
        {articles.map((article, i) => {
          const isNew = i === 0;

          return (
            <NextLink
              href="#"
              key={article.slug}
              className="hover:bg-default-50 flex items-center justify-between gap-2 rounded-lg p-3 transition-colors"
            >
              <div className="truncate text-sm">{article.title}</div>
              {isNew && (
                <Chip
                  className="shrink-0"
                  size="sm"
                  color="primary"
                  variant="light"
                >
                  New!
                </Chip>
              )}
              <div className="text-default-500 ml-auto shrink-0 text-sm">
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
