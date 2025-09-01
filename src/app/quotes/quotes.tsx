import SearchBar from "@/components/searchbar";
import JobsTable from "@/components/tablelist";

const requests = () => {
  return (
    <div className="w-full select-none text-white">
      <div className="header px-6 h-20 w-full text-white flex justify-between text-2xl items-center">
        <div className="title">Quotes</div>
        <div className="search-bar hidden md:block">
          <SearchBar />
        </div>
      </div>
      <div>
        <div className="hidden md:block">
          <JobsTable />
        </div>
      </div>
      <div className="body block md:hidden text-center text-zinc-200">
        <div>No Quotes</div>
      </div>
    </div>
  );
};

export default requests;
