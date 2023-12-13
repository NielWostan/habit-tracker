"use client";

export default function HabitSlot({ date, progress, toggleChange }) {
  function registerClick(date) {
    toggleChange(date);
  }

  return (
    <>
      <div className="habitSlot" onClick={() => registerClick(`${date}`)}></div>
      <style jsx>
        {`
          .habitSlot {
            background-color: ${progress.includes(date)
              ? "#324359"
              : "#d9b6a3"};
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
