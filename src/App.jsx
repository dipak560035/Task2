



// export default function App() {
//   const handleSubmit=(e)=>{
//     e.preventDefault();

//   }
// return (
//    <div className="p-5 max-w-[300px]">
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <Input
//       onChange={(e)=>{
//        console.log(e.target.value) ;
//       }}
//       label='email' name="email"/>
    
//     <Button type="submit">Submit</Button>
//  </form>
//     </div>
//   )
// }



import { Button, Input } from "@heroui/react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // track input

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setData((prev) => [...prev, inputValue]); // add into array
      setInputValue(""); // clear input
    }
  };

  return (
    <div className="p-5 max-w-[300px]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="email"
          name="email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // update input state
        />

        <Button type="submit">Submit</Button>
      </form>

      {/* show array values */}
      <div className="mt-4 space-y-1">
        {data.map((item, index) => (
          <p key={index} className="text-sm">
            {index + 1}. {item}
          </p>
        ))}
      </div>
    </div>
  );
}
