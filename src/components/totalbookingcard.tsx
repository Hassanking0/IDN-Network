"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const weekData = [
  { label: "Tue", value: 0 },
  { label: "Wed", value: 0 },
  { label: "Thu", value: 0 },
  { label: "Fri", value: 0 },
  { label: "Sat", value: 0 },
  { label: "Sun", value: 0 },
  { label: "Mon", value: 0 },
];

const monthData = Array.from({ length: 30 }, (_, i) => ({
  label: `${i + 1}`,
  value: Math.floor(Math.random() * 6),
}));

const dayData = Array.from({ length: 24 }, (_, i) => ({
  label: `${i}:00`,
  value: Math.floor(Math.random() * 2),
}));

type TitleProps = {
  defaultTitle: string;
};

export default function TotalBookingsCard({ defaultTitle }: TitleProps) {
  const [range, setRange] = React.useState<"month" | "week" | "day">("week");

  const data = React.useMemo(() => {
    if (range === "month") return monthData;
    if (range === "day") return dayData;
    return weekData;
  }, [range]);

  const total = React.useMemo(
    () => data.reduce((sum, d) => sum + d.value, 0),
    [data]
  );

  const [title] = React.useState(defaultTitle);

  return (
    <Card className="bg-neutral-900 text-white border-neutral-800 h-[400px] flex flex-col">
      {/* ---- Header ---- */}
      <CardHeader className="flex flex-row items-start justify-between">
        <CardTitle className="text-3xl font-light">{title}</CardTitle>

        <div className="text-right leading-tight">
          <div className="text-green-500 text-sm">+0%</div>
          <div className="text-xs text-neutral-400">
            {range === "week"
              ? "Last 7 days"
              : range === "month"
              ? "Last 30 days"
              : "Today"}
          </div>
          <div className="text-3xl font-semibold mt-1">{total}</div>
        </div>
      </CardHeader>

      {/* ---- Tabs (separated under header) ---- */}
      <div className="px-6 mb-2">
        <Tabs
          value={range}
          onValueChange={(v) => setRange(v as typeof range)}
          className="w-fit"
        >
          <TabsList className="flex gap-3">
            <TabsTrigger value="month" className="cursor-pointer bg-neutral-800 p-4">Month</TabsTrigger>
            <TabsTrigger value="week" className="cursor-pointer bg-neutral-800 p-4">Week</TabsTrigger>
            <TabsTrigger value="day" className="cursor-pointer bg-neutral-800 p-4">Day</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* ---- Chart content fills remaining height ---- */}
      <CardContent className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#2b2b2b" vertical={false} />
            <XAxis
              dataKey="label"
              stroke="#9ca3af"
              tickLine={false}
              axisLine={false}
            />
            <YAxis stroke="#9ca3af" tickLine={false} axisLine={false} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                background: "#171717",
                border: "1px solid #262626",
                borderRadius: 12,
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22d3ee"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
