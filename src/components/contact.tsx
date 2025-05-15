import { Button, Input, Textarea } from "@heroui/react";
import { CommandIcon, ForwardIcon } from "lucide-react";

type Props = {};

const Contact = ({}: Props) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-2 mt-4">
        <Input label="Email" size="sm" />
        <Textarea label="Message" size="sm" />
        <div className="flex justify-end mt-2 items-center gap-4">
          <div className="text-sm text-default-500 flex gap-1.5">
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
