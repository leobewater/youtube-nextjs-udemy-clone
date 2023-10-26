import { Course } from "@prisma/client";

interface CourseSidebarProps {
  course: Course;
  progressCount: number | null;
}

export const CourseSidebar = ({ course }: CourseSidebarProps) => {
  return <div>CourseSidebar</div>;
};
