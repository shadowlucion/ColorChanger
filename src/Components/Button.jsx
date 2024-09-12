const ColorButton = ({ color, handleChangeColor }) => {
  const colors = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  return (
    <button
      className={`${colors[color]} text-white px-4 py-2 rounded`}
      onClick={() => handleChangeColor(color)}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default ColorButton;
