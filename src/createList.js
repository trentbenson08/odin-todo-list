export default function createDatabase(){
  const database = [];

  // Takes an object, pushes it to the database and returns the index where the item
  const addItem = (todoItem) => {
    const itemIndex = database.push(todoItem) - 1;
    return itemIndex;
  };


  // Takes unique ID from data-index finds it in the database
  const deleteItem = (index) => {
    database.splice(index, 1);
  };

  const getList = () => database;

  return {
    addItem,
    deleteItem,
    getList
  };
};