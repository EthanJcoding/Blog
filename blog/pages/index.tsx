import { IconButton } from "@/component/atoms/Button/Button.stories";
import { Profile } from "@/component/molecules/Profile/Profile";

export default function Home() {
  return (
    <div className="flex h-full w-full max-w-[428px] flex-1 flex-col p-6 py-12 xl:max-w-[1728px] xl:flex-row xl:p-16">
      <Profile />
    </div>
  );
}
