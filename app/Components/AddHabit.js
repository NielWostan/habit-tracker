export default function AddHabit() {
    function addAHabit() {

    }
  return (
    <>
    <button onClick={addAHabit}>Add a Habit</button>
    <div>
        <input></input> {/* Will have display none until onClick, popUp, get new habit title,
        send to parent div, update the list */}
    </div>
    </>
  )
}
