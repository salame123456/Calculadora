const Pi = 3.14
let isPiUsed = false

const input_raio = document.getElementById("input_raio")
const input_decimais = document.getElementById("input_decimais")
const input_pi = document.getElementById("input_pi")

const button = document.getElementById("button")

const text = document.getElementById("text")

const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")

function Circunferencia(raio, pi){
    const raio_num = Number(raio)
    const pi_num = Number(pi)

    let result = 2*Pi*raio_num

    if (Boolean(pi)){
        result = 2*pi_num*raio_num
        isPiUsed = false
        return result
    } else{
        isPiUsed = true
        return result
    }
}

function verificarPi(num){
    if (isPiUsed){
        return Pi
    } else{
        return num
    }
}

function decimais(num, d){
    const num_num = Number(num)
    const d_num = Number(d)

    const result = Math.trunc(num_num * 10**d_num) / 10**d_num

    if (Boolean(d)){
        return result
    } else{
        return num
    }
}

function enviar(){
    const circunferencia = Circunferencia(input_raio.value, input_pi.value)
    const pi_real = verificarPi(input_pi.value)

    const label1_text = `2 . ${pi_real} . ${input_raio.value}`
    const label2_text = `${ 2 * pi_real} . ${input_raio.value}`
    const label3_text = `${circunferencia}`

    text.textContent = `O valor da circunferência é ${decimais(circunferencia, input_decimais.value)}`

    label1.textContent = label1_text
    label2.textContent = label2_text
    label3.textContent = label3_text
}