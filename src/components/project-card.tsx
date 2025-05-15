"use client";

import { type Project } from "@/lib/projects";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ScrollShadow,
  useDisclosure,
} from "@heroui/react";
import NextImage from "next/image";
import { useState } from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className="w-full flex group/card flex-col text-start cursor-pointer rounded-lg py-3 px-4 -my-3 -mx-4 hover:bg-default-50 transition-colors"
        onClick={onOpen}
      >
        <div className="flex justify-between items-center">
          <div className="text-sm pl-0 pr-3 pb-0 pt-1 w-fit rounded-tr-lg">
            {project.title}
          </div>
          <div className="text-blue-500 text-xs">
            {project.category}
          </div>
        </div>
        <div className="text-sm text-default-500 mt-1 group-hover/card:text-default-700 transition">
          {project.description}
        </div>
      </button>
      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col">
            <div className="text-base/tight">{project.title}</div>
            <div className="text-sm/tight font-normal text-default-500 mt-1">
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
                      className="w-full h-60"
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
