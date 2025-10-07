let aluno1 = {
    nome: "Luiz",
    nota: "10",

}

let aluno2 = {
    nome: "Lucas",
    nota: "2",

}

let aluno3 = {
    nome: "Gabriel",
    nota: "7",

}

let alunos = [aluno1, aluno2, aluno3]


function exibiralunos() {


    for (i = 0; i <= 2; i++) {

        const divALunos = document.createElement("div")
        divALunos.classList.add("Aluno")

        const nomeElemento = document.createElement("h3");
        nomeElemento.innerText = alunos[i].nome;
        divALunos.appendChild(nomeElemento);

        const notaElemento = document.createElement("p");
        notaElemento.innerText = alunos[i].nota;
        divALunos.appendChild(notaElemento);

        document.body.appendChild(divALunos)



    }

    const div = document.getElementsByClassName("Aluno")
    for (let i = 0; i < div.length; i++) {
        div[i].style.border = "1px solid blue";
    }

}

exibiralunos()
