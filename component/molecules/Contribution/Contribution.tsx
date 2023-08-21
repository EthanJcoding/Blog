// import { useEffect, useState } from "react";
// import ActivityCalendar from "react-activity-calendar";
// import type { Activity } from "react-activity-calendar";

// interface State {
//   list: Activity[];
//   isLoading: boolean;
// }

const Contribution = () => {
  // const [{ list, isLoading }, setList] = useState<State>({
  //   list: [],
  //   isLoading: true,
  // });
  // useEffect(() => {
  //   fetch("https://github-contributions-api.jogruber.de/v4/EthanJcoding?y=last")
  //     .then((res) => res.json())
  //     .then((json) =>
  //       setList({ list: json?.contributions || [], isLoading: false })
  //     )
  //     .catch((err) => {
  //       console.error(err);
  //       setList({ list: [], isLoading: false });
  //     });
  // }, [isLoading]);
  // return (
  //   <div className="hidden mb-10 border p-5 rounded-3xl shadow-md w-full xlg:flex justify-center h-[176px]">
  //     <ActivityCalendar
  //       data={list}
  //       loading={isLoading}
  //       blockMargin={5}
  //       blockRadius={7}
  //       blockSize={14}
  //       fontSize={16}
  //       theme={{
  //         light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
  //         dark: ["#f0f0f0", "#c4edde", "#7DB9B6", "#F5E9CF", "#E96479"],
  //       }}
  //     />
  //   </div>
  // );
};

export default Contribution;
