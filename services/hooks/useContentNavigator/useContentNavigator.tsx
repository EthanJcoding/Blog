import { useMemo } from "react";
import { contentsForMainPage } from "services";

interface Project {
  title: string;
  publishedAt: string;
  description: string;
  thumbnailUrl: string;
  tags: string[];
  slug: string;
}

export const useContentNavigator = (publishedAt: string) => {
  const [{ projectsRecall }] = contentsForMainPage;

  // Memoize orderedProjects using useMemo for better performance
  const orderedProjects = useMemo(
    () =>
      projectsRecall.sort(
        (a: Project, b: Project) =>
          new Date(a.publishedAt).valueOf() - new Date(b.publishedAt).valueOf()
      ),
    [projectsRecall]
  );

  // Helper function to find the index of the current project
  const findCurrentProjectIndex = () =>
    orderedProjects.findIndex((el) => el.publishedAt === publishedAt);

  const currentIndex = findCurrentProjectIndex();
  const prevDateEl = orderedProjects[currentIndex - 1];
  const nextDateEl = orderedProjects[currentIndex + 1];

  return { prevDateEl, nextDateEl };
};
