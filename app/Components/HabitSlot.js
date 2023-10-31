'use client'

export default function HabitSlot(props) {

    function toggleChange() {
        props.toggleChange(`day${props.id}`, props.isChecked)
    }

  return (
    <>
        <div className="habitSlot" onClick={() => toggleChange(`day${props.id}`, props.isChecked)}></div>
        <style jsx>
            {`
                .habitSlot {
                    background-color: ${props.isChecked ? "#324359" : "#D9B6A3"};
                    border-radius: 8px;
                    height: 80%;
                    width: 32px;
                    align-self: center
                }

                .habitSlot:hover {
                    cursor: pointer;
                  }
            `}
        </style>
    </>
  )
}
