export default function createItem(title, description, due, priority, complete = false){
  const values = {
    title,
    description,
    due,
    priority,
    complete
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