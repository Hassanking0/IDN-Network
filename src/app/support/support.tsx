import { MessageCircleWarning, ReceiptText, LockKeyhole, ChevronRight } from "lucide-react";

const support = () => {
  return (
    <div className="w-full px-2">
      <div className="w-full header h-15 flex items-center justify-between text-white text-2xl px-2">
        <div className="title">Support</div>
        <button className="bg-green-500 mt-40 p-2 px-5 rounded-xl text-sm flex items-center justify-center text-black cursor-pointer gap-2">
          <MessageCircleWarning color="black" size={16} />
          <p>Need Help! Chat with Support</p>
        </button>
      </div>
      <div className="body text-white mt-30 flex gap-6 flex-col">
        <div className="btn1 mx-2 h-20 rounded-2xl bg-zinc-950 flex items-center justify-between py-1 px-4 hover:outline-3 outline-zinc-900">
          <div className="logo-heading flex items-center gap-3">
            <LockKeyhole size={52} strokeWidth={1} />
            <div className="header">
              <div className="title">Privacy Policy</div>
              <div className="desc text-sm">
                Learn how we protect your data and respect your privacy.
              </div>
            </div>
          </div>
          <div className="arrow">
            <ChevronRight strokeWidth={2} />
          </div>
        </div>

        <div className="btn2 mx-2 h-20 rounded-2xl bg-zinc-950 flex items-center justify-between py-1 px-4 hover:outline-3 outline-zinc-900">
          <div className="logo-heading flex items-center gap-3">
            <ReceiptText size={52} strokeWidth={1} />
            <div className="header">
              <div className="title">Terms and conditions</div>
              <div className="desc text-sm">
                Understand the rules and guidelines for using our services.
              </div>
            </div>
          </div>
          <div className="arrow">
            <ChevronRight strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default support;
