import { Button, Input } from "@heroui/react";
import Section from "./section";

const NewsletterSection = () => {
  return (
    <Section heading="Newsletter">
      <div className="">
        <Input size="sm" label="Email" />
        <div className="mt-4 flex items-center justify-end gap-4">
          <p className="text-default-500 text-sm/tight">
            My knowledge about product design, once a month. No spam.
          </p>
          <Button size="sm" color="primary" variant="flat" className="shrink-0">
            Subscribe
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default NewsletterSection;
