import Link from "next/link";
import ExternalLink from "./external-link";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="flex">
      <div className="text-default-400 flex w-fit flex-col gap-1 text-sm">
        <p>All of the contents on this page are sample for demonstrating.</p>
        <p className="flex gap-1">
          Made with{" "}
          <ExternalLink href="https://heroui.com" className="text-foreground">
            HeroUI
          </ExternalLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
