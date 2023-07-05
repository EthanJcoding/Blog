import { Button } from "@/component/atoms/Button/Button";
import { useGenerationStore } from "@/hooks";

const NavBar = () => {
  const { isFolded, setFolded } = useGenerationStore();
  return (
    <div className="flex mr-10 h-full w-10">
      <Button
        icon="BiArrowFromLeft"
        intent="transparent"
        size="sm"
        onClick={() => setFolded(!isFolded)}
      />
    </div>
  );
};

export { NavBar };
