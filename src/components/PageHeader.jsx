const PageHeader = ({ title, description }) => {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{title}</h1>
      {description && (
        <p className="text-lg max-w-3xl mx-auto dark:text-gray-300 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;