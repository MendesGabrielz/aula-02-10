let aluno1 = {

    nome: "Luiz",
    nota: "100"
}

let aluno2 = {

    nome: "Gabriel",
    nota: "10"
}

let aluno3 = {

    nome: "Lucas",
    nota: "8"
}

let alunos = [aluno1, aluno2, aluno3]

for (let i = 0; i <= 2; i++) {


    const elementoCriado2 = document.createElement("h1")
    elementoCriado2.innerHTML = `${alunos[i].nome}`
    Oi.appendChild(elementoCriado2)

    const elementoCriado = document.createElement("p")
    elementoCriado.innerHTML = `${alunos[i].nota}`
    Oi.appendChild(elementoCriado)
}
