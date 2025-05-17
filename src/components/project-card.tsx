"use client";

import { type Project } from "@/lib/projects";
import {
  Modal,
  ModalBody,
  ModalContent,
  Image,
  useDisclosure,
  ModalHeader,
  ScrollShadow,
} from "@heroui/react";

type Props = {
  project: Project;
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <button
      className="group/card hover:bg-default-50 -m- flex w-full cursor-pointer flex-col rounded-lg p-3 text-start transition-colors"
      onClick={onClick}
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
  );
};

export default ProjectCard;
