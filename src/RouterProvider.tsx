import { createBrowserRouter } from "react-router-dom";
import AppShell from "./components/appshell/AppShell";
import Overview from "@/app/overview/overview"
import Create from "./app/create/create";
import Map from "./app/map/map";
import Clients from "./app/clients/clients";
import Messages from "./app/messages/messages";
import Requests from "./app/requests/requests";
import Nearbypeople from "./app/nearby-people/nearbypeople";
import Quotes from "./app/quotes/quotes";
import Projects from "./app/projects/projects";
import Invoices from "./app/invoices/invoices";
import Settings from "./app/settings/settings";
import Support from "./app/support/support";
import Subscription from "./app/subscription/subscription";
import Suggestions from "./app/suggestions/suggestions";
import Discount from "./app/discount/discount";
import Business_info from "./app/business_info/business_info";
import Qr_code from "./app/Qr_code/Qr_code";
import Distrubution_channels from "./app/distribution_channels/distribution_channels";
import Services from "./app/services/services";
import Preview from "./app/preview/preview";
import Reviews from "./app/reviews/reviews";
import IdnPro from "./app/idnPro/idnPro";
import SurgePricing from "./app/surgePricing/surgePricing";


const router = createBrowserRouter([
      {
    path: '/',
    element: <AppShell />,
    children: [
      {
        path: '', // This will be the default route "/"
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'create',
        element: <Create />
      },
      {
        path: 'map',
        element: <Map />
      },
      {
        path: 'clients',
        element: <Clients/>
      },
      {
        path: 'messages',
        element: <Messages />
      },
        {
        path: 'requests',
        element: <Requests />
      },
        {
        path: 'nearby-people',
        element: <Nearbypeople />
      },
        {
        path: 'quotes',
        element: <Quotes />
      },
        {
        path: 'projects',
        element: <Projects />
      },
        {
        path: 'invoices',
        element: <Invoices />
      },
        {
        path: 'settings',
        element: <Settings />
      },
        {
        path: 'support',
        element: <Support />
      },
        {
        path: 'subscription',
        element: <Subscription />
      },
        {
        path: 'suggestions',
        element: <Suggestions />
      },
        {
        path: 'discount',
        element: <Discount />
      },
      {
        path: 'business_info',
        element: <Business_info />
      },
      {
        path: 'Qr_code',
        element: <Qr_code />
      },
      {
        path: 'distribution_channels',
        element: <Distrubution_channels/>
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'preview',
        element: <Preview />
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path: 'idnPro',
        element: <IdnPro />
      },
      {
        path : 'surgePricing',
        element: <SurgePricing/>
      }
    ]
  },
    
])


export default router