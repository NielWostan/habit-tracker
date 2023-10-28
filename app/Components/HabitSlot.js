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
                    background-color: ${props.isChecked ? "blue" : "grey"};
                    height: 100%;
                    width: 18px;
                }
            `}
        </style>
    </>
  )
}
