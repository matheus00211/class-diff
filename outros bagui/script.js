const modal = document.getElementById('modal'); // add tarefas
const btnAbrirModal = document.getElementById('abrir-modal'); // abre o modal
const btnFecharModal = document.querySelector('.fechar-modal'); // fecha o modal (o "X" do canto superior direito)
const inputTarefa = document.getElementById('nova-tarefa'); // input para adicionar nova tarefa
const btnAdicionarTarefa = document.getElementById('adicionar-tarefa'); // botão para adicionar nova tarefa

// lista para cada fase
const listaPendentes = document.getElementById('tarefas-pendentes');
const listaAndamento = document.getElementById('tarefas-andamento');
const listaProgresso = document.getElementById('tarefas-progresso');
const listaConcluidas = document.getElementById('tarefas-concluidas');

// abrir modal
btnAbrirModal.addEventListener('click', function() {
  modal.style.display = 'flex';
});

// fechar modal quando o X é clicado
btnFecharModal.addEventListener('click', function() {
  modal.style.display = 'none'; // modal é escondido
});

// adicionar tarefa
btnAdicionarTarefa.addEventListener('click', function() {
  const tarefaTexto = inputTarefa.value; // pega valor digitado no input (nome da tarefa)
  
  // Adiciona a tarefa à lista de pendentes, se não estiver vazia
  if (tarefaTexto.trim() !== '') {
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = tarefaTexto;
    listaPendentes.appendChild(novaTarefa); // adiciona a nova tarefa à lista de pendentes
    inputTarefa.value = ''; // limpa o campo de input
    modal.style.display = 'none'; // fecha o modal
  } else {
    alert('Por favor, insira uma tarefa!'); // alerta se o campo estiver vazio
  }
});
