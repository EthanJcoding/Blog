import Head from "next/head";
import { useGenerationStore, useWindowSize } from "services";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { TableOfContent, Navigation, Profile } from "..";

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  tags?: string;
}

const Layout = ({
  children,
  title,
  description,
  image,
  url,
  tags,
}: React.PropsWithChildren<LayoutProps>) => {
  const { isFolded, setFolded } = useGenerationStore();
  const { width } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    if (width < 1280) {
      setFolded(false);
    }
  }, [setFolded, width]);

  return (
    <>
      <Head>
        <title>{title ?? "Junil-portfolio"}</title>
        <meta
          name="description"
          content={description ?? "프론트엔드 개발자 정준일의 포트폴리오 bento"}
        />
        <meta property="og:image" content={image ?? "/default-image.jpg"} />
        <meta
          property="og:url"
          content={url ?? "https://junil-portfolio.vercel.app/"}
        />
        <meta name="author" content="Junil Jeong" />
        <meta
          name="keywords"
          content={
            tags ?? "HTML, CSS, JavaScript, TypeScript, Next.js, React.js"
          }
        />
      </Head>
      <main className="min-h-screen flex items-center justify-center animate-fadeindown">
        <div className="flex h-full w-full max-w-[428px] flex-col p-6 py-12 xl:max-w-[1728px] xl:flex-row xl:p-16 justify-between">
          {isFolded ? (
            <>
              <Navigation location="navBar" />
              {router.pathname === "/" ? (
                <div className="relative flex w-full">{children}</div>
              ) : (
                <>
                  <div className="relative flex max-w-[1024px]">{children}</div>
                  <TableOfContent />
                </>
              )}
            </>
          ) : (
            <>
              <Profile />
              <div className="relative xl:w-[824px] w-full">{children}</div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Layout;
