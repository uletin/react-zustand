import create from 'zustand'
import './App.css'

function App() {
const useStore = create(set => ({
  count : 1,
  increments : () => set(state => ({count : state.count + 1}))
}))

// const useStore = create(
//   function (set) {
//     return {
//       count : 1,
//       increments : function () {
//         set(
//           function (state) {
//             return {
//               count:state.count+1
//             }
//           }
//         )
//       }
//     }
//   }
// )

function Controls() {
  const inc = useStore(state => state.increments)
  return <button onClick={inc}>Increments</button>
}

function Counter() {
  const count = useStore(state => state.count)
  return <h1>{count}</h1>
}

  return (
    <div className="App">
      <Counter />
      <Controls />
    </div>
  )
}

export default App


// const useStore = function create(set){
//   return {
//     count : 1,
//     inc : function() {
//       return set (function(state){
//         return {
//           count : state.count + 1
//         }
//       })
//     }
//   }
// }
