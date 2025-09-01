import TotalBookingsCard from "@/components/totalbookingcard";
import ProfileCompletionCard from "@/components/overviewheadercard";

const overview = () => {
  return (
    <div>
      {/* desktop view */}
    <div className="p-sm bg-zinc-950 text-white min-h-full select-none">
      <div className="header hidden md:block">
      <div className="header max-w-screen h-60 flex flex-col md:flex-row items-center justify-between px-2">
        <div className="title">
          <div className="subtitle text-sm">Monday, 25 Aug</div>
          <h1 className="title text-4xl">Good Morning, Hassan</h1>
        </div>
        <div className="hidden md:block header-card">
          <ProfileCompletionCard />
        </div>
      </div>
      </div>
      <div className="cards flex flex-col gap-4 mx-4 my-4">
        <TotalBookingsCard defaultTitle="Total Bookings" />
        <TotalBookingsCard defaultTitle="Total Revenue"/>
      </div>
      
    </div>

{/* mobile view */}

    </div>
  );
};

export default overview;
