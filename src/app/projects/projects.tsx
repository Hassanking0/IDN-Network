import SearchBar from "@/components/searchbar"
import logo from "@/assets/idn.png";
import JobsTable from "@/components/tablelist-projects"

const requests = () => {
  return (
    <div className="w-full select-none text-white">
      <div className="header px-6 h-20 w-full text-white flex justify-between text-2xl items-center">
        <div className="title">Projects</div>
        <div className="search-bar hidden md:block"><SearchBar/></div>
      </div>
      <div className="hidden md:block">
        <JobsTable logo={logo}/>
      </div>
      <div className="body block md:hidden text-center">
<div>No bookings found</div>
      </div>
    </div>
  )
}

export default requests