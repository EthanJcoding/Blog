const Archive_Section = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col xlg:flex-row w-full justify-center">
      <div className="grid gap-10">{children}</div>
    </div>
  );
};

export default Archive_Section;
