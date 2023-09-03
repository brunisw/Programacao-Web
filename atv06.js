const biblioteca = [];

function cadastrarLivro() {
  const titulo = prompt("Digite o título do livro:");
  const autor = prompt("Digite o autor do livro:");
  const livro = {
    id: biblioteca.length + 1,
    titulo,
    autor,
    emprestado: false,
  };
  biblioteca.push(livro);
  console.log(`Livro "${titulo}" cadastrado com sucesso.`);
}

function alterarLivro() {
  const id = parseInt(prompt("Digite o ID do livro que deseja alterar:"));
  const livro = biblioteca.find((livro) => livro.id === id);

  if (livro) {
    const novoTitulo = prompt("Digite o novo título do livro (ou pressione Enter para manter o mesmo):");
    const novoAutor = prompt("Digite o novo autor do livro (ou pressione Enter para manter o mesmo):");

    if (novoTitulo) {
      livro.titulo = novoTitulo;
    }

    if (novoAutor) {
      livro.autor = novoAutor;
    }

    console.log(`Livro ID ${id} alterado com sucesso.`);
  } else {
    console.log(`Livro com ID ${id} não encontrado.`);
  }
}

function deletarLivro() {
  const id = parseInt(prompt("Digite o ID do livro que deseja deletar:"));
  const index = biblioteca.findIndex((livro) => livro.id === id);

  if (index !== -1) {
    const titulo = biblioteca[index].titulo;
    biblioteca.splice(index, 1);
    console.log(`Livro "${titulo}" deletado com sucesso.`);
  } else {
    console.log(`Livro com ID ${id} não encontrado.`);
  }
}

function realizarEmprestimo() {
  const id = parseInt(prompt("Digite o ID do livro que deseja emprestar:"));
  const livro = biblioteca.find((livro) => livro.id === id);

  if (livro) {
    if (!livro.emprestado) {
      livro.emprestado = true;
      console.log(`Livro ID ${id} emprestado com sucesso.`);
    } else {
      console.log(`O livro ID ${id} já está emprestado.`);
    }
  } else {
    console.log(`Livro com ID ${id} não encontrado.`);
  }
}

while (true) {
  console.log("\nMenu de Opções:");
  console.log("1. Cadastrar Livro");
  console.log("2. Alterar Livro");
  console.log("3. Deletar Livro");
  console.log("4. Realizar Empréstimo de Livro");
  console.log("5. Sair");

  const opcao = prompt("Escolha uma opção:");

  switch (opcao) {
    case "1":
      cadastrarLivro();
      break;

    case "2":
      alterarLivro();
      break;

    case "3":
      deletarLivro();
      break;

    case "4":
      realizarEmprestimo();
      break;

    case "5":
      console.log("Encerrando o programa.");
      return;

    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
}