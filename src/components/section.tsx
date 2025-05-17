type Props = {
  heading: string;
  headerContent?: React.ReactNode;
  children: React.ReactNode;
};

const Section = ({ heading, headerContent, children }: Props) => {
  return (
    <section className="my-20 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="">{heading}</h2>
        {headerContent && headerContent}
      </div>
      {children}
    </section>
  );
};

export default Section;
