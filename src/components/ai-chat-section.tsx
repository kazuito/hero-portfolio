import {
  Button,
  Card,
  CardBody,
  CardFooter,
  cn,
  Input,
  ScrollShadow,
  Spinner,
} from "@heroui/react";
import Section from "./section";
import {
  PlusIcon,
  SendHorizontalIcon,
  SendIcon,
  SquarePenIcon,
  SquarePlusIcon,
} from "lucide-react";
import { useState } from "react";

type Props = {};

const AiChatSection = ({}: Props) => {
  const [query, setQuery] = useState("");
  const [thinking, setThinking] = useState(false);

  const [chats, setChats] = useState([
    {
      role: "user",
      content: "What is your name?",
    },
    {
      role: "assistant",
      content: "My name is John Doe.",
    },
  ]);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    setThinking(true);
    setQuery("");
    const newChat = {
      role: "user",
      content: message,
    };
    setChats((prevChats) => [...prevChats, newChat]);
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: `Hi! I'm Jon Doe. How can I help you today?`,
      };
      setChats((prevChats) => [...prevChats, aiResponse]);
      setThinking(false);
    }, 1500);
  };

  return (
    <Section heading="Ask AI">
      <Card className="">
        <CardBody className="p-0">
          <ScrollShadow className="no-scrollbar mb-4 flex h-100 flex-col gap-6 p-4">
            {chats.map((chat, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-2 transition",
                    chat.role === "user" && "justify-end",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-2/3 rounded-lg px-4 py-2 text-sm duration-320 starting:translate-y-4 starting:scale-98 starting:opacity-0",
                      chat.role === "user"
                        ? "bg-primary-100 text-primary-800"
                        : "bg-default-100 text-default-800",
                    )}
                  >
                    {chat.content}
                  </div>
                </div>
              );
            })}
            {thinking && (
              <div>
                <Spinner variant="wave" color="default" size="sm" />
              </div>
            )}
          </ScrollShadow>
        </CardBody>
        <CardFooter className="flex flex-col items-center gap-1 px-4 pb-2">
          <form
            className="flex w-full items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(query);
            }}
          >
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask AI about me"
            />
            <Button type="submit" isIconOnly color="primary">
              <SendHorizontalIcon size={14} />
            </Button>
          </form>
          <div className="text-default-400 text-xs">
            AI could make mistake. Reference only.
          </div>
        </CardFooter>
      </Card>
    </Section>
  );
};

export default AiChatSection;
