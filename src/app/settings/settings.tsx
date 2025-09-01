import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/idn.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Info, ShieldAlert } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Ear, Accessibility, Eye, Brain, Mic, Circle } from "lucide-react";

const disabilities = [
  { id: "hearing", label: "Hearing Impairment", icon: Ear },
  { id: "physical", label: "Physical Disability", icon: Accessibility },
  { id: "visual", label: "Visual Disability", icon: Eye },
  { id: "cognitive", label: "Cognitive Disability", icon: Brain },
  { id: "speech", label: "Speech Disability", icon: Mic },
  { id: "other", label: "Other", icon: Circle }, // you can swap Circle with something else if needed
];

const settings = () => {
  return (
    <div className="text-zinc-200 w-full select-none">
      <div className="heading p-3 flex items-center w-full justify-between">
        <div className="title text-2xl">Settings</div>
        <button className="delete-btn bg-red-500 text-black p-2 px-4 rounded-2xl cursor-pointer">
          {" "}
          Delete Account
        </button>
      </div>
      <Tabs defaultValue="account" className="w-full p-3">
        {/* ---- Tabs Header ---- */}
        <TabsList className="flex gap-4 w-full max-w-4xl bg-transparent p-0">
          <TabsTrigger
            className="data-[state=active]:bg-zinc-700 data-[state=inactive]:bg-transparent bg-neutral-800 py-5 text-md rounded-xl cursor-pointer px-4 text-gray-400 data-[state=active]:text-white hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
            value="account"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-zinc-700 data-[state=inactive]:bg-transparent bg-neutral-800 py-5 text-md rounded-xl cursor-pointer px-4 text-gray-400 data-[state=active]:text-white hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
            value="permission"
          >
            Permission
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-zinc-700 data-[state=inactive]:bg-transparent bg-neutral-800 py-5 text-md rounded-xl cursor-pointer px-4 text-gray-400 data-[state=active]:text-white hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
            value="notification"
          >
            Notification
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-zinc-700 data-[state=inactive]:bg-transparent bg-neutral-800 py-5 text-md rounded-xl cursor-pointer px-4 text-gray-400 data-[state=active]:text-white hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
            value="app"
          >
            App
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-zinc-700 data-[state=inactive]:bg-transparent bg-neutral-800 py-5 text-md rounded-xl cursor-pointer px-2 text-gray-400 data-[state=active]:text-white hover:text-white hover:bg-neutral-800/50 transition-all duration-200"
            value="invoice-settings"
          >
            Invoice Settings
          </TabsTrigger>
        </TabsList>

        {/* ---- Profile Tab ---- */}
        <TabsContent value="account" className="mt-6 w-full">
          <div className="header flex items-center justify-between text-zinc-200">
            <div className="icon-title flex items-center gap-4">
              <div className="icon">
                <img className="rounded-full w-32 h-32" src={logo} />
              </div>
              <div className="title-sub">
                <div className="title">Hassan King</div>
                <div className="sub text-sm">Multan, Pakistan</div>
              </div>
            </div>
            <div className="desc text-xs flex flex-col gap-3">
              <div className="text-right">Since 22 Aug 2025</div>
              <div>Free Member Account</div>
            </div>
          </div>
          <div className="main grid grid-cols-2 w-full justify-center gap-6">
            <div className="grid max-w-full items-center gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                className="border border-zinc-500 h-14"
                type="email"
                id="email"
                placeholder="Name"
              />
            </div>
            <div className="grid max-w-full items-center gap-3 ">
              <Label htmlFor="email">Email</Label>
              <Input
                className="border border-zinc-500 h-14"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full items-center gap-3 ">
              <Label htmlFor="email">Address</Label>
              <Input
                className="border border-zinc-500 h-14"
                type="email"
                id="email"
                placeholder="Enter Your Address"
              />
            </div>
            <div className="grid w-full items-center gap-3 ">
              <Label htmlFor="email">Phone Number</Label>
              <Input
                className="border border-zinc-500 h-14"
                type="email"
                id="email"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="hide-number flex flex-col gap-2">
              <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
                <Label htmlFor="private">Hide Phone Number</Label>
                <Switch
                  className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
                />
              </div>
              <div className="flex items-center gap-4">
                <Info size={32} />
                <p>
                  If enabled this will hide your phone number, please note that
                  your <br /> clients won't be able to call you.
                </p>
              </div>
              <div className="currency mt-4 flex flex-col gap-2">
                <div className="text-sm">Currency</div>
                <div className="bg-zinc-900 w-full flex justify-between p-4 rounded-xl">
                  <div className="curr">Currency</div>
                  <div className="name">USD</div>
                </div>
              </div>
            </div>
            <div className="account-security flex flex-col gap-2">
              <div className="title-s flex items-center gap-2">
                <ShieldAlert size={62} />
                <div className="title">Account Security</div>
              </div>
              <div className="p text-sm">
                Some user may only choose to accept quotes from drives which who
                are fully <br /> verified
              </div>
              <div className="profile-account bg-zinc-900 p-2 rounded-2xl flex items-center gap-2">
                <div className="icon">
                  <img className="w-16 h-16 rounded-full" src={logo} />
                </div>
                <div className="title">
                  <div className="name">Hassan King</div>
                  <div className="email text-xs">hassanking1241@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <p className="text-sm font-medium text-white">PWD User</p>
            {disabilities.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.id}
                  className="flex flex-row items-center justify-between bg-neutral-800 px-4 py-3 rounded-xl text-white border-0 shadow-none"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-white/90" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <Checkbox className="border-white/70 data-[state=checked]:bg-white data-[state=checked]:text-black" />
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* ---- Payments Tab ---- */}
        <TabsContent value="permission" className="mt-6 w-full flex">
          <div className="granted w-full">
            <div className="title">Granted</div>
            <div className="content"></div>
          </div>
          <div className="denied w-full flex flex-col gap-4">
            <div className="Denied">Denied</div>
            <div className="content flex flex-col gap-3">
              {" "}
              <div className="bg-zinc-900 w-full flex justify-between p-4 rounded-xl">
                <div className="curr">Phonebook</div>
                <div className="name text-zinc-400">Not Supported</div>
              </div>
              <div className="bg-zinc-900 w-full flex justify-between p-4 rounded-xl">
                <div className="curr">GPS</div>
                <div className="name">Allow</div>
              </div>
              <div className="bg-zinc-900 w-full flex justify-between p-4 rounded-xl">
                <div className="curr">Push Notification</div>
                <div className="name">Allow</div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="notification"
          className="grid grid-cols-2 w-full gap-4 mt-4"
        >
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
            <Label htmlFor="private">Client viewed your profile</Label>
            <Switch
              className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
            />
          </div>
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
            <Label htmlFor="private">Client added you as a provider</Label>
            <Switch
              className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
            />
          </div>
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
            <Label htmlFor="private">Client reviewed your profile</Label>
            <Switch
              className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
            />
          </div>
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
            <Label htmlFor="private">Payment failed</Label>
            <Switch
              className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
            />
          </div>
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
            <Label htmlFor="private">Potential Client nearby</Label>
            <Switch
              className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
            />
          </div>
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
            <Label htmlFor="private">Unread messages</Label>
            <Switch
              className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
            />
          </div>
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 rounded-xl">
            <Label htmlFor="private">New Messages</Label>
            <Switch
              className="
         h-6 w-11 
          bg-zinc-700
          data-[state=checked]:bg-blue-700
          relative
        "
            />
          </div>
        </TabsContent>
        <TabsContent value="app" className="mt-4">
          <div className="flex flex-col gap-3">
            <div className="title">Select Language</div>
            <div className="bg-zinc-900 w-full flex justify-between p-4 rounded-xl">
              <div className="curr text-zinc-400">English</div>
            </div>
          </div>
          <Select>
  <SelectTrigger className="w-full bg-zinc-900 border-0 outline-0">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent className="w-180">
    <SelectItem className="bg-white" value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default settings;
