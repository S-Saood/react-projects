import React, {useState} from "react"

function Counter() {
  const[count, setCount]=useState(0)


  


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Counter
        </h1>

        {/* Count Display */}
        <div className="text-5xl font-bold text-blue-600 mb-8">
          {count}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button 
          onClick={()=> setCount(prev => prev - 1)}
          className="px-5 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600">
            -
          </button>

          <button 
          onClick={()=> setCount(0)}
          className="px-5 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600">
            Reset
          </button>

          <button 
          onClick={()=> setCount(prev => prev+1)}
          className="px-5 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600">
            +
          </button>
        </div>

      </div>
    </div>
  );
}

export default Counter;