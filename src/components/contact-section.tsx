import { Button, Input, Textarea } from "@heroui/react";
import { ForwardIcon } from "lucide-react";
import Section from "./section";

type Props = {};

const ContactSection = ({}: Props) => {
  return (
    <Section heading="Contact">
      <div className="flex flex-col gap-2">
        <Input label="Email" size="sm" />
        <Textarea label="Message" size="sm" />
        <div className="mt-2 flex items-center justify-end gap-4">
          <div className="text-default-500 flex gap-1.5 text-sm">
            Feel free to talk to me.
          </div>
          <Button
            size="sm"
            color="primary"
            endContent={<ForwardIcon size={12} />}
          >
            Send
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
