// Variáveis necessárias para o funcionamento do código;
const taskList = document.querySelector('#lista-tarefas');
const textInput = document.querySelector('#texto-tarefa');
const newTaskBttn = document.querySelector('#criar-tarefa');
// Handler do listener de click dos itens;
function itemClickHandler(target) {
  const newSelected = target;
  const selected = document.querySelectorAll('.gray')[0];
  if (selected) {
    selected.classList.toggle('gray');
  }
  if (newSelected === selected) {
    return;
  }
  newSelected.classList.toggle('gray');
}
// Função que cria o novo item;
function itemGenerator() {
  const textValue = textInput.value;
  const newTask = document.createElement('li');
  newTask.innerText = textValue;
  taskList.appendChild(newTask);
  newTask.addEventListener('click', (e) => itemClickHandler(e.target));
}
// Handler do listener do botão "criar-tarefa"
function taskBttnHandler() {
  itemGenerator();
  textInput.value = '';
}
// Listener do botão "criar-tarefa";
const taskBttnListener = () => {
  newTaskBttn.addEventListener('click', taskBttnHandler);
};
// Listener do carregamento da página;
window.onload = () => {
  taskBttnListener();
};
