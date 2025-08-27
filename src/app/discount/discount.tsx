import  Button2  from "@/components/button2"
import { Receipt } from 'lucide-react';

const requests = () => {
  return (
    <div className="w-285">
      <div className="header px-6 h-20 w-full text-white flex justify-between text-2xl items-center">
        <div className="title">Discount</div>
        <Button2 title="Create a Discount"/>
      </div>
      <div className="main gap-3 text-white h-150 flex-col flex justify-center items-center">
        <div className="icon"><Receipt size={72} className="text-white"/></div>
        <h3 className="title font-bold">No Discount found</h3>
        <div className="subtitle">There are no Discount available at the moment</div>
      </div>
    </div>
  )
}

export default requests