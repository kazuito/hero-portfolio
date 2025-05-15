import { cn } from "@heroui/react";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

const ExternalLink = ({ className, children, ...props }: Props) => {
  return (
    <Link
      className={cn(
        "group/link flex items-center gap-1 transition-colors",
        className,
      )}
      target="_blank"
      {...props}
    >
      {children}
      <ArrowUpRightIcon
        className="text-default-400 group-hover/link:text-foreground transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        size={14}
      />
    </Link>
  );
};

export default ExternalLink;
