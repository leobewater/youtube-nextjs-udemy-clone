const ChapterIdPage = ({
  params,
}: {
  params: { courseId: String; chapterId: String };
}) => {
  return (
    <div>
      ChapterIdPage {params.courseId} {params.chapterId}
    </div>
  );
};

export default ChapterIdPage;
