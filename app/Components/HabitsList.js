'use client'

import { useState } from "react";
import Habit from "./Habit";
import AddHabit from "./AddHabit";

export default function HabitsList() {
    const [data,setData] = useState(
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
    )

    function triggerAddNewHabit(newHabitName) {
        setData(prevValue => [...prevValue,{id: prevValue.length, name: newHabitName}])
    }
    
    const dataElements = data.map(dataEl => <Habit title = {dataEl.name} key = {dataEl.id}/>)

    return (
        <div className='habitsList'>
            {dataElements}
            <AddHabit triggerAddNewHabit={triggerAddNewHabit}/>
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
