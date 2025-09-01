import SearchBar from "@/components/searchbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const messages = () => {
  return (
    <div className="select-none">
      <div className="title text-white px-4 h-20 w-full flex items-center text-2xl">
        <h1>Messages</h1>
      </div>
      <div className="hidden md:block">
        <div className="body px-4 flex gap-8 items-center w-full">
          <div className="box h-150 w-70 bg-zinc-950 text-white rounded-2xl text-xl p-4">
            Clients
          </div>
          <div className="right text-white w-180 h-120 flex justify-center items-center">
            <p>Start a Chat Now!</p>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="input-bar mx-4">
          <SearchBar />
        </div>
        <div className="btns">
          <Tabs defaultValue="contacts" className="w-full text-white ml-4 mt-4">
            {/* ---- Tabs Header ---- */}
           <TabsList className="flex gap-4 w-64">
  <TabsTrigger
    className="py-5 px-5 text-md rounded-2xl cursor-pointer font-bold transition-all duration-300 bg-black text-zinc-300 hover:bg-zinc-800 hover:text-white data-[state=active]:bg-zinc-900 data-[state=active]:text-white data-[state=active]:shadow-lg"
    value="contacts"
  >
    Contacts
  </TabsTrigger>
  
  <TabsTrigger
    className="py-5 px-5 text-md rounded-2xl cursor-pointer font-bold transition-all duration-300 bg-black text-zinc-300 hover:bg-zinc-800 hover:text-white data-[state=active]:bg-zinc-900 data-[state=active]:text-white data-[state=active]:shadow-lg"
    value="groups"
  >
    Groups
  </TabsTrigger>
</TabsList>

            {/* ---- Profile Tab ---- */}
            <TabsContent value="contacts" className="mt-6"></TabsContent>

            {/* ---- Payments Tab ---- */}
            <TabsContent value="groups" className="mt-6">
              <p className="text-zinc-400"></p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default messages;
