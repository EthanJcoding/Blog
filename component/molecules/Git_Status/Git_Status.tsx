import GitHubCalendar from "react-github-calendar";
import { useGenerationStore, useWindowSize } from "services/hooks";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
const calculateMonthByWidth = (width: number) => {
  if (width > 1680) {
    return 9;
  }

  if (width < 1680 && width > 1500) {
    return 6;
  }

  if (width < 1500 && width > 1380) {
    return 4;
  }

  if (width < 1380 && width > 1280) {
    return 3;
  }

  return 6;
};

const Git_Status = () => {
  const { width } = useWindowSize();
  const { isFolded } = useGenerationStore();

  const selectLastSixMonths = (contributions: Activity[]) => {
    const currentDate = new Date();
    const monthByWidth = calculateMonthByWidth(width);
    currentDate.setMonth(currentDate.getMonth() - monthByWidth);

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= currentDate;
    });
  };

  return (
    <div className="hidden mb-10 border p-5 rounded-3xl shadow-md w-full xlg:flex justify-center h-[176px]">
      <GitHubCalendar
        username="ethanJcoding"
        hideColorLegend
        transformData={isFolded ? selectLastSixMonths : undefined}
        blockSize={10}
        colorScheme="light"
        fontSize={12}
      />
    </div>
  );
};
export default Git_Status;
