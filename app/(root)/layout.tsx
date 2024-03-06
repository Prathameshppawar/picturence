import Sidebar from "@/components/shared/sidebar"
import React from "react"

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
      {/*we have to implement here sidebar and the mobile nav*/}
      <Sidebar />
        <div className="root-container">
            <div className="wrapper">
                {children}

            </div>
        </div>


    </main>
  )
}
export default layout