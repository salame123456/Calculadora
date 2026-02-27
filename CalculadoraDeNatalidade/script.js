const input_pessoas = document.getElementById("input_pessoas")
const input_nascidos = document.getElementById("input_nascidos")
const input_decimais = document.getElementById("input_decimais")

const button = document.getElementById("button")

const text = document.getElementById("text")

const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")

function Natalidade(pA, n){
    let pA_num = Number(pA)
    let n_num = Number(n)

    let result = (n_num / pA_num) * 1000
    return result
}

function decimais(num, d){
    let num_num = Number(num)
    let d_num = Number(d)

    let result = Math.trunc(num_num * 10**d_num) / 10**d_num

    if (Boolean(d)){
        return result
    } else{
        return num
    }
}

function enviar(){
    let natalidade = Natalidade(input_pessoas.value, input_nascidos.value)

    let label1_text = `(${input_nascidos.value} : ${input_pessoas.value}) . 1000`
    let label2_text = `${input_nascidos.value / input_pessoas.value} . 1000`
    let label3_text = `${(input_nascidos.value / input_pessoas.value) * 1000}`

    text.textContent = `A cada 1000 pessoas, aproximadamente ${decimais(natalidade, input_decimais.value)} nascerão em 1 ano`

    label1.textContent = label1_text
    label2.textContent = label2_text
    label3.textContent = label3_text
}