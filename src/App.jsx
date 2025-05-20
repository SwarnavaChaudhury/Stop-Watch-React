import { useState } from 'react'
import './App.css'

function App() {

  let [hours, setHours] = useState(0)
  let [mins, setMins] = useState(0)
  let [secs, setSecs] = useState(0)
  let [millis, setMillis] = useState(0)

  let [stopwatchStatus, setStopwatchStatus] = useState()



  let updtMillis = millis
  let updtSecs = secs
  let updtMins = mins
  let updtHours = hours

  let stopwatchFunc = () => {

    updtMillis++
    if (updtMillis == 100) {
      updtMillis = 0
      updtSecs++
    }
    if (updtSecs == 60) {
      updtSecs = 0
      updtMins++
    }
    if (updtMins == 60) {
      updtMins = 0
      updtHours++
    }

    setHours(updtHours)
    setMins(updtMins)
    setSecs(updtSecs)
    setMillis(updtMillis)

  }



  let startStopwatch = () => {
    setStopwatchStatus(setInterval(stopwatchFunc, 10));
    // interval by 10 milli-seconds
  }

  let stopStopwatch = () => {
    clearInterval(stopwatchStatus)
  }

  let resetStopwatch = () => {
    clearInterval(stopwatchStatus)

    setHours(0)
    setMins(0)
    setSecs(0)
    setMillis(0)
  }



  return (
    <>

      <div className='h-screen w-full bg-stone-200 flex justify-center items-center'>
        <div className='border border-stone-300 bg-white shadow-[0px_0px_5px_5px_#ccc] p-10 w-[500px]'>

          <div className='text-5xl font-semibold flex justify-center gap-3'>
            <span className='w-[60px] text-center'>
              {hours < 10 ? "0" + hours : hours}
            </span>
            :
            <span className='w-[60px] text-center'>
              {mins < 10 ? "0" + mins : mins}
            </span>
            :
            <span className='w-[60px] text-center'>
              {secs < 10 ? "0" + secs : secs}
            </span>
            :
            <span className='w-[60px] text-center'>
              {millis < 10 ? "0" + millis : millis}
            </span>
          </div>
          <div className='flex justify-center gap-5 mt-10'>
            <button className='text-white bg-green-400 px-8 py-2 text-2xl rounded-lg cursor-pointer' onClick={startStopwatch}>
              Start
            </button>
            <button className='text-white bg-red-500 px-8 py-2 text-2xl rounded-lg cursor-pointer' onClick={stopStopwatch}>
              Stop
            </button>
            <button className='text-white bg-yellow-500 px-8 py-2 text-2xl rounded-lg cursor-pointer' onClick={resetStopwatch}>
              Reset
            </button>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
