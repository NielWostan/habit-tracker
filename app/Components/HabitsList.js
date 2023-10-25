'use client'

import { use } from "react"
import { useState } from "react";
import Habit from "./Habit";
import AddHabit from "./AddHabit";
import { pushHabit } from "@/library/pushHabit";

export default function HabitsList(props) {
    /*const [data,setData] = useState(
        [
            {
                id: 0,
                name: "Meditation"
            },
            {
                id: 1,
                name: "Exercise"
            },
            {
                id: 2,
                name: "Cardio"
            },
            {
                id: 3,
                name: "Reading"
            }
        ]
    )*/


    const [data,setData] = useState(props.data)

    async function triggerAddNewHabit(newHabitName) {
        console.log(props.currentUserId,newHabitName)
        // Need to fix here
    }
    
    const dataElements = data.map(dataEl => <Habit title = {dataEl.title} key = {dataEl.id}/>)

    return (
        <div className='habitsList'>
            {dataElements}
            <AddHabit triggerAddNewHabit={triggerAddNewHabit} currentUserId = {props.currentUserId}/>
            <style jsx>
                {`
                    .habitsList {
                        disply: flex;
                        flex-direction: column;
                        width: 98vw;
                        margin: 25px;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    )
}
