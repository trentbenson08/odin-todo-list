export default function createList(){
  const list = [];

  // Takes an object, pushes it to the list and returns the index where the item
  const addItem = (todoItem) => {
    const itemIndex = list.push(todoItem) - 1;
    list[itemIndex].getValues().index = itemIndex;
  };


  // Takes unique ID from data-index finds it in the list
  const deleteItem = (index) => {
    list.splice(index, 1);
  };

  const getList = () => list;

  return {
    addItem,
    deleteItem,
    getList
  };
};