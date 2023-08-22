import Head from "next/head";
import { useGenerationStore, useWindowSize } from "services";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Navigation, Profile } from "..";

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  tags?: string;
}

const Layout = ({
  children,
  title = "Junil-portfolio",
  description = "프론트엔드 개발자 정준일의 포트폴리오 bento",
  image = "/default-image.jpg",
  url = "https://junil-portfolio.vercel.app/",
  tags = "HTML, CSS, JavaScript, TypeScript, Next.js, React.js",
}: React.PropsWithChildren<LayoutProps>) => {
  const { isFolded, setFolded } = useGenerationStore();
  const { width } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (width < 1280) {
      setFolded(false);
    }
  }, [setFolded, width]);

  const isHomePage = router.pathname === "/";
  const isArchivePage = router.pathname === "/archive";

  const renderContent = () => {
    if (isFolded) {
      if (isHomePage) {
        return <div className="relative flex w-full ">{children}</div>;
      } else {
        return (
          <div
            className={`relative flex w-full ${
              isArchivePage ? "" : "max-w-[1080px]"
            }`}
          >
            {children}
          </div>
        );
      }
    } else {
      if (isHomePage || isArchivePage) {
        return (
          <div className="relative flex xl:w-[824px] w-full">{children}</div>
        );
      } else {
        return (
          <div className="relative flex w-full xlg:min-w-[824px]">
            {children}
          </div>
        );
      }
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta name="author" content="Junil Jeong" />
        <meta name="keywords" content={tags} />
      </Head>
      <main className="min-h-screen flex items-center justify-center animate-fadeindown">
        <div className="flex h-full w-full max-w-[428px] flex-col p-6 py-12 justify-center xlg:max-w-[1728px] xlg:flex-row xlg:p-16 ">
          {isFolded ? <Navigation location="navBar" /> : <Profile />}
          {renderContent()}
        </div>
      </main>
    </>
  );
};

export default Layout;
