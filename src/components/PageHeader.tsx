type PageHeaderProps = {
  title?: string;
  subTitle?: string | React.ReactNode;
  backgroundImage: string;
};

const PageHeader = ({ title, subTitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative py-20 bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        aria-hidden="true"
      ></div>

      {/* Header content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        {title && (
          <p className="text-xl md:text-xl font-light max-w-3xl mx-auto mt-4">
            {title}
          </p>
        )}
        {subTitle && (
          <p className="text-xl md:text-3xl font-light max-w-3xl mx-auto mt-4 bold">
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
