"use client";

import { type Project } from "@/lib/projects";
import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ScrollShadow,
  useDisclosure,
} from "@heroui/react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className="group/card hover:bg-default-50 -m- flex w-full cursor-pointer flex-col rounded-lg p-3 text-start transition-colors"
        onClick={onOpen}
      >
        <div className="flex items-center justify-between">
          <div className="w-fit rounded-tr-lg pt-1 pr-3 pb-0 pl-0 text-sm">
            {project.title}
          </div>
          <div className="text-primary text-xs">{project.category}</div>
        </div>
        <div className="text-default-500 group-hover/card:text-default-700 mt-1 text-sm transition">
          {project.description}
        </div>
      </button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col">
            <div className="text-base/tight">{project.title}</div>
            <div className="text-default-500 mt-1 text-sm/tight font-normal">
              {project.description}
            </div>
          </ModalHeader>
          <ModalBody className="pt-0">
            <div className="-mx-4">
              <ScrollShadow
                orientation="horizontal"
                className="flex gap-2 overflow-x-auto px-4"
              >
                {project.images.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      src={image}
                      className="h-60 w-full"
                      classNames={{
                        wrapper: "shrink-0",
                      }}
                    />
                  );
                })}
              </ScrollShadow>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
