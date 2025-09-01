import JobsTable from "@/components/tablelist";

const invoices = () => {
  return (
    <div className="w-full select-none text-white">
      <div className="header w-full text-white text-2xl h-20 px-2 flex items-center">Invoices</div>
      <div className="body hidden md:block">
      <JobsTable/>
    </div>
    <div className="body block md:hidden text-center">
<div>No Invoices</div>
      </div>
    </div>
    
  );
};

export default invoices;
