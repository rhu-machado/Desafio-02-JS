let idade = 20
let humano = true

if (idade >= 18){
    console.log('Agora você atingiu maior idade!')
}else{
    console.log('Você ainda tem um tempo até atingir maior idade')
}

if(idade >= 18 && humano == true){
    console.log('Olá, humano adulto')
}

let mes = 'Dezembro'

if (mes == 'Janeiro' || mes == 'Dezembro'){
    console.log('Infelizmente você não ganha dois presentes')
}else{
    console.log('Vai ganhar dois presentes')
}

let nome = 'Rhuan'
let sobrenome = 'Machado'

if(nome[0] == 'R'){
    console.log('O Cebolinha vai erra seu nome')
}else{
    console.log('Talvez o Cebolinha não erre seu nome')
}

if (sobrenome.length >= 6 || nome[0] == 'E'){
    console.log('Gostei do seu sobrenome')
}