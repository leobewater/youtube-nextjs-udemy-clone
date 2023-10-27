import { getAnalytics } from "@/actions/get-analytics";
import { DataCard } from "@/app/(dashboard)/(routes)/teacher/analytics/_components/data-card";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AnalyticsPage = async () => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const { data, totalRevenue, totalSales } = await getAnalytics(userId);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Total Revenue" value={totalRevenue} shouldFormat />
        <DataCard label="Total Sales" value={totalSales} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
