export default function saveLocal(listObject){
  const list = listObject.getList();
  localStorage.clear();
  list.forEach(item => {
    const values = item.getValues();
    localStorage.setItem(`${values.index}`, JSON.stringify(values));
  });
}