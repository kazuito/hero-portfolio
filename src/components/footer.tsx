import Link from "next/link";
import ExternalLink from "./external-link";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="flex">
      <div className="flex flex-col text-sm gap-1 w-fit text-default-400">
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
