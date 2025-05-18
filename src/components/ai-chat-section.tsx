import {
  Button,
  Card,
  CardBody,
  CardFooter,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  ScrollShadow,
  Spinner,
} from "@heroui/react";
import {
  EllipsisIcon,
  FlagIcon,
  SendHorizontalIcon,
  SquarePenIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Section from "./section";

const AiChatSection = () => {
  const [query, setQuery] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [chats, setChats] = useState([
    {
      role: "user",
      content: "What is your name?",
    },
    {
      role: "assistant",
      content: "My name is Alex Morgan.",
    },
    {
      role: "user",
      content: "How old are you?",
    },
    {
      role: "assistant",
      content: "I am 25 years old.",
    },
  ]);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

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
        content: `Hi! I'm Alex Morgan. How can I help you today?`,
      };
      setChats((prevChats) => [...prevChats, aiResponse]);
      setThinking(false);
    }, 1500);
  };

  return (
    <Section heading="Ask AI">
      <p className="text-default-500">
        An AI-powered chatbot trained on my personal information. Ask any question for instant, accurate answers about me.
      </p>
      <Card className="mt-2">
        <CardBody className="p-0">
          <ScrollShadow
            className="no-scrollbar mb-4 flex h-100 flex-col gap-6 scroll-smooth p-4"
            ref={scrollContainerRef}
          >
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
                      "text-default-800 max-w-2/3 rounded-lg px-4 py-2 text-sm duration-320 starting:translate-y-4 starting:scale-99 starting:opacity-0 starting:blur-sm",
                      chat.role === "user"
                        ? "bg-default-100 rounded-full"
                        : "bg-transparent",
                    )}
                  >
                    {chat.content}
                  </div>
                </div>
              );
            })}
            {thinking && (
              <div className="mt-4 ml-4 flex h-9 items-center">
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
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly variant="light">
                  <EllipsisIcon size={14} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="flat">
                <DropdownItem
                  key="new"
                  startContent={<SquarePenIcon size={14} />}
                  onClick={() => setChats([])}
                >
                  New chat
                </DropdownItem>
                <DropdownItem
                  key="feedback"
                  color="warning"
                  startContent={<FlagIcon size={14} />}
                >
                  Feedback
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about Alex Morgan"
            />
            <Button
              type="submit"
              isIconOnly
              color="primary"
              isDisabled={thinking || !query.trim()}
            >
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
