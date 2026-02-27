const input_m = document.getElementById("input_m")
const input_v = document.getElementById("input_v")
const input_d = document.getElementById("input_d")

const button = document.getElementById("button")

const text = document.getElementById("text")

const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const label4 = document.getElementById("label4")

function Ec(m, v){
    let ec = m * (v**2)/2
    return ec
}

function toTrunc(num, d){
   let num_num = Number(num)
   let d_num = Number(d)

   let result = Math.trunc((num_num * 10**d_num)) / 10**d_num

   if (Boolean(d)){
       return result 
   } else{
       return num 
   }
}

function enviar(){
    let ec = Ec(Number(input_m.value), Number(input_v.value))

    let label1_text = `${input_m.value} . ${input_v.value}² : 2`
    let label2_text = `${input_m.value} . ${input_v.value ** 2} : 2`
    let label3_text = `${input_m.value} . ${(input_v.value ** 2) / 2}`
    let label4_text = `${ec}`

    text.textContent = String(`${toTrunc(ec, input_d.value)} Joules`)

    label1.textContent = label1_text
    label2.textContent = label2_text
    label3.textContent = label3_text
    label4.textContent = label4_text
}