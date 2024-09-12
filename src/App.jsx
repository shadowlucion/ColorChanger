import { useState } from "react";
import ColorButton from "./Components/Button";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  const handleChangeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      className='flex items-center flex-col justify-center h-screen w-full bg-slate-400 '
      style={{ backgroundColor: bgColor }}
    >
      <h1 className='text-2xl font-bold mb-6'>Change Background Color</h1>
      <div className='space-x-4'>
        <ColorButton color='red' handleChangeColor={handleChangeColor} />
        <ColorButton color='green' handleChangeColor={handleChangeColor} />
        <ColorButton color='blue' handleChangeColor={handleChangeColor} />
      </div>
    </div>
  );
}

export default App;
