import { addToast, Button, Input, Spinner, Textarea } from "@heroui/react";
import { ForwardIcon } from "lucide-react";
import Section from "./section";
import { useState } from "react";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setEmail("");
      setMessage("");
      addToast({
        title: "Message sent successfully. Thank you!",
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
    <Section heading="Contact">
      <div className="flex flex-col gap-2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          size="sm"
          isDisabled={sending}
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          size="sm"
          isDisabled={sending}
        />
        <div className="mt-2 flex items-center justify-end gap-4">
          <div className="text-default-500 flex gap-1.5 text-sm">
            Feel free to talk to me.
          </div>
          <Button
            isDisabled={sending}
            size="sm"
            color="primary"
            endContent={
              sending ? (
                <Spinner variant="dots" size="sm" color="default" />
              ) : (
                <ForwardIcon size={12} />
              )
            }
            onPress={handleSend}
          >
            {sending ? "Sending" : "Send"}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
