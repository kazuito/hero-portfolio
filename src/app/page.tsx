"use client";

import AboutSection from "@/components/about-section";
import AiChatSection from "@/components/ai-chat-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NewsletterSection from "@/components/newsletter-section";
import ProjectsSection from "@/components/projects-section";
import WritingsSection from "@/components/writings-section";
import { Project, projects } from "@/lib/projects";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <main>
      <div className="from-background/50 fixed top-0 z-20 h-12 w-full bg-gradient-to-b mask-b-to-100% backdrop-blur-[1px]"></div>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Header />
        <AboutSection />
        <ProjectsSection
          onProjectSelected={(project) => {
            onOpen();
            setActiveProject(project);
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
            <ModalBody className="no-scrollbar relative my-0 gap-0 p-0">
              <div className="backdrop-blu sticky top-4 z-20 mx-8 my-12 flex items-center justify-between rounded-2xl text-white mix-blend-difference">
                <div className="text-base">{activeProject?.title}</div>
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
                {activeProject?.images.map((image, index) => {
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
              <div className="flex justify-center p-4">
                <Button
                  variant="ghost"
                  startContent={<XIcon size={14} />}
                  onPress={close}
                >
                  Close
                </Button>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
