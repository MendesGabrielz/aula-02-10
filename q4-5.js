let computador = {

        marca: "positivo",
        processador: "intel3",
        memoria: "bemboa",
        hd: "muitogrande"

    }

function criarNo() {

    const marca = document.createElement("h1")
    marca.innerHTML = `${computador.marca}`

    const processador = document.createElement("h2")
    processador.innerHTML = `${computador.processador}`

    const memoria = document.createElement("h2")
    memoria.innerHTML = `${computador.memoria}`

    const hd = document.createElement("p")
    hd.innerHTML = `${computador.hd}`

    const divEl = document.createElement("div")
    divEl.classList.add("produto")
    divEl.appendChild(computador.marca)
    divEl.appendChild(computador.processador)
    divEl.appendChild(computador.memoria)
    divEl.appendChild(computador.hd)
    
    document.body.appendChild(divEl)

}

criarNo()
