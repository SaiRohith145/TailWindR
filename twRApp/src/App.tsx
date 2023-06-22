import { useState } from 'react'
import './App.css';
import { v4 as uuidV4} from "uuid";

export type item = {
  name:string
  id:string
}

function App() {
  const [itemName,setItemName] = useState<string>("");
  const [itemsList,setItemsList] = useState<item[]>([])

  const updateItemName = (inputData : React.ChangeEvent<HTMLInputElement>) => {
    console.log("inputData====>",inputData);
    setItemName(inputData.target.value);
  }

  const addItemToList = ():void => {
    if(itemName.length>0){
      const itemObj: item = {
        name:itemName,
        id:uuidV4()
      }
      setItemsList(state => [...state,itemObj]);
      setItemName("");
    }
  }

  return (
    <div className='container"'>
      <div className='flex flex-col justify-center items-center my-5'>
        <span>TypeScript Test</span>
        <div className='flex flex-col items-center bg-cyan-950 my-5 w-full h-screen'>
          <div className='relative w-1/2'>
            <div className="absolute top-5 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" value={itemName} onChange={updateItemName} id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item Name"/>
            <button onClick={addItemToList} className="text-white absolute right-2.5 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
          </div>
          {
            itemsList.map((item:item,index:number) => {
              return(
                <div>{`${index+1}. name : ${item.name}`}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
