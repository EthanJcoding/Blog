import { widgets } from "component/atoms/Icon";

type widget = keyof typeof widgets;

export const useIcon = (
  widget: widget
): {
  color: string;
  detail: string;
  link: string;
} => {
  switch (widget) {
    case "FaGithubSquare":
      return {
        color: "black",
        detail: "EthanJcoding",
        link: "https://github.com/EthanJcoding",
      };
    case "BsInstagram":
      return {
        color: "instagram",
        detail: "@_junilJ",
        link: "https://www.instagram.com/_junilj/",
      };
    case "SiVelog":
      return {
        color: "1EBF8F",
        detail: "ethan_world.log",
        link: "https://velog.io/@ethan_world",
      };
    default:
      return {
        color: "black",
        detail: "projects",
        link: "/projects",
      };
  }
};
