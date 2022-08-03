function fechar(div){
    document.getElementById(div).style.display = "none";
}

function entrada() {
    let cpf = document.getElementById("cpf").value;
    let senha = document.getElementById("senha").value;
    let vcpf = document.getElementById("valcpf");
    let vsenha = document.getElementById("valsenha");
    let vuse = document.getElementById('valuse');
    if (cpf == "") {
        vsenha.style.display = "none"
        vcpf.style.display = "block"
    }
    else if (senha == "") {
        vcpf.style.display = "none"
        vsenha.style.display = "block"
    }
    else {
        vcpf.style.display = "none"
        vsenha.style.display = "none"
        
        if (cpf == "111.111.111-11" && senha == "admin") {
            vuse.style.display = "none";
            location.href = 'portal_aluno.html';
        } 
        else {
            vuse.style.display = "block";
        }
    }
    return
}
function mascara_cpf(obj) {
    if(obj.value.length == 3) {
        obj.value += "."
    }
    if(obj.value.length == 7) {
        obj.value += "."
    }
    if(obj.value.length == 11) {
        obj.value += "-"
    }
}
function somente_numero(e) {
    tecla = (window.event)?event.keyCode:e.which;
    if((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla == 37) || (tecla == 39)) {
        return true;
    }
    else {
        return false;
    }
}
function salto(campo, digito) {
    if(digito.length > 13) {
        document.getElementById('senha').focus();
    }
    
}
function validacao() {
    if (cpf == "") {
        
    }
}
function mostrar() {
    let senha = document.getElementById("senha");
    let checkbox = document.getElementById("checkbox");
    if (checkbox.checked) {
        senha.type = "text"
    }
    else {
        senha.type = "password"
    }
}
function mascara_telefone(obj) {
    if(obj.value.length == 0) {
        obj.value += "("
    }
    if(obj.value.length == 3) {
        obj.value += ") "
    }
    if(obj.value.length == 10) {
        obj.value += "-"
    }
}

/* MATRICULA */
function matricula() {
let curso = document.getElementById("curso").value;
let nome = document.getElementById("nomemat").value;
let nascimento = document.getElementById("nascimento").value;
let cpf = document.getElementById("cpfmat").value;
let endereco = document.getElementById("endereco").value;
let email = document.getElementById("emailmat").value;
let telefone = document.getElementById("telefone").value;
let naturalidade = document.getElementById("naturalidade").value;
let escolaridade = document.getElementById("escolaridade").value;

let valcurso = document.getElementById("valcurso");
let valnome = document.getElementById("valnomematricula");
let valnascimento = document.getElementById("valnascimento");
let valcpf = document.getElementById("valcpfmatricula");
let valendereco = document.getElementById("valendereco");
let valemail = document.getElementById("valemailmatricula");
let valtelefone = document.getElementById("valtelefone");
let valnaturalidade = document.getElementById("valnaturalidade");
let valescolaridade = document.getElementById("valescolaridade");

if (curso == "nada") {
    valcurso.style.display = "block"
    valnome.style.display = "none"
    valnascimento.style.display = "none"
    valcpf.style.display = "none"
    valendereco.style.display = "none"
    valemail.style.display = "none"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "none";
}

else if (nome == "") {
    valcurso.style.display = "none"
    valnome.style.display = "block"
    valnascimento.style.display = "none"
    valcpf.style.display = "none"
    valendereco.style.display = "none"
    valemail.style.display = "none"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "none";
}

else if (nascimento == "") {
    valcurso.style.display = "none"
    valnome.style.display = "none"
    valnascimento.style.display = "block"
    valcpf.style.display = "none"
    valendereco.style.display = "none"
    valemail.style.display = "none"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "none";
}

else if (cpf == "") {
    valcurso.style.display = "none"
    valnome.style.display = "none"
    valnascimento.style.display = "none"
    valcpf.style.display = "block"
    valendereco.style.display = "none"
    valemail.style.display = "none"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "none";
}

else if (endereco == "") {
    valcurso.style.display = "none"
    valnome.style.display = "none"
    valnascimento.style.display = "none"
    valcpf.style.display = "none"
    valendereco.style.display = "block"
    valemail.style.display = "none"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "none";
}

else if (email == "") {
    valcurso.style.display = "none"
    valnome.style.display = "none"
    valnascimento.style.display = "none"
    valcpf.style.display = "none"
    valendereco.style.display = "none"
    valemail.style.display = "block"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "none";
}

else if (telefone == "") {
    valcurso.style.display = "none"
    valnome.style.display = "none"
    valnascimento.style.display = "none"
    valcpf.style.display = "none"
    valendereco.style.display = "none"
    valemail.style.display = "none"
    valtelefone.style.display = "block";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "none";
}

else if (naturalidade == "") {
    valcurso.style.display = "none"
    valnome.style.display = "none"
    valnascimento.style.display = "none"
    valcpf.style.display = "none"
    valendereco.style.display = "none"
    valemail.style.display = "none"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "block";
    valescolaridade.style.display = "none";
}
else if (escolaridade == "nada") {
    valcurso.style.display = "none"
    valnome.style.display = "none"
    valnascimento.style.display = "none"
    valcpf.style.display = "none"
    valendereco.style.display = "none"
    valemail.style.display = "none"
    valtelefone.style.display = "none";
    valnaturalidade.style.display = "none";
    valescolaridade.style.display = "block";
}
else {
    location.href = 'portal_aluno.html';
}
}
