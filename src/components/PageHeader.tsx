type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
};

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
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
        <h1 className="font-extrabold leading-tight">
          <div className="text-5xl md:text-6xl tracking-widest mb-4" style={{ letterSpacing: '0.15em' }}>{title}</div>
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mt-4">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
