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
    <main>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="flex items-center gap-5">
          <Avatar
            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=a"
            size="lg"
          />
          <div>
            <Link href="/" className="text-base/tight font-semibold">
              Alex Morgan
            </Link>
            <div className="text-default-500 text-sm/tight">
              Product Designer
            </div>
          </div>
          <div className="ml-auto flex gap-4 text-sm">
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
          <div className="grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
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
    </main>
  );
}
