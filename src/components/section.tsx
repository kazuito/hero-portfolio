type Props = {
  heading: string;
  children: React.ReactNode;
};

const Section = ({ heading, children }: Props) => {
  return (
    <section className="flex flex-col gap-4 my-16">
      <h2 className="">{heading}</h2>
      {children}
    </section>
  );
};

export default Section;
