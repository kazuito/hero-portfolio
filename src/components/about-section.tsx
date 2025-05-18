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
        Product designer with 10+ years experience creating user-centered
        digital solutions. I blend strategic thinking with meticulous design to
        build intuitive interfaces that solve real problems while maintaining
        design excellence.
      </p>
      <Table hideHeader className="mt-4">
        <TableHeader>
          <TableColumn>Year</TableColumn>
          <TableColumn>Position</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              2023 -{" "}
              <Chip size="sm" variant="dot" color="primary">
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
