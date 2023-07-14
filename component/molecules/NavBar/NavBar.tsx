import { Button } from "component/atoms/Button/Button";
import { useGenerationStore } from "hooks";

const NavBar = () => {
  const { isFolded, setFolded } = useGenerationStore();
  return (
    <div className="flex-col mr-10 h-full">
      <Button
        className="hidden xlg:flex"
        icon="BiArrowFromLeft"
        intent="transparent"
        size="sm"
        onClick={() => setFolded(!isFolded)}
      />
    </div>
  );
};

export { NavBar };
