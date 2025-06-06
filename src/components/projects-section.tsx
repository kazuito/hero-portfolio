import { Tabs, Tab } from "@heroui/react";
import Section from "./section";
import { useState } from "react";
import { Project, projects } from "@/lib/projects";
import ProjectCard from "./project-card";

type Props = {
  onProjectSelected: (project: Project) => void;
};

const ProjectsSection = ({ onProjectSelected }: Props) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" ||
      project.category.toLowerCase() === activeCategory.toLowerCase(),
  );

  return (
    <Section
      heading="Projects"
      headerContent={
        <Tabs
          selectedKey={activeCategory}
          onSelectionChange={(key) => setActiveCategory(key.toString())}
          size="sm"
          radius="full"
        >
          <Tab key="all" title="All"></Tab>
          <Tab key="web" title="Web"></Tab>
          <Tab key="mobile" title="Mobile"></Tab>
        </Tabs>
      }
    >
      <div className="-mx-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project.title}
              onClick={() => onProjectSelected(project)}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
