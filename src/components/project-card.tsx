"use client";

import { type Project } from "@/lib/projects";
import { Chip } from "@heroui/react";

type Props = {
  project: Project;
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <button
      className="group/card hover:bg-default-50 flex w-full cursor-pointer flex-col rounded-lg px-3 py-2 text-start transition starting:opacity-0"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="w-fit rounded-tr-lg pt-1 pr-3 pb-0 pl-0 text-sm">
          {project.title}
        </div>
        <Chip size="sm" variant="light" color="primary">
          {project.category}
        </Chip>
      </div>
      <div className="text-default-500 group-hover/card:text-default-700 mt-1 text-sm transition">
        {project.description}
      </div>
    </button>
  );
};

export default ProjectCard;
