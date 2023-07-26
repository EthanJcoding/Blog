import { Button } from "component/atoms/Button/Button";
import { useGenerationStore } from "services/hooks";
import { useRouter } from "next/router";

interface NavigationProps {
  location: "navBar" | "profile";
}

const Navigation = ({ location }: NavigationProps) => {
  const { isFolded, setFolded } = useGenerationStore();
  const router = useRouter();

  const handleClick = () => {
    setFolded(!isFolded);
  };

  return (
    <div
      className={`h-full ${
        location === "navBar"
          ? "flex-col mr-10 sticky top-16"
          : "hidden xlg:flex xlg:flex-col"
      }`}
    >
      <Button
        icon={location === "navBar" ? "BiArrowFromLeft" : "BiArrowFromRight"}
        intent="transparent"
        size="sm"
        onClick={handleClick}
      />
      {router.pathname === "/" ? null : (
        <Button
          icon="BiHome"
          intent="transparent"
          size="sm"
          onClick={() => router.push("/")}
        />
      )}
    </div>
  );
};

export { Navigation };
