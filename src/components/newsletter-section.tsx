import { addToast, Button, Input, Spinner } from "@heroui/react";
import Section from "./section";
import { useState } from "react";
import { ForwardIcon } from "lucide-react";

const NewsletterSection = () => {
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState("");

  const handleSend = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setEmail("");
      addToast({
        title: "Subscribed successfully. Enjoy!",
        color: "success",
        timeout: 3000,
        classNames: {
          title: "text-foreground",
          base: "bg-background border-none",
          icon: "text-primary",
        },
      });
    }, 2000);
  };

  return (
    <Section heading="Newsletter">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isDisabled={sending}
          size="sm"
          label="Email"
          autoComplete="off"
        />
        <div className="mt-4 flex items-center justify-end gap-4">
          <p className="text-default-500 text-sm/tight">
            My knowledge about product design, once a month. No spam.
          </p>
          <Button
            type="submit"
            size="sm"
            color="primary"
            variant="flat"
            className="shrink-0"
            isDisabled={sending}
            endContent={
              sending && <Spinner variant="dots" size="sm" color="primary" />
            }
          >
            Subscribe
          </Button>
        </div>
      </form>
    </Section>
  );
};

export default NewsletterSection;
