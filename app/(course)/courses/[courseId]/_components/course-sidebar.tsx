import { Chapter, Course, UserProgress } from "@prisma/client";

interface CourseSidebarProps {
  course: Course & {
    chapters: Chapter & {
      userProgress: UserProgress[] | null;
    };
  };
  progressCount: number | null;
}

export const CourseSidebar = ({ course }: CourseSidebarProps) => {
  return <div>CourseSidebar</div>;
};
