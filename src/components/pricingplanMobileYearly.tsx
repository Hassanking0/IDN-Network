import { Megaphone, ShieldCheck, ArrowLeftRight, Check, X } from "lucide-react";

const PricingMobileYearly = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for starting your business journey. Build your first client",
      price: "Free",
      period: "",
      features: {
        clients: "6",
        adFree: false,
        automaticQuotes: false,
        teamManagement: false,
      },
      buttonText: "Current",
      buttonStyle: "bg-gray-600 text-white cursor-not-allowed",
      popular: false
    },
    {
      name: "Essentials Monthly",
      description: "Essential features for growing businesses",
      price: "$99.00",
      period: "/Monthly",
      features: {
        clients: "32",
        adFree: true,
        automaticQuotes: false,
        teamManagement: false,
      },
      buttonText: "Subscribe",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
      popular: false
    },
    {
      name: "Professional Monthly",
      description: "Advanced features for professional teams",
      price: "$190.00",
      period: "/Monthly",
      features: {
        clients: "64",
        adFree: true,
        automaticQuotes: true,
        teamManagement: true,
      },
      buttonText: "Get Started",
      buttonStyle: "bg-yellow-500 hover:bg-yellow-600 text-white",
      popular: true
    },
    {
      name: "Elite Monthly",
      description: "Premium solution for enterprise needs",
      price: "$290.00",
      period: "/Monthly",
      features: {
        clients: "Unlimited",
        adFree: true,
        automaticQuotes: true,
        teamManagement: true,
      },
      buttonText: "Get Started",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
      popular: false
    }
  ];

  const FeatureRow = ({ label, value }: { label: string; value: string | boolean }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
      <span className="text-sm font-medium text-gray-300">{label}</span>
      <div className="flex items-center">
        {value === true ? (
          <Check className="w-5 h-5 text-green-400" />
        ) : value === false ? (
          <X className="w-5 h-5 text-gray-500" />
        ) : (
          <span className="text-sm font-semibold text-white">{value}</span>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-neutral-900 mx-4 rounded-2xl p-4 min-h-screen">
      {/* Header */}
      <div className="bg-black rounded-2xl flex flex-col sm:flex-row justify-center gap-3 items-center p-6 mb-8">
        <div className="icon">
          <Megaphone strokeWidth={2} size={54} className="text-blue-400" />
        </div>
        <div className="text-center sm:text-left">
          <div className="text-xl font-bold text-white mb-2">Lifetime Rate Guarantee</div>
          <div className="text-sm font-bold text-gray-300">
            Lifetime rate Guarantee! Early bird offer: lock in your subscription
            and keep this price for life. Plan will increase soon!
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "border-yellow-500 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl shadow-yellow-500/20"
                : "border-gray-600 bg-gradient-to-b from-gray-800 to-gray-900 hover:border-blue-500"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-full shadow-lg">
                  Popular
                </span>
              </div>
            )}

            <div className="p-6">
              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4 min-h-[2.5rem]">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-1 mb-6">
                <FeatureRow label="Clients" value={plan.features.clients} />
                <FeatureRow label="Ad Free" value={plan.features.adFree} />
                <FeatureRow label="Automatic Quotes" value={plan.features.automaticQuotes} />
                <FeatureRow label="Team Management" value={plan.features.teamManagement} />
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 transform active:scale-95 ${plan.buttonStyle}`}
                disabled={plan.buttonText === "Current"}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-3">
            <ShieldCheck strokeWidth={2} className="text-green-400 flex-shrink-0" />
            <span>Secure payment processing</span>
          </div>
          <div className="flex items-center gap-3">
            <ArrowLeftRight strokeWidth={2} className="text-blue-400 flex-shrink-0" />
            <span>Cancel anytime, no lock-in contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingMobileYearly;