import { ImageLayout } from "../../atoms/Image/ImageLayout";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import profile from "../../../public/profile.jpg";

const Profile = () => {
  return (
    <div className="flex h-full mb-10 xl:mr-20 xl:mb-0 xl:sticky xl:top-16 px-4 xl:px-0">
      <ImageLayout alt="profile" src={profile}></ImageLayout>
      <div className="flex flex-col h-32 xl:h-40 justify-between p-4 pl-8">
        <Paragraph className="font-bold 2xsm:hidden" size="title">
          프론트엔드 개발자
        </Paragraph>
        <Paragraph className="font-bold" size="name">
          정준일
        </Paragraph>
      </div>
    </div>
  );
};

export { Profile };
