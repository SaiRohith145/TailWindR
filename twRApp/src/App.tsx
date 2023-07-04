import { useState } from "react";
import "./App.css";
import { v4 as uuidV4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

export type item = {
  name: string;
  id: string;
};

function App() {
  // const [itemName, setItemName] = useState<string>("");
  // const [itemsList, setItemsList] = useState<item[]>([]);

  // const updateItemName = (inputData: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("inputData====>", inputData);
  //   setItemName(inputData.target.value);
  // };

  // const addItemToList = (): void => {
  //   if (itemName.length > 0) {
  //     const itemObj: item = {
  //       name: itemName,
  //       id: uuidV4(),
  //     };
  //     setItemsList((state) => [...state, itemObj]);
  //     setItemName("");
  //   }
  // };

  return (
    <div className="md:container w-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
