import { cn, Link } from "@heroui/react";
import { ArrowUpRightIcon } from "lucide-react";
import NextLink from "next/link";

type Props = React.ComponentProps<typeof Link>;

const ExternalLink = ({ className, children, ...props }: Props) => {
  return (
    <Link
      as={NextLink}
      className={cn(
        "group/link inline-flex items-center gap-1 transition-colors",
        className,
      )}
      target="_blank"
      size="sm"
      color="foreground"
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
