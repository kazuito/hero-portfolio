"use client";

import Contact from "@/components/contact";
import ExternalLink from "@/components/external-link";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import Section from "@/components/section";
import { projects } from "@/lib/projects";
import { Avatar, Button, Input } from "@heroui/react";
import Link from "next/link";

export default function Home() {
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
          <div className="-m-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, i) => {
              return <ProjectCard project={project} key={i} />;
            })}
          </div>
        </Section>
        <Section heading="Newsletter">
          <div className="">
            <Input size="sm" label="Email" />
            <div className="mt-4 flex items-center justify-end gap-4">
              <p className="text-default-500 text-sm/tight">
                My knowledge about product design, once a month. No spam.
              </p>
              <Button
                size="sm"
                color="primary"
                variant="flat"
                className="shrink-0"
              >
                Subscribe
              </Button>
            </div>
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
