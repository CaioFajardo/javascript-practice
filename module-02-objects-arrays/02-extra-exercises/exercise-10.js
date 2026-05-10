function printTitulo(titulo) {
    console.log("\n==============================")
    console.log(titulo)
    console.log("==============================")
}

// Nível 1

const computadorNivel1 = {
    cpu: "Ryzen 5 5600",
    gpu: "RX 6600",
    ram: "16 GB",
    ssd: "NVME",
    font: "650w"
}

const { gpu } = computadorNivel1

const { cpu: processador } = computadorNivel1

const { gabinete = "Padrão" } = computadorNivel1

printTitulo("NÍVEL 1")

console.log(gpu)
console.log(processador)
console.log(gabinete)