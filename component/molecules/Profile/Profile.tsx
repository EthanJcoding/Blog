import { ImageLayout } from "../../atoms/Image/ImageLayout";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import profile from "../../../public/profile.jpg";

const Profile = () => {
  return (
    <div className="mb-10 px-4 xl:mb-0 xl:mr-20 xl:flex-1 xl:px-0 ">
      <div className="xl:sticky xl:top-16">
        <div className="s-[120px] xl:s-[184px]">
          <ImageLayout alt="profile" src={profile}></ImageLayout>
        </div>
        <div className="ml-2 w-full max-w-[min(500px,100%)] mt-8">
          <Paragraph className="font-bold" size="name">
            Junil Jeong
          </Paragraph>
          <Paragraph size="content" className="text-contentText mt-4 ">
            I am a <b>frontend developer</b> equipped with skills of typescript
            and react.js. Looking forward to achieve efficiency and productivity
            for your teams.
          </Paragraph>
          <Paragraph size="content" className="text-contentText mt-4">
            I have recently completed Software Engineering Bootcamp in
            CodeStates and currently studying Next.js 😁
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { Profile };
