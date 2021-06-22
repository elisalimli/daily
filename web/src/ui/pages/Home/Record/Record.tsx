import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecordsQuery } from "../../../../generated/graphql";
import RecordChart, { IChartData } from "./RecordChart";

export default function Home() {
  const router = useRouter();
  const rootId = router?.query?.rootId;
  const idx = rootId ? rootId[rootId?.length - 1] : null;

  const { data, loading } = useRecordsQuery({ variables: { fileId: idx } });
  const [chartData, setData] = useState<IChartData[]>([]);

  useEffect(() => {
    if (!data) return;
    const dataArr: IChartData[] = [];

    data?.records?.forEach(({ value, createdAt }) => {
      dataArr.push({
        date: createdAt,
        value: parseInt(value),
      });
    });
    setData(dataArr);
  }, [data]);

  return <RecordChart data={chartData} unit={data?.file?.unit} />;
}
