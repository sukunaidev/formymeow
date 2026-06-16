'use client'
import React from "react"
import { format } from "date-fns"
import { Calendar1Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function Page() {
  const [date, setDate] = React.useState<Date>()

  let redirect = () => {
    console.log(date)
    console.log(date?.toString().slice(0, 15))
    if (date?.toString().slice(0, 15) === "Mon Jun 15 2026") {
      console.log("Mow")
    }

  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-2xl text-blue-500">Meow my Zemer</div>
        <div className="text-blue-300">Please enter todays date. {"<3"}</div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!date}
              className="w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
            >
              <Calendar1Icon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}

              onDayClick={redirect}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
