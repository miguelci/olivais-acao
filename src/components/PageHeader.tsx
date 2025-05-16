type PageHeaderProps = {
  title?: string;
  subTitle?: string;
  backgroundImage: string;
};

const PageHeader = ({ title, subTitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative py-16 bg-black">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
        aria-hidden="true"
      ></div>

      {/* Header content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {title && (
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-3">
            {title}
          </p>
        )}
        {subTitle && (
          <h1 className="text-3xl md:text-3xl font-bold max-w-3xl mx-auto tracking-wide" style={{ letterSpacing: '0.05em' }}>
            {subTitle}
          </h1>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
