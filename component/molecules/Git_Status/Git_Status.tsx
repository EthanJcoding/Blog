import GitHubCalendar from "react-github-calendar";
import { useGenerationStore } from "@/hooks";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const Git_Status = () => {
  const { isFolded } = useGenerationStore();
  const selectLastSixtMonths = (contributions: Activity[]) => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 4); // Subtract 8 months from the current date

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= currentDate;
    });
  };

  const selectLastEightMonths = (contributions: Activity[]) => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 8); // Subtract 8 months from the current date

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= currentDate;
    });
  };

  return (
    <div className="hidden w-full xlg:flex xlg:mr-10 flex-col">
      <div className="hidden 2xlg:hidden mb-10 border p-5 rounded-3xl shadow-md w-full xlg:flex justify-center h-[176px]">
        <GitHubCalendar
          username="ethanJcoding"
          hideColorLegend
          transformData={isFolded ? undefined : selectLastSixtMonths}
          blockSize={10}
          colorScheme="light"
          fontSize={12}
        />
      </div>
      <div className="hidden mb-10 border p-5 rounded-3xl shadow-md w-full 2xlg:flex justify-center h-[176px]">
        <GitHubCalendar
          username="ethanJcoding"
          hideColorLegend
          transformData={isFolded ? undefined : selectLastEightMonths}
          blockSize={10}
          colorScheme="light"
          fontSize={12}
        />
      </div>
    </div>
  );
};

export { Git_Status };
