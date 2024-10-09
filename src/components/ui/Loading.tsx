export default function Loading() {
  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <div className="w-full h-full flex justify-center items-center col-span-full my-20">
        <div className="w-20 animate-spin aspect-square border-4 border-opacity-70 border-primary border-b-transparent rounded-full flex justify-center items-center">
          <div className="w-16 aspect-square border-4 border-opacity-70 border-Secondary border-t-transparent rounded-full flex justify-center items-center">
            <div className="w-12 aspect-square border-4 border-opacity-70 border-primary border-r-transparent rounded-full flex justify-center items-center">
              <div className="w-8 aspect-square border-4 border-opacity-70 border-Secondary border-l-transparent rounded-full flex justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
