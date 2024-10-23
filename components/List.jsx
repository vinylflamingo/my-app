import ListItem from "./ListItem";

const List = ({ todoList, updateListItem }) => {
  return (
    <div className="w-80 h-full flex flex-col">
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <ListItem key={item.id} item={item} updateListItem={updateListItem} />
        ))
      ) : (
        <p>No todo items</p>
      )}
    </div>
  );
};

export default List;
