import Pricing from "@/components/pricingplan";
import PricingYearly from "@/components/pricingplanYearly";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const subscription = () => {
  return (
    <div className="text-white w-285 select-none p-4">
      <div className="header h-30 flex flex-col gap-4 justify-center mx-4 mb-2">
        <div className="title text-3xl">Subscription</div>
        <div className="subtitle text-xl">Grow your business with the right plan</div>
        <div className="desc text-sm">
          Choose the plan that fits your goals. Upgrade anytime as you grow. 
        </div>
      </div>

<Tabs defaultValue="monthly" className="w-full">
  <TabsList className="flex gap-4 mx-4 mt-4 mb-4 bg-transparent">
    <TabsTrigger
      value="monthly"
      className="px-6 py-6 cursor-pointer text-xl rounded-2xl bg-neutral-900
                 data-[state=active]:bg-blue-600 data-[state=active]:text-white 
                 data-[state=inactive]:bg-neutral-900 data-[state=inactive]:text-zinc-400"
    >
      Monthly
    </TabsTrigger>

    <TabsTrigger
      value="yearly"
      className="px-6 py-6 cursor-pointer text-xl rounded-2xl bg-neutral-900
                 data-[state=active]:bg-blue-600 data-[state=active]:text-white 
                 data-[state=inactive]:bg-neutral-900 data-[state=inactive]:text-zinc-400"
    >
      Yearly
    </TabsTrigger>
  </TabsList>

  <TabsContent value="monthly">
    <Pricing />
  </TabsContent>
  <TabsContent value="yearly">
    <PricingYearly />
  </TabsContent>
</Tabs>




      
    </div>
  );
};

export default subscription;




