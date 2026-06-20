'use client'
import React from "react"
import { format } from "date-fns"
import { Calendar1Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import DateSelectionPage from "@/components/pagecomponents/dateSelection"
import MainPage from "@/components/pagecomponents/mainpage"
export default function Page() {
  const [date, setDate] = React.useState<Date>()
  const [correctDate, setCorretDate] = React.useState(false)

  let redirect = () => {
    console.log(date)
    console.log(date?.toString().slice(0, 15))
    if (date?.toString().slice(0, 15) === "Fri Jul 24 2026") {
      console.log("Mow")
    }

  }


  if (correctDate) {
    return (
      <div>
        <MainPage />
      </div>
    )
  }
  else {
    return (
      <div>
        <DateSelectionPage correctDate={correctDate} setCorrectDate={setCorretDate} />
      </div>
    )
  }

}
