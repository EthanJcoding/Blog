import Head from "next/head";
import { Profile } from "../Profile/Profile";
import { useGenerationStore } from "@/hooks/useGenerationStore/useGenerationStore";
import { NavBar } from "../NavBar/NavBar";

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Layout = ({
  children,
  title,
  description,
  image,
  url,
}: React.PropsWithChildren<LayoutProps>) => {
  const { isFolded } = useGenerationStore();

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
          content="HTML, CSS, JavaScript, TypeScript, Next.js, React.js"
        />
      </Head>
      <main className="min-full-screen flex items-center justify-center">
        {isFolded ? (
          <div className="flex h-full w-full max-w-[428px] flex-col p-6 py-12 xl:max-w-[1728px] xl:flex-row xl:p-16">
            <Profile />
            <div className="relative xl:w-[824px]">{children}</div>
          </div>
        ) : (
          <div className="flex h-full w-full max-w-[428px] flex-col p-6 py-12 xl:max-w-[1728px] xl:flex-row xl:p-16">
            <NavBar />
            <div className="relative flex w-full">{children}</div>
          </div>
        )}
      </main>
    </>
  );
};

export { Layout };
