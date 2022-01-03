
let pessoaNome = ['Leonardo','Marcos','João'];
let pessoaProf = ['Desenvolvedor','Analista de Sistemas','Bancário'];

const novaPessoa = document.getElementById("newName");
const novoEmprego = document.getElementById("newJob");

showList();

// Função Adicionar novas Pessoas
function adicionar() {
    if (novaPessoa.value == "" || novoEmprego.value == "") {
        if (novaPessoa.value == "") {
            novaPessoa.style.backgroundColor = "#FFB5A0"
        }
        if (novoEmprego.value == "") {
            novoEmprego.style.backgroundColor = "#FFB5A0"
        }
        alert("Insira dados para Cadastro");        
    }
    else {
        pessoaNome.push(novaPessoa.value);
        pessoaProf.push(novoEmprego.value);
        novaPessoa.value = "";
        novoEmprego.value = "";
        alert('Pessoa Adicionada com Sucesso');
        novaPessoa.style.backgroundColor = "white"
        novoEmprego.style.backgroundColor = "white"
        showList();
}
}

// Função Mostrar Lista de Pessoas com indexadores
function showList() {
let listItems = ""
document.getElementById('list').innerHTML = ""
for (let i = 0 ; i < (pessoaNome.length) ; i++) {
        let a = document.getElementById('list')
        a.innerHTML += `<li>${pessoaNome[i]}</li><br>`
    }   
}

// Função Chamar Dados das Pessoas
function insDadosPes() {
    var x = document.getElementById('nrOrdem').value;
    if (x > pessoaNome.length) {
        alert('Insira um valor válido constante na Lista')
        return
    }
    if (x - 1 >= 0) {
    escrever('dPes',pessoaNome[x - 1]);
    escrever('dProf',pessoaProf[x - 1]);
    }
    else {
    apagaDados();
}
}

// Função para apagar Dados Mostrados
function apagaDados() {
    document.getElementById("dPes").innerHTML = "";
    document.getElementById('dProf').innerHTML = "";
}
// Função para Imprimir
function escrever(id, texto) {
    switch (id) {
        case "dPes":
        document.getElementById(id).innerHTML = "Nome: " + texto;
        document.getElementById('nrOrdem').value = "";
        break;
        case "dProf":
        document.getElementById(id).innerHTML = "Profissão: " + texto;
        document.getElementById('nrOrdem').value = "";
        x = "";
        break;
    }
}



function brownTheme() {
    document.body.classList.remove('change-yellow');
    document.body.classList.add('change-brown');
}
function yellowTheme() {
    document.body.classList.remove('change-brown');
    document.body.classList.add('change-yellow');
}
function greenTheme() {
    document.body.classList.remove('change-brown');
    document.body.classList.remove('change-yellow');
    document.body.classList.add(':root');
}



/*
let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () =>{

    themeToggler.classList.toggle('active');

    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

}

document.querySelectorAll('.theme-colors .color').forEach(color =>{
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--main-color', background);
    }
}); 

let theme = document.querySelector('.themes-container');

document.querySelector('#theme-open').onclick = () =>{
    theme.classList.add('active');
    document.body.style.paddingRight = '350px';
}

document.querySelector('#theme-close').onclick = () =>{
    theme.classList.remove('active');
    document.body.style.paddingRight = '0px';
} */