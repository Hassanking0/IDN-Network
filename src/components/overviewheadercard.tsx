"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProfileCompletionCard() {
  const progress = 80; // dynamic value
  const nextStep = "Add social media"; // step to complete next

  return (
    <Card className="bg-neutral-900 text-white border-neutral-800 w-120">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
        <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
          {progress}%
          <div className="w-5 h-5">
            <CircularProgressbar
              value={progress}
              strokeWidth={14}
              styles={buildStyles({
                pathColor: "#f59e0b", // amber-500
                trailColor: "#262626", // dark background trail
              })}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center py-6">
        {/* Next step */}
        <p className="text-sm text-gray-300 underline cursor-pointer">
          {nextStep}
        </p>

        {/* Bottom percentage */}
        <p className="mt-3 text-sm text-gray-400">0%</p>
      </CardContent>
    </Card>
  );
}
