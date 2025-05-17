"use client";

import { type Project } from "@/lib/projects";
import { Card, CardBody, CardHeader, Chip, Image } from "@heroui/react";

type Props = {
  project: Project;
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: Props) => {
  return (
    <Card onClick={onClick} isPressable className="!transition-all">
      <CardHeader className="aspect-square p-2">
        <img
          src={project.images[0]}
          className="h-full w-full rounded-xl object-cover"
        />
      </CardHeader>
      <CardBody className="pt-1">
        <div className="flex items-center justify-between">
          <div className="text-sm">{project.title}</div>
          <Chip size="sm" variant="light" color="primary">
            {project.category}
          </Chip>
        </div>
        <div className="text-default-500 group-hover/card:text-default-700 mt-2 text-sm transition">
          {project.description}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
