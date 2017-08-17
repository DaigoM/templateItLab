"use strict";

var extrairId = function(){
    var link = window.location.href;
    var idTratado = link.split('?')[1].split('=')[1];

    return idTratado;
}

var insereValorFormulario = function(cadastro){
        $('#nome').val(cadastro.nome);
        $('#dataNascimento').val(cadastro.dataNascimento);
        $('#telefone').val(cadastro.telefone);
        $('#email').val(cadastro.email);
        $('#salario').val(cadastro.salario);
        $('#genero[value="'+ cadastro.genero +'"]').attr('checked', true);
        $('#contrato').find('option[value="'+ cadastro.contrato +'"]').attr('selected', true)
        // $('.beneficios[value="1"], .beneficios[value="2"]').attr('checked', true);
        $(cadastro.beneficios).each(function(index, item){
            $('.beneficios[value="'+ item +'"').attr('checked', true);
        });
    }

    $.fn.preencherFormulario = function(id){
        var cadastro = $(this)[id];
        insereValorFormulario(cadastro);
    };

//Update
$(document).ready(function(){
    var dataBase = JSON.parse(localStorage.getItem('dataBase'));
    var id;
    if(window.location.href.indexOf('?id=') > -1){
        id = extrairId();
        $(dataBase).preencherFormulario(id);

        $('#botoes').find('button').remove();
        var botaoAlterar = '<button type="button" class="btn btn-success" id="alterar" name="alterar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span>   Alterar</button>';
        var botaoVoltar = '<a href="tabela.html"><button type="button" class="btn btn-default" id="voltar" name="voltar">Voltar</button></a>';
        
        $('#botoes').append(botaoAlterar);
        $('#botoes').append(botaoVoltar);        
    
    }
    
    $('#alterar').on('click',function(){
        var funcionarioAlterado = dataBase.funcionario[id];
    });
});