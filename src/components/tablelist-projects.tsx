"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ShoppingBag, SquareCheck } from "lucide-react";

export default function JobsTable({ logo }: { logo: string }) {
  const [upperActive, setUpperActive] = React.useState<"idn" | "adding">("idn");
  const [lowerActive, setLowerActive] = React.useState<"going" | "completed" | "canceled">("going");

  const [rowsPerPage, setRowsPerPage] = React.useState("5");

  return (
    <Card className="bg-zinc-950 text-white border-neutral-800 mx-4 h-150">
      {/* --- Header --- */}
     <CardHeader className="flex gap-4 flex-col">
        {/* --- Upper Group --- */}
        <div className="upper-btns flex gap-4">
          <div
            onClick={() => setUpperActive("idn")}
            className={`flex cursor-pointer items-center gap-2 px-4 py-3 rounded-xl transition-colors
            ${
              upperActive === "idn"
                ? "bg-neutral-700 text-white"
                : "bg-neutral-900 text-zinc-400"
            }`}
          >
            <img src={logo} alt="logo" className="w-6 h-6 rounded" />
            <span className="text-sm font-medium">IDN Pro App</span>
          </div>

          <div
            onClick={() => setUpperActive("adding")}
            className={`flex cursor-pointer items-center gap-2 px-4 py-3 rounded-xl transition-colors
            ${
              upperActive === "adding"
                ? "bg-neutral-700 text-white"
                : "bg-neutral-900 text-zinc-400"
            }`}
          >
            <span className="text-sm font-medium">Adding by you</span>
          </div>
        </div>

        {/* --- Lower Group --- */}
        <div className="lower-btns flex gap-4">
          <div
            onClick={() => setLowerActive("going")}
            className={`flex cursor-pointer items-center gap-2 px-4 py-3 rounded-xl transition-colors
            ${
              lowerActive === "going"
                ? "bg-neutral-700 text-white"
                : "bg-neutral-900 text-zinc-400"
            }`}
          >
<ShoppingBag strokeWidth={1.5} />
            <span className="text-sm font-medium">On Going</span>
          </div>

          <div
            onClick={() => setLowerActive("completed")}
            className={`flex cursor-pointer items-center gap-2 px-4 py-3 rounded-xl transition-colors
            ${
              lowerActive === "completed"
                ? "bg-neutral-700 text-white"
                : "bg-neutral-900 text-zinc-400"
            }`}
          >
            <SquareCheck color="green" strokeWidth={1.5} />
            <span className="text-sm font-medium">Completed</span>
          </div>
           <div
            onClick={() => setLowerActive("canceled")}
            className={`flex cursor-pointer items-center gap-2 px-4 py-3 rounded-xl transition-colors
            ${
              lowerActive === "canceled"
                ? "bg-neutral-700 text-white"
                : "bg-neutral-900 text-zinc-400"
            }`}
          >
            <SquareCheck strokeWidth={1.5} />
            <span className="text-sm font-medium">Canceled</span>
          </div>
        </div>
      </CardHeader>

      {/* --- Table Content --- */}
      <CardContent className="flex items-center justify-center h-64">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-center text-neutral-400">
                No jobs
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>

      {/* --- Footer with pagination --- */}
      <CardFooter className="flex items-center mt-30 justify-between border-t border-neutral-800 py-3">
        <div className="flex items-center text-sm text-neutral-400 gap-2">
          <span>Rows per page:</span>
          <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
            <SelectTrigger className="w-[80px] bg-neutral-900 border-neutral-700">
              <SelectValue placeholder="Show" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-neutral-400">0–0 of 0</span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-neutral-400 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-neutral-400 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
