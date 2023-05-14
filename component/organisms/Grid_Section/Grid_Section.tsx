const Grid_Section = ({ children }: { children: JSX.Element }) => {
  // 1256 rows 6
  // 1040 rows 5
  // 824 rows 4
  return (
    <>
      <div className="relative flex-1 xl:w-[820px] xl:flex-none ">
        <div className="grid grid-cols-2 grid-rows-8 xlg:grid-cols-8 xlg:grid-rows-8 gap-10 place-items-center min-h-[784px] ">
          {children}
        </div>
      </div>
    </>
  );
};

export { Grid_Section };
