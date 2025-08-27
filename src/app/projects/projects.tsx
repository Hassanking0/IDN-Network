import SearchBar from "@/components/searchbar"
import logo from "@/assets/idn.png";
import JobsTable from "@/components/tablelist-projects"

const requests = () => {
  return (
    <div className="w-285 select-none">
      <div className="header px-6 h-20 w-full text-white flex justify-between text-2xl items-center">
        <div className="title">Projects</div>
        <div className="search-bar"><SearchBar/></div>
      </div>
      <div>
        <JobsTable logo={logo}/>
      </div>
    </div>
  )
}

export default requests