import GitHubCalendar from "react-github-calendar";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const Git_Status = () => {
  const selectLastEightMonths = (contributions: Activity[]) => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 8); // Subtract 8 months from the current date

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= currentDate;
    });
  };

  return (
    <div className="flex">
      <div className="hidden mb-10 border p-5 rounded-3xl shadow-md xlg:flex justify-center w-[604px] mr-10 h-[176px]">
        <GitHubCalendar
          username="ethanJcoding"
          hideColorLegend
          transformData={selectLastEightMonths}
          blockSize={10}
          colorScheme="light"
          fontSize={12}
        />
      </div>
    </div>
  );
};

export { Git_Status };
