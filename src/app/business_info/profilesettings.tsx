"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowRight, RefreshCw } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function ProfileSettings() {
  const [privateProfile, setPrivateProfile] = React.useState(false);
  //   const [selfEmployed, setSelfEmployed] = React.useState(false);

  return (
    <Card className="bg-black border border-black text-white p-6">
      <Tabs defaultValue="profile" className="w-full">
        {/* ---- Tabs Header ---- */}
        <TabsList className="flex gap-4 w-64">
          <TabsTrigger
            className="bg-neutral-800 py-5 text-md rounded-2xl cursor-pointer"
            value="profile"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            className="bg-neutral-800 py-5 text-md rounded-2xl cursor-pointer"
            value="payments"
          >
            Payments
          </TabsTrigger>
        </TabsList>

        {/* ---- Profile Tab ---- */}
        <TabsContent value="profile" className="mt-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Row 1 */}
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
              <Label htmlFor="private">Set profile as private?</Label>
              <Switch
                className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-white
          relative
        "
                 id="private"
                checked={privateProfile}
                onCheckedChange={setPrivateProfile}
              />
            </div>
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
              <span>I am self-employed</span>
              <RefreshCw size={18} />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-3">
              <Label className="font-normal">Business Name</Label>
              <Input
                placeholder="Enter your business Name"
                className="bg-black border border-neutral-700 text-white"
              />
              <p className="text-xs text-zinc-400 mt-1">
                This is the name of your business that will be displayed on your
                invoices.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Label className="font-normal">Business Phone</Label>
              <Input
                placeholder="Enter your business Number"
                className="bg-black border border-neutral-700 text-white"
              />
              <p className="text-xs text-zinc-400 mt-1">
                This is the phone number of your business that will be displayed
                on your invoices.
              </p>
            </div>

            {/* Row 3 */}
           <div className="flex flex-col gap-3">
              <Label className="font-normal">Business Email</Label>
              <Input
                placeholder="Enter your business Email"
                className="bg-black border border-neutral-700 text-white"
              />
              <p className="text-xs text-zinc-400 mt-1">
                This is the email address of your business that will be
                displayed on your invoices.
              </p>
            </div>
            <div className="flex items-center justify-between bg-neutral-900 px-4 rounded-xl">
              <span>Manage social media</span>
              <ArrowRight size={18} />
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
              <span>Email invoice to Clients</span>
              <Switch className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-white
          relative
        " />
            </div>
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
              <span>Show licences and certifications</span>
              <Switch className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-white
          relative
        " />
            </div>

            {/* Row 5 */}
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
              <span>Show about information?</span>
              <Switch className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-white
          relative
        " />
            </div>
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
              <span>Show service completion message</span>
              <Switch className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-white
          relative
        "/>
            </div>

            {/* Row 6 */}
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl col-span-2">
              <span>Require the client to accept terms and conditions?</span>
              <Switch className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-white
          relative
        "/>
            </div>
          </div>
        </TabsContent>

        {/* ---- Payments Tab ---- */}
        <TabsContent value="payments" className="mt-6">
          <p className="text-zinc-400">Payments...</p>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
