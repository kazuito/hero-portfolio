import { Link } from "@heroui/react";
import { Link2Icon } from "lucide-react";

type Props = {
  heading: string;
  headerContent?: React.ReactNode;
  children: React.ReactNode;
};

const Section = ({ heading, headerContent, children }: Props) => {
  const id = heading.toLowerCase().replace(/\s/g, "_");

  return (
    <section id={id} className="my-20 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Link
          href={`#${id}`}
          className="group/link flex items-center gap-2"
          color="foreground"
        >
          {heading}
          <Link2Icon
            className="opacity-0 transition group-hover/link:opacity-100"
            size={14}
          />
        </Link>
        {headerContent && headerContent}
      </div>
      {children}
    </section>
  );
};

export default Section;
