import GitHubCalendar from "react-github-calendar";
import { useGenerationStore, useWindowSize } from "@/hooks";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const Git_Status = () => {
  const { width } = useWindowSize();
  const { isFolded } = useGenerationStore();

  const calculateMonthByWidth = () => {
    if (width > 1680) {
      return 9;
    }

    if (width < 1680 && width > 1500) {
      return 6;
    }

    if (width < 1500 && width > 1380) {
      return 4;
    }

    return 3;
  };

  const selectLastSixtMonths = (contributions: Activity[]) => {
    const currentDate = new Date();
    const monthByWidth = calculateMonthByWidth();
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
        transformData={isFolded ? selectLastSixtMonths : undefined}
        blockSize={10}
        colorScheme="light"
        fontSize={12}
      />
    </div>
  );
};

export { Git_Status };
