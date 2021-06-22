import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO } from "date-fns";
import CustomTooltip from "./CustomTooltip";

export interface IChartData {
  date: string;
  value: number;
}

interface RecordChartProps {
  data: IChartData[];
  unit: string;
}

const RecordChart: React.FC<RecordChartProps> = ({ data, unit }) => {
  return (
    <div className="mt-4">
      <ResponsiveContainer>
        <AreaChart data={data}>
          <Area dataKey="value" stroke="#5575e7" fill="url(#color)" />

          <XAxis
            height={60}
            dy={10}
            offset={0}
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              if (date?.getDate()) {
                return format(parseISO(str), "dd MMM, yyyy");
              }
              return "";
            }}
          />

          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
          />

          <Tooltip content={<CustomTooltip unit={unit} />} />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecordChart;
