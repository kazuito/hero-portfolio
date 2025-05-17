"use client";

import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExternalLink from "@/components/external-link";
import Footer from "@/components/footer";
import NewsletterSection from "@/components/newsletter-section";
import ProjectCard from "@/components/project-card";
import ProjectsSection from "@/components/projects-section";
import Section from "@/components/section";
import WritingsSection from "@/components/writings-section";
import { projects } from "@/lib/projects";
import {
  Avatar,
  Button,
  cn,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@heroui/react";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
} from "lucide-react";
import NextLink from "next/link";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    if (emailCopied) return;
    const email = "example@email.com";
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

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
      >
        <ModalContent className="m-0 h-[100dvh] max-h-none rounded-none shadow-none">
          <ModalHeader className="p-0">
            <div className="p-6 font-normal md:px-0">
              <div className="text-base">{activeProject.title}</div>
              <div className="text-default-500 text-sm">
                {activeProject.description}
              </div>
            </div>
          </ModalHeader>
          <ModalBody className="relative my-0 gap-0 p-0">
            <div className="flex flex-col gap-0.5">
              {activeProject.images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    className="w-full rounded-none"
                    classNames={{
                      wrapper: "shrink-0",
                    }}
                  />
                );
              })}
            </div>
            <div className="sticky bottom-0 z-20 flex justify-end p-2">
              <div className="bg-background border-default-100 flex gap-1 rounded-xl border p-1 shadow">
                <Button
                  size="sm"
                  isIconOnly
                  variant="flat"
                  isDisabled={activeProjectIndex === 0}
                  onPress={() =>
                    setActiveProjectIndex((prev) => Math.max(prev - 1, 0))
                  }
                >
                  <ChevronLeftIcon size={16} />
                </Button>
                <Button
                  size="sm"
                  isIconOnly
                  variant="flat"
                  isDisabled={activeProjectIndex === projects.length - 1}
                  onPress={() =>
                    setActiveProjectIndex((prev) =>
                      Math.min(prev + 1, projects.length - 1),
                    )
                  }
                >
                  <ChevronRightIcon size={16} />
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </main>
  );
}
