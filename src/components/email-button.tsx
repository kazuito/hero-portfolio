import { addToast, cn } from "@heroui/react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

const EmailButton = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    if (emailCopied) return;
    const email = "example@email.com";
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    addToast({
      title: "Email copied to clipboard.",
      color: "success",
      timeout: 2000,
      classNames: {
        title: "text-foreground",
        base: "bg-background border-none",
        icon: "text-primary",
      },
    });
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <button
      className="group/btn flex cursor-pointer items-center gap-1.5 md:-mr-4"
      onClick={copyEmail}
    >
      Email
      <div
        className={cn(
          "group-hover/btn:text-foreground text-default-400 opacity-100 transition-all group-hover/btn:opacity-100 sm:opacity-0",
          emailCopied && "!opacity-100",
        )}
      >
        {emailCopied ? (
          <CheckIcon
            className={
              "transition-all duration-200 ease-out starting:scale-90 starting:-rotate-20 starting:opacity-0"
            }
            size={14}
          />
        ) : (
          <CopyIcon
            className="transition-all duration-320 ease-out starting:rotate-10 starting:opacity-0"
            size={14}
          />
        )}
      </div>
    </button>
  );
};

export default EmailButton;
