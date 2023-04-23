import { ImageLayout } from "../../atoms/Image/ImageLayout";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import profile from "../../../public/profile.jpg";

const Profile = () => {
  return (
    <div className="flex xl:mr-20 xsm:mb-4">
      <ImageLayout alt="profile" src={profile}></ImageLayout>
      <div className="flex flex-col h-40 justify-around p-4 pl-8">
        <Paragraph className="font-bold" size="sm">
          프론트엔드 개발자
        </Paragraph>
        <Paragraph className="font-bold" size="highlight">
          정준일
        </Paragraph>
      </div>
    </div>
  );
};

export { Profile };
