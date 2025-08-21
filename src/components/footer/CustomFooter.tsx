const CustomFooter = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full bg-[#f3f3f3] dark:bg-[#151515]">
      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="flex w-full flex-col items-center gap-3 rounded-2xl border bg-white p-4 text-sm dark:bg-[#1c1c1c]">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-semibold">Meeting Scheduler</p>
            <p className="opacity-65">Made to help friends quickly find the best time to meet</p>
          </div>
          <p className="opacity-65"> {year} Piotr Kowalski. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
