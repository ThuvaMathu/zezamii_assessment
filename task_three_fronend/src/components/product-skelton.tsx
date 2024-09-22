const ProductSkelton = () => {
  return (
    <div className=" relative ">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="group cursor-pointer animate-pulse">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
                <div className="mt-4 h-3 w-40 bg-gray-200 rounded-md text-gray-700"></div>
                <div className="mt-4 h-3 w-12 bg-gray-200 rounded-md text-gray-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkelton;
