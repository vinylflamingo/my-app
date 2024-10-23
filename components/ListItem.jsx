import { useState } from "react";

const ListItem = ({ item, updateListItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateListItem(item, updatedItem);
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    updateListItem(item, { ...item, isCompleted: !item.isCompleted });
  };

  const handleDelete = () => {
    updateListItem(item, { ...item, isDeleted: true });
  };

  if (item.isDeleted) {
    return null;
  }

  return (
    <div className="border p-4 mb-2 rounded">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={updatedItem.title}
            onChange={handleEditChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="description"
            value={updatedItem.description}
            onChange={handleEditChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
        </div>
      ) : (
        <div>
          <h3 className={`text-lg font-bold ${item.isCompleted ? "line-through" : ""}`}>
            {item.title}
          </h3>
          <p className={item.isCompleted ? "line-through" : ""}>{item.description}</p>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 mr-2 rounded">
            Edit
          </button>
          <button onClick={handleToggleComplete} className="bg-green-500 text-white p-2 mr-2 rounded">
            {item.isCompleted ? "Undo" : "Complete"}
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
