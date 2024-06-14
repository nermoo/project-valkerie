import React, { ReactNode } from "react";
import Navbar from "./Navbar/navbar";


const AppLayout: React.FC<{
    children: ReactNode
  }> = ({children}) => {
  
    return (
      <>
        <Navbar/>
        {children}
      </>
    )
  }
  
  export default AppLayout;