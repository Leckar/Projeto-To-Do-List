// Variáveis necessárias para o funcionamento do código;
const taskList = document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');
// Handler do botão "salvar-tarefas";
function saveHandler() {
  const data = taskList.innerHTML;
  console.log(data);
  localStorage.setItem('list', JSON.stringify(data));
  console.log(localStorage.getItem('list'));
}
// Listener do botão "salvar-tarefas";
const saveListener = () => {
  const save = document.querySelector('#salvar-tarefas');
  save.addEventListener('click', saveHandler);
};
// Função que carrega o local storage;
function loadStorage() {
  if (localStorage.getItem('list')) {
    const reload = JSON.parse(localStorage.getItem('list'));
    console.log(reload);
    taskList.innerHTML = reload;
  }
}
// Handler do botão "mover-cima";
function moveUpHandler() {
  const target = document.querySelector('.gray');
  if (!target) {
    return;
  }
  const targetContent = target.innerHTML;
  const previous = target.previousElementSibling;
  if (!previous) {
    return;
  }
  const previousContent = previous.innerHTML;
  previous.innerHTML = targetContent;
  target.innerHTML = previousContent;
  target.classList.toggle('gray');
  previous.classList.toggle('gray');
}
// Listener do botão "mover-cima";
const moveUpListener = () => {
  const moveUp = document.querySelector('#mover-cima');
  moveUp.addEventListener('click', moveUpHandler);
};
// Handler do botão "mover-baixo";
function moveDownHandler() {
  const target = document.querySelector('.gray');
  if (!target) {
    return;
  }
  const targetContent = target.innerHTML;
  const next = target.nextElementSibling;
  if (!next) {
    return;
  }
  const nextContent = next.innerHTML;
  next.innerHTML = targetContent;
  target.innerHTML = nextContent;
  target.classList.toggle('gray');
  next.classList.toggle('gray');
}
// Listener do botão "mover-baixo";
const moveDownListener = () => {
  const moveDown = document.querySelector('#mover-baixo');
  moveDown.addEventListener('click', moveDownHandler);
};
// Handler do botão "remover-selecionado";
function clrSelectedHandler() {
  const selectedTask = document.querySelector('.gray');
  selectedTask.parentElement.removeChild(selectedTask);
}
// Listener do botão "remover-selecionado";
const clrSelectedListener = () => {
  const clrSelected = document.querySelector('#remover-selecionado');
  clrSelected.addEventListener('click', clrSelectedHandler);
};
// Handler do botão "remover-finalizados";
function clrCompletedHandler() {
  const completeTasks = document.querySelectorAll('.completed');
  completeTasks.forEach((element) => {
    element.parentElement.removeChild(element);
  });
}
// Listener do botão "remover-finalizados";
const clrCompletedListener = () => {
  const clrCompleted = document.querySelector('#remover-finalizados');
  clrCompleted.addEventListener('click', clrCompletedHandler);
};
// Handler do click duplo dos itens;
function itemDblClickHandler(element) {
  const newCompleted = element.target;
  newCompleted.classList.toggle('completed');
}
// Handler do click dos itens;
function itemClickHandler(element) {
  const newSelected = element.target;
  const selected = document.querySelectorAll('.gray')[0];
  if (selected) {
    selected.classList.toggle('gray');
  }
  // if (newSelected === selected) {
  //   return;
  // }
  newSelected.classList.toggle('gray');
}
// Função que cria os listeners do item;
function itemListeners(task) {
  const target = task;
  target.addEventListener('dblclick', itemDblClickHandler);
  target.addEventListener('click', itemClickHandler);
}
// Função que cria o novo item;
function itemGenerator() {
  const textValue = textInput.value;
  const newTask = document.createElement('li');
  newTask.innerText = textValue;
  taskList.appendChild(newTask);
  itemListeners(newTask);
}
// Handler do listener do botão "criar-tarefa"
function taskBttnHandler() {
  itemGenerator();
  textInput.value = '';
}
// Listener do botão "criar-tarefa";
const taskBttnListener = () => {
  const newTaskBttn = document.querySelector('#criar-tarefa');
  newTaskBttn.addEventListener('click', taskBttnHandler);
};
// Handler do botão "apaga-tudo";
function clrListHandler() {
  taskList.innerHTML = '';
}
// Listener do botão "apaga-tudo";
const clrListListener = () => {
  const clrList = document.querySelector('#apaga-tudo');
  clrList.addEventListener('click', clrListHandler);
};
// Listener do carregamento da página;
window.onload = () => {
  taskBttnListener();
  clrListListener();
  clrSelectedListener();
  clrCompletedListener();
  moveUpListener();
  moveDownListener();
  loadStorage();
  saveListener();
};
