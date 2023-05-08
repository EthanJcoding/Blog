import Head from "next/head";
import { Profile } from "../Profile/Profile";

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
  return (
    <>
      <Head>
        <title>{title ?? "Junto-portpolio"}</title>
        <meta
          name="description"
          content={description ?? "프론트엔드 개발자 정준일의 포트폴리오"}
        />
        <meta property="og:image" content={image ?? "/default-image.jpg"} />
        <meta property="og:url" content={url ?? "https://example.com"} />
        <meta name="author" content="Junil Jeong" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, TypeScript, Next.js, React.js"
        />
      </Head>
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