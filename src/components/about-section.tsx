import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import Section from "./section";
import ExternalLink from "./external-link";

const AboutSection = () => {
  return (
    <Section heading="About">
      <p className="text-default-500">
        Fuga sed numquam commodi animi quos corrupti. Tempora suscipit sequi
        accusamus nulla veritatis ex vero. Est placeat quia temporibus in sequi
        similique possimus. Suscipit quos illum. Commodi saepe perferendis optio
        dolore. Nesciunt nihil sunt exercitationem veniam.
      </p>
      <Table hideHeader className="mt-4">
        <TableHeader>
          <TableColumn>Year</TableColumn>
          <TableColumn>Position</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              2023 - <Chip size="sm" variant="dot" color="primary">
                Present
              </Chip>
            </TableCell>
            <TableCell className="text-default-500">
              Chief Designer at <ExternalLink href="/">Grams</ExternalLink>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2020 - 2023</TableCell>
            <TableCell className="text-default-500">
              Web Designer at <ExternalLink href="/">HeroWeb</ExternalLink>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2017 - 2020</TableCell>
            <TableCell className="text-default-500">
              UI/UX Designer at{" "}
              <ExternalLink href="/">World Tech Corp</ExternalLink>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2012 - 2017</TableCell>
            <TableCell className="text-default-500">Misc</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
};

export default AboutSection;
