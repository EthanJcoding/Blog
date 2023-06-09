import { ImageLayout } from "../../atoms/Image/ImageLayout";
import { Text } from "../../atoms/Text/Text";
import profile from "../../../public/profile.jpg";
import { Button } from "@/component/atoms/Button/Button";
import { useGenerationStore } from "@/hooks/useGenerationStore/useGenerationStore";

const Profile = () => {
  const { isFolded, setFolded } = useGenerationStore();
  return (
    <div className="mb-10 px-4 xl:mb-0 xl:mr-20 xl:flex-1 xl:p-0">
      <div className="xl:sticky xl:top-16 ">
        <div className="flex xlg:min-w-[184px] xlg:max-w-[500px] xl:flex-row justify-between">
          <ImageLayout alt="profile" src={profile} />
          <div className="h-full hidden xlg:block">
            <Button
              icon="BiArrowFromRight"
              intent="transparent"
              size="sm"
              onClick={() => setFolded(!isFolded)}
            />
          </div>
        </div>
        <div className="ml-2 w-full max-w-[min(500px,100%)] mt-8">
          <Text className="font-bold" size="name">
            Junil Jeong
          </Text>
          <Text size="content" className="text-contentText mt-4 ">
            I am a <b>frontend developer</b> equipped with skills of typescript
            and react.js. Looking forward to achieve efficiency and productivity
            for your teams.
          </Text>
          <Text size="content" className="text-contentText mt-4">
            I have recently completed Software Engineering Bootcamp in
            CodeStates and currently studying Next.js 😁
          </Text>
          <Text size="content" className="text-contentText mt-8">
            📍 Incheon, Korea
          </Text>
        </div>
      </div>
    </div>
  );
};

export { Profile };
