import { Avatar } from "@heroui/react";
import ExternalLink from "./external-link";
import NextLink from "next/link";
import EmailButton from "./email-button";

const Header = () => {
  return (
    <div className="flex items-center gap-4 sm:gap-5">
      <Avatar
        src="https://img.heroui.chat/image/avatar?w=200&h=200&u=a"
        className="size-10 sm:size-12"
      />
      <div>
        <NextLink href="/" className="text-base/tight font-semibold">
          Alex Morgan
        </NextLink>
        <div className="text-default-500 text-sm/tight">Product Designer</div>
      </div>
      <div className="ml-auto flex gap-4 text-sm">
        <ExternalLink href="#">X</ExternalLink>
        <ExternalLink href="#">GitHub</ExternalLink>
        <EmailButton />
      </div>
    </div>
  );
}

export default Header;
