'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import HabitSlot from "./HabitSlot";

export default function Habit(props) {

    const router = useRouter()

    const [data,setData] = useState(
        [
          {
            id: 1,
            date: "10/12",
            isChecked: false
          },
          {
            id: 2,
            date: "10/13",
            isChecked: false
          },
          {
            id: 3,
            date: "10/14",
            isChecked: false
          },
          {
            id: 4,
            date: "10/15",
            isChecked: false
          },
          {
            id: 5,
            date: "10/16",
            isChecked: false
          },
          {
            id: 6,
            date: "10/17",
            isChecked: false
          },
          {
            id: 7,
            date: "10/18",
            isChecked: false
          }
        ]
      )

    const dataElements = data.map(dataEl => 
        <HabitSlot 
            isChecked={dataEl.isChecked} 
            toggleChange={toggleChange} 
            key={dataEl.id} 
            id={dataEl.id}/>
    )

    function toggleChange(id,isChecked) {
      setData(prevValue =>
        {
          let newValue = prevValue
          for (let i = 0; i < newValue.length; i++) {
            if (newValue[i].id == id) {
              newValue[i].isChecked = !isChecked 
              break
            } else {
              continue
            }
          } 
          return newValue
          }
        )
        router.refresh()
    }

  return (
    <div className="habit">
        <div className="habitName">
          <p>{props.title}</p>
        </div>
        <div className="habitList">
          {dataElements}
        </div>
        <style jsx>
            {`
                .habit {
                    display: flex;
                    border: 1px solid green;
                    justify-content: space-between;
                    height: 25px;
                }

                .habitName {
                    width: 25%;
                }

                .habitList {
                    display: flex;
                    border: 1px solid pink;
                    width: 75%;
                    justify-content: space-around;
                }
                
            `}
        </style>
    </div>
  )
}
