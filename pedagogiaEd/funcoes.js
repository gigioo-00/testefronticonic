document.addEventListener('DOMContentLoaded', () => {
    const btnEditar = document.getElementById('btn-editar');
    const btnDeletar = document.getElementById('btn-deletar');
    const btnConfirmar = document.getElementById('btn-confirmar');
    const inputData = document.getElementById('data-aviso');
    const textareaConteudo = document.getElementById('texto-aviso');

    btnEditar.addEventListener('click', () => {
        inputData.removeAttribute('disabled');
        textareaConteudo.removeAttribute('disabled');
        textareaConteudo.focus();
        alert("Modo de edição ativado! Faça suas alterações.");
    });

    btnDeletar.addEventListener('click', () => {
        if (confirm("Tem certeza que deseja excluir o conteúdo deste aviso?")) {
            inputData.value = '';
            textareaConteudo.value = '';
            inputData.setAttribute('disabled', 'true');
            textareaConteudo.setAttribute('disabled', 'true');
        }
    });

    btnConfirmar.addEventListener('click', () => {
        inputData.setAttribute('disabled', 'true');
        textareaConteudo.setAttribute('disabled', 'true');
        alert("Modificações salvas com sucesso!");
    });
});