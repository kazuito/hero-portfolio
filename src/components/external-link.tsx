import { cn } from "@heroui/react";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

type Props = React.ComponentProps<typeof Link>;

const ExternalLink = ({ className, children, ...props }: Props) => {
  return (
    <Link
      className={cn("flex items-center gap-1 group/link", className)}
      target="_blank"
      {...props}
    >
      {children}
      <ArrowUpRightIcon
        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition text-default-400 group-hover/link:text-foreground"
        size={14}
      />
    </Link>
  );
};

export default ExternalLink;
