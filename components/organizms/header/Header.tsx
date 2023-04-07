import { Text, Button } from "@/components/atoms";
import Link from "next/link";
import { HeaderNav } from "@/components/molecules";

const Header = () => {
  return (
    <header className="text-3xl font-bold underline">
      <HeaderNav />
    </header>
  );
};

export default Header;
