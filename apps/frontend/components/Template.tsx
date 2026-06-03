

export function Template() {
  return (
    <div>
       {["Build a chess app", "Create a todo app", "Create a docs app", "Create a base app"].map(
          (item, index) => (
            <button
              key={index}
              className="px-4 py-2 border rounded-md text-sm hover:bg-gray-200 mx-1"
            >
              {item}
            </button>
          )
        )}
    </div>
  );
}
