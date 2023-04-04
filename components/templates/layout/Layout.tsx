import { Footer, Header } from "@/components/organizms";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
