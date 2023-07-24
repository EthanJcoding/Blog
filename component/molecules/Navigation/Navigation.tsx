import { Button } from "component/atoms/Button/Button";
import { useGenerationStore } from "services/hooks";

interface NavigationProps {
  location: "navBar" | "profile";
}

const Navigation = ({ location }: NavigationProps) => {
  const { isFolded, setFolded } = useGenerationStore();
  return (
    <>
      {location === "navBar" ? (
        <div className="flex-col mr-10 h-full sticky top-16">
          <Button
            className="hidden xlg:flex sticky"
            icon="BiArrowFromLeft"
            intent="transparent"
            size="sm"
            onClick={() => setFolded(!isFolded)}
          />
        </div>
      ) : (
        <div className="h-full hidden xlg:block">
          <Button
            icon="BiArrowFromRight"
            intent="transparent"
            size="sm"
            onClick={() => setFolded(!isFolded)}
          />
        </div>
      )}
    </>
  );
};

export { Navigation };
