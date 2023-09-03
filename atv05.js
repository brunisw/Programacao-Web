const alunos = []; 

while (true) {
  console.log("\nMenu de Opções:");
  console.log("1. Cadastrar Aluno");
  console.log("2. Cadastrar Notas");
  console.log("3. Exibir Boletim");
  console.log("4. Sair");

  const opcao = prompt("Escolha uma opção:");

  switch (opcao) {
    case "1":
      const nomeAluno = prompt("Digite o nome do aluno:");
      alunos.push({ nome: nomeAluno, notas: [] });
      console.log(`Aluno ${nomeAluno} cadastrado com sucesso!`);
      break;

    case "2":
      const nomeAlunoNotas = prompt("Digite o nome do aluno para cadastrar notas:");
      const aluno = alunos.find((a) => a.nome === nomeAlunoNotas);

      if (aluno) {
        for (let i = 1; i <= 3; i++) {
          const nota = parseFloat(prompt(`Digite a nota ${i} para ${nomeAlunoNotas}:`));
          aluno.notas.push(Math.round(nota));
        }
        console.log(`Notas cadastradas para ${nomeAlunoNotas}.`);
      } else {
        console.log(`Aluno ${nomeAlunoNotas} não encontrado.`);
      }
      break;

    case "3":
      const nomeAlunoBoletim = prompt("Digite o nome do aluno para exibir o boletim:");
      const alunoBoletim = alunos.find((a) => a.nome === nomeAlunoBoletim);

      if (alunoBoletim) {
        const notasArredondadas = alunoBoletim.notas.map((nota) => Math.round(nota));
        const media = Math.round(
          notasArredondadas.reduce((acc, nota) => acc + nota, 0) / notasArredondadas.length
        );

        let status;
        if (media >= 7) {
          status = "Aprovado";
        } else if (media >= 5) {
          status = "Em Recuperação";
        } else {
          status = "Reprovado";
        }

        console.log(`Nome: ${alunoBoletim.nome}`);
        console.log(`Notas: ${notasArredondadas.join(", ")}`);
        console.log(`Média: ${media}`);
        console.log(`Status: ${status}`);
      } else {
        console.log(`Aluno ${nomeAlunoBoletim} não encontrado.`);
      }
      break;

    case "4":
      console.log("Encerrando o programa.");
      return;

    default:
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
}