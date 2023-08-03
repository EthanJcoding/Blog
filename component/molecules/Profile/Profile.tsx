import profile from "../../../public/profile.jpg";
import { Navigation } from "..";
import { ImageLayout, Text } from "component/atoms";

const Profile = () => {
  return (
    <div className="mb-10 px-4 xlg:mb-0 xlg:mr-20 xlg:flex xlg:flex-col xlg:p-0 xlg:sticky xlg:top-16 xlg:h-fit">
      <div className="flex xlg:min-w-[184px] xlg:max-w-[500px] xl:flex-row justify-between">
        <ImageLayout alt="profile" src={profile} />
        <Navigation location="profile" />
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
          I have recently completed Software Engineering Bootcamp in CodeStates
          and currently studying Next.js 😁
        </Text>
        <Text size="content" className="text-contentText mt-8">
          📍 Incheon, Korea
        </Text>
      </div>
    </div>
  );
};

export default Profile;
