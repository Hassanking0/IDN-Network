import TotalBookingsCard from "@/components/totalbookingcard";
import ProfileCompletionCard from "@/components/overviewheadercard";

const overview = () => {
  return (
    <div className="w-280 bg-zinc-950 text-white min-h-full px-2 pb-22 select-none">
      <div className="header max-w-screen h-60 flex items-center justify-between px-2">
        <div className="title">
          <div className="subtitle text-sm">Monday, 25 Aug</div>
          <h1 className="title text-4xl">Good Morning, Hassan</h1>
        </div>
        <div className="header-card">
          <ProfileCompletionCard />
        </div>
      </div>
      <div className="cards flex flex-col gap-4">
        <TotalBookingsCard defaultTitle="Total Bookings" />
        <TotalBookingsCard defaultTitle="Total Revenue"/>
      </div>
      
    </div>
  );
};

export default overview;
