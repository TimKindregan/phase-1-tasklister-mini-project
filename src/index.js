document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAddTask(e.target['new-task-description'].value);
    form.reset();
  })
});

function handleAddTask (task) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteTask)
  btn.textContent = ('x')
  p.textContent = `${task} `;
  p.appendChild(btn);
  document.querySelector('#list').appendChild(p);
}

function deleteTask (e) {
  e.target.parentNode.remove()
}