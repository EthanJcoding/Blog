import { Profile } from "../Profile/Profile";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <main className="min-full-screen flex flex-col items-center justify-center">
        <div className="min-full-screen flex w-full max-w-[1728px] flex-col">
          <div className="flex min-h-screen w-full flex-1 flex-col items-center">
            <div className="flex h-full w-full max-w-[428px] flex-1 flex-col p-6 py-12 xl:max-w-[1728px] xl:flex-row xl:p-16">
              <Profile />
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { Layout };
