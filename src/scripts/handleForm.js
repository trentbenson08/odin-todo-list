import createItem from './createItem';

export default function handleForm(event) {
  event.preventDefault();


  const title = document.querySelector('#titleF').value;
  document.querySelector('#titleF').value = '';

  const description = document.querySelector('#descF').value;
  document.querySelector('#descF').value = '';

  const due = document.querySelector('#dueF').value;
  document.querySelector('#dueF').value = '';

  let priority;
  if(document.querySelector('#highF').checked){
    priority = 'high';
  }
  else{
    priority = 'regular';
  }
  document.querySelector('#regF').checked = true;

  const item = createItem(title, description, due, priority);

  return item;


}