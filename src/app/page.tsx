"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/footer"
import { TabsSkeleton } from "@/components/products/skeleton"
import { ProductsTab } from "@/components/products/tab"
import { Suspense } from "react"



const Page = ()=>{
  return(
    <div className="w-full max-w-4xl mx-auto">
      <Header/>
      <div className="mx-3">
        <Suspense fallback={<TabsSkeleton/>}>
            <ProductsTab/>
        </Suspense>
      </div>
      <Footer/>
    </div>
  )
}

export default Page