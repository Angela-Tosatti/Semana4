document.getElementById('salvar').addEventListener('click', () => {
    if (document.querySelectorAll(':invalid').length > 0) {
        alert("Alguns campos não foram preenchidos.")
    }
})

vcpf (document.getElementById('cpf'))
vrg (document.getElementById('rg'))
vcep (document.getElementById('cep'))

function fcpf(element){
    if(element.value.length==3||element.value.length==7){
        element.value += "."
    }else if(element.value.length==11){
        element.value += "-"
    }
}

function frg(element){
    if(element.value.length==2||element.value.length==6){
        element.value += "."
    }else if(element.value.length==10){
        element.value += "-"
    }
}

function fcep(element){
    if(element.value.length==5){
        element.value += "-"
    }
}

function vcpf(element){
    if(element.value.length<14){
        alert('CPF Inválido')
    }
}

function vrg(element){
    if(element.value.length<12){
        alert('CPF Inválido')
    }
}

function vcep(element){
    if(element.value.length<9){
        alert('CPF Inválido')
    }
}


