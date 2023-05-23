import createItem from './createItem';

export default function loadLocal(list){
  const loadedList = [];
  for(let i = 0; i < localStorage.length; i += 1){
    const loadedValues = JSON.parse(localStorage.getItem(`${i}`));
    if(loadedValues === null){ break; }
    const loadedItem = createItem(loadedValues.title, loadedValues.description, loadedValues.due, loadedValues.priority, loadedValues.complete);
    loadedList.push(loadedItem);
  }
  
  loadedList.forEach(item => { list.addItem(item); });
}