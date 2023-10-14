"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Dashboard  ()  {
    const router = useRouter()

    if(localStorage["logged_in"]) {
        return <h1>Weolcome</h1>
    } else {
        router.push("/accounts/login")
    }
    

}