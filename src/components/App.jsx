import React, { useState } from "react";

function App() {
  const [headingText, headingState] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    headingState("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  

  function handleDelete() {
    // Fungsi untuk menangani penghapusan
    console.log("Delete button clicked"); // contoh tindakan sementara
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: isMouseOver ? "black" : "white",
          marginRight: "10px" // Contoh penggunaan inline CSS untuk menambahkan margin
        }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
      
      {/* Tombol "Delete" dengan event handling */}
      <button
        style={{ backgroundColor: "red" }}
        onClick={handleDelete} // Memanggil fungsi handleDelete saat tombol diklik
      >
        Delete
      </button>
    </div>
  );
}

export default App;
