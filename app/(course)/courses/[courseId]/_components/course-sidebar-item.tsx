interface CourseSidebarItemProps {
  id: number;
  label: string;
  isCompleted: boolean;
  isLocked: boolean;
}
export const CourseSidebarItem = ({
  id,
  label,
  isCompleted,
  isLocked,
}: CourseSidebarItemProps) => {
  return <div>CourseSidebarItem</div>;
};
