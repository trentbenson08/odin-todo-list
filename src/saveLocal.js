export default function saveLocal(list){
  list.forEach(item => {
    const values = item.getValues();
    localStorage.setItem(`${values.title}`, JSON.stringify(values));
  });
}