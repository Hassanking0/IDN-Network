"use client";
import logo from "@/assets/idn.png"

import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function JobsTable() {
  const [rowsPerPage, setRowsPerPage] = React.useState("5");

  return (
    <Card className="bg-zinc-950 text-white border-neutral-800 mx-4 h-150">
      {/* --- Header --- */}
      <CardHeader className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-neutral-700 px-4 py-3 rounded-xl">
          <img
            src={logo}
            alt="logo"
            className="w-6 h-6 rounded"
          />
          <span className="text-sm font-medium">IDN Pro App</span>
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
