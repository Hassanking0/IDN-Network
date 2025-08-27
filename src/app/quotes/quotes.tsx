import SearchBar from "@/components/searchbar";
import JobsTable from "@/components/tablelist";

const requests = () => {
  return (
    <div className="w-285">
      <div className="header px-6 h-20 w-full text-white flex justify-between text-2xl items-center">
        <div className="title">Quotes</div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
      <div>
          <div>
          <JobsTable />
        </div>
      </div>
    </div>
  );
};

export default requests;
