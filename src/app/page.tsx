"use client";

import Contact from "@/components/contact";
import ExternalLink from "@/components/external-link";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import Section from "@/components/section";
import { projects } from "@/lib/projects";
import { Avatar } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex gap-4 items-center">
          <Avatar
            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=a"
            size="lg"
          />
          <div>
            <Link href="/" className="font-semibold text-base/tight">
              Alex Morgan
            </Link>
            <div className="text-default-500 text-sm/tight">
              Product Designer
            </div>
          </div>
          <div className="flex ml-auto text-sm gap-4">
            <ExternalLink href="#">X</ExternalLink>
            <ExternalLink href="#">GitHub</ExternalLink>
          </div>
        </div>
        <Section heading="About">
          <p className="text-default-500">
            Fuga sed numquam commodi animi quos corrupti. Tempora suscipit sequi
            accusamus nulla veritatis ex vero. Est placeat quia temporibus in
            sequi similique possimus. Suscipit quos illum. Commodi saepe
            perferendis optio dolore. Nesciunt nihil sunt exercitationem veniam.
          </p>
        </Section>
        <Section heading="Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, i) => {
              return <ProjectCard project={project} key={i} />;
            })}
          </div>
        </Section>
        <div className="my-10">
          <h2>Contact</h2>
          <div>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
