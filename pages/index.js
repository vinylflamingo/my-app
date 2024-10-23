import Form from "@/components/Form";
import List from "@/components/List"
import { useState } from "react";

export default function Home() {
  const [todoMap, setTodoMap] = useState(new Map());

  const addToList = (formData) => {
    const newItem = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      isCompleted: formData.isCompleted,
      isDeleted: formData.isDeleted,
    };

    setTodoMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(newItem.id, newItem);
      return newMap;
    });
  };

  const updateListItem = (currentItem, updatedItem) => {
    setTodoMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(currentItem.id, { ...currentItem, ...updatedItem });
      console.log(newMap);
      return newMap;
    });
  };

  const todoList = Array.from(todoMap.values());

  return (
    <div className="h-screen flex flex-col items-center justify-center mt-20">
        <h1>Cracker Barrel Code Test</h1>
        <Form addToList={addToList} />
        <List todoList={todoList} updateListItem={updateListItem} />
    </div>
  );
}
