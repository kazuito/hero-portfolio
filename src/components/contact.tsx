import { Button, Input, Textarea } from "@heroui/react";
import { CommandIcon, ForwardIcon } from "lucide-react";

type Props = {};

const Contact = ({}: Props) => {
  return (
    <div className="mt-4">
      <div className="mt-4 flex flex-col gap-2">
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
    </div>
  );
};

export default Contact;
