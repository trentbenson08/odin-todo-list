export default function createItem(title, description, due, priority){
  const values = {
    title,
    description,
    due,
    priority,
    complete: false,
    index: undefined
  };

  const editValue = (key, value) => {
    values[key] = value;
  };

  const getValues = () => values;
  
  return{
    editValue,
    getValues
  };
}