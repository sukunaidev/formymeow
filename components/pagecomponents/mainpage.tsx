'use client'
import React from "react"
import { useState } from "react"
import { Button } from "../ui/button"

export default function MainPage() {
    return (
        <div>
            <div className="text-center text-pink-300 text-2xl">Happy 6 months my love.</div>
            <div className="text-center text-blue-300">I love you so much and I love the memories we have together and I cant wait to make more memories together.</div>
            <div>
                <Button>Fun Facts</Button>
                <Button>Reasons I love you</Button>
                <Button>Love Form</Button>

            </div>
        </div>
    )

}