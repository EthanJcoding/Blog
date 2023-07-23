import { Button } from "component/atoms/Button/Button";
import { useGenerationStore } from "services/hooks";

const NavBar = () => {
  const { isFolded, setFolded } = useGenerationStore();
  return (
    <div className="flex-col mr-10 h-full sticky top-16">
      <Button
        className="hidden xlg:flex sticky"
        icon="BiArrowFromLeft"
        intent="transparent"
        size="sm"
        onClick={() => setFolded(!isFolded)}
      />
    </div>
  );
};

export { NavBar };
