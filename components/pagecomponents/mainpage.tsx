'use client'
import React from "react"
import { useState } from "react"
import { Button } from "../ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function MainPage() {
    return (
        <div>
            <div className="text-center text-pink-300 text-2xl">Happy 6 months my love.</div>
            <div className="text-center text-blue-300">I love you so much and I love the memories we have together and I cant wait to make more memories together.</div>
            <div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">Fun Facts</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div>
                            <ul>1. We been together for 181 days</ul>
                            <ul>2. Which is 260,640 minutes</ul>
                            <ul>3. 4,344 hours</ul>
                            <ul>4. Thats dexter 42 times, including the other series</ul>
                            <ul>5. Thats Good Doctor 48 times!</ul>
                            <ul>6. Thats The Boys 140 times</ul>
                            <ul>7. Thats Peacemaker 384 times</ul>
                            <ul>8. Thats enough time for an average person to learn Albanian 4 times over, and I only know shkopa </ul>
                            <ul>9. Thats the office 58 times</ul>
                            <ul>10. Fun fun fact: Multiply it by infinity and thats how much time I want to be with you</ul>
                        </div>
                    </PopoverContent>
                </Popover>


                <Button>Reasons I love you</Button>
                <Button>Love Form</Button>

            </div>
        </div>
    )

}