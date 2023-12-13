"use client";

export default function HabitSlot({ date, toggleChange }) {
  function registerClick(date) {
    toggleChange(date);
  }

  return (
    <>
      <div className="habitSlot" onClick={() => registerClick(`${date}`)}></div>
      <style jsx>
        {`
          .habitSlot {
            background-color: #d9b6a3;
            border-radius: 8px;
            height: 80%;
            width: 32px;
            align-self: center;
          }

          .habitSlot:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
