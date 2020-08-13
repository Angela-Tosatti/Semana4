document.getElementById('salvar').addEventListener('click', () => {
    event.preventDefault()
    if (document.querySelectorAll(':invalid').length > 0) {
        alert("Alguns campos não foram preenchidos.");

        vcpf(document.getElementById('cpf'))
        vrg(document.getElementById('rg'))
        vcep(document.getElementById('cep'))
    } else {
        const fields = {
            "nome": formulario.nfunc.value,
            "CPF": formulario.cpf.value,
            "RG": formulario.rg.value,
            "data_nasc": formulario.dnasc.value,
            "tipo_cnh": formulario.cnh.value,
            "estado_civil": formulario.ecivil.value,
            "CEP": formulario.cep.value,
            "rua": formulario.rua.value,
            "bairro": formulario.bairro.value,
            "cidade": formulario.cid.value,
            "estado": formulario.est.value,
            "numero": formulario.num.value,
            "complemento": formulario.compl.value
        }

        const obj = JSON.stringify(fields);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://beginner-api.herokuapp.com/save");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const retorno = JSON.parse(xhr.responseText);
                if (retorno.Sucesso != undefined) {
                    alert("Efetuado com Sucesso!");
                } else {
                    alert("ERRO! Verifique os dados!");
                }
            }
        }
        xhr.send(obj);
    }

})

function fcpf(element) {
    if (element.value.length == 3 || element.value.length == 7) {
        element.value += "."
    } else if (element.value.length == 11) {
        element.value += "-"
    }
}

function frg(element) {
    if (element.value.length == 2 || element.value.length == 6) {
        element.value += "."
    } else if (element.value.length == 10) {
        element.value += "-"
    }
}

function fcep(element) {
    if (element.value.length == 5) {
        element.value += "-"
    }
}

function vcpf(element) {
    if (element.value.length < 14) {
        alert('CPF Inválido')
    }
}

function vrg(element) {
    if (element.value.length < 12) {
        alert('RG Inválido')
    }
}

function vcep(element) {
    if (element.value.length < 9) {
        alert('CEP Inválido')
    }
}

function BuscaCep() {

    var req = new XMLHttpRequest
    req.open("GET", "https://viacep.com.br/ws/" + document.getElementById('cep').value + "/json/unicode/", true)
    req.send();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var obj = JSON.parse(this.responseText)
            document.getElementById('est').value = obj.uf
            document.getElementById('bairro').value = obj.bairro
            document.getElementById('cid').value = obj.localidade
            document.getElementById('rua').value = obj.logradouro
        }
    }
}

document.getElementById('cep').addEventListener("change", BuscaCep)