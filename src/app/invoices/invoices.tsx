import JobsTable from "@/components/tablelist";

const invoices = () => {
  return (
    <div className="w-280">
      <div className="header w-full text-white text-2xl h-20 px-2 flex items-center">Invoices</div>
      <div className="body">
      <JobsTable/>
    </div>
    </div>
    
  );
};

export default invoices;
