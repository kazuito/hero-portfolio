"use client";

import AboutSection from "@/components/about-section";
import AiChatSection from "@/components/ai-chat-section";
import ContactSection from "@/components/contact-section";
import EmailButton from "@/components/email-button";
import ExternalLink from "@/components/external-link";
import Footer from "@/components/footer";
import NewsletterSection from "@/components/newsletter-section";
import ProjectsSection from "@/components/projects-section";
import WritingsSection from "@/components/writings-section";
import { projects } from "@/lib/projects";
import {
  Avatar,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import { XIcon } from "lucide-react";
import NextLink from "next/link";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  return (
    <main>
      <div className="from-background/50 fixed top-0 z-20 h-12 w-full bg-gradient-to-b mask-b-to-100% backdrop-blur-[1px]"></div>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center gap-4 sm:gap-5">
          <Avatar
            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=a"
            className="size-10 sm:size-12"
          />
          <div>
            <NextLink href="/" className="text-base/tight font-semibold">
              Alex Morgan
            </NextLink>
            <div className="text-default-500 text-sm/tight">
              Product Designer
            </div>
          </div>
          <div className="ml-auto flex gap-4 text-sm">
            <ExternalLink href="#">X</ExternalLink>
            <ExternalLink href="#">GitHub</ExternalLink>
            <EmailButton />
          </div>
        </div>
        <AboutSection />
        <ProjectsSection
          onProjectSelected={(i) => {
            onOpen();
            setActiveProjectIndex(i);
          }}
        />
        <WritingsSection />
        <AiChatSection />
        <NewsletterSection />
        <ContactSection />
        <Footer />
      </div>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        backdrop="transparent"
        className="!m-0"
        hideCloseButton
      >
        <ModalContent className="m-0 h-[100dvh] max-h-none rounded-none shadow-none">
          {(close) => (
            <ModalBody className="relative my-0 gap-0 p-0 no-scrollbar">
              <div className="backdrop-blu sticky top-4 z-20 mx-8 my-12 flex items-center justify-between rounded-2xl text-white mix-blend-difference">
                <div className="text-base">{activeProject.title}</div>
                <div>
                  <Button
                    isIconOnly
                    variant="bordered"
                    className="text-background border-background/10"
                    onPress={close}
                  >
                    <XIcon size={16} />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                {activeProject.images.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full rounded-none"
                      classNames={{
                        wrapper: "shrink-0",
                      }}
                    />
                  );
                })}
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
