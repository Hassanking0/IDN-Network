import SearchBar from "@/components/searchbar"
import JobsTable from "@/components/tablelist"

const requests = () => {
  return (
    <div className="w-full text-white select-none">
      <div className="header px-6 h-20 w-full text-white flex justify-between text-2xl items-center">
        <div className="title">Requests</div>
        <div className="search-bar hidden md:block"><SearchBar/></div>
      </div>
      <div className="hidden md:block">
<JobsTable />
      </div>
      <div className="body block md:hidden text-center">
<div>No bookings found</div>
      </div>
    </div>
  )
}

export default requests