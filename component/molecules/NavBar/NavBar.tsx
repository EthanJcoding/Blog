import { Button } from "@/component/atoms/Button/Button";
interface ProfileProps {
  isOpen: boolean;
  toggleState: () => void;
}

const NavBar = ({ isOpen, toggleState }: ProfileProps) => {
  const onClick = () => {
    toggleState();
  };
  return (
    <div className="mb-10 px-4 xl:mb-0 xl:mr-20 xl:px-0">
      <Button
        icon="RiMenuUnfoldLine"
        intent="transparent"
        size="sm"
        onClick={onClick}
      ></Button>
    </div>
  );
};

export { NavBar };
