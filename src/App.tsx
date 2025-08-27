// App.tsx
import { RouterProvider } from "react-router-dom"
import router from "./RouterProvider"
function App() {
  return (
    // <Router>
    //   <div>
    //     <Navbar />
    //     <div>
    //       <SidebarProvider>
    //         <Sidebar />
    //         <SidebarInset>
    //           <Outlet />
    //         </SidebarInset>
    //       </SidebarProvider>
    //     </div>
    //   </div>
    //   <Routes>{/* <Route path="/" element={<Home />} />  */}
    //     <Route path="/design" element={<Design />} />
    //   </Routes>
    // </Router>
      <RouterProvider router={router} />
  );
}

export default App;
