"use strict";

//Read
$(document).ready(function(){
	if (!String.prototype.format) {
		String.prototype.format = function() {
			var args = arguments;
			return this.replace(/{(\d+)}/g, function(match, number) { 
				return typeof args[number] != 'undefined'
				? args[number]
				: match
				;
			});
		};
	}

	var exibiContratoTratado = function(contrato){
		var contratoTratado = {
			1:'Efetivo - CLT',
			2:'Estagiário',
			3:'Prestador de Servico - PJ',
			4:'Autónomo',
			5:'Temporário'
		}[contrato];
		return contratoTratado;
	}

	var exibirGeneroTratado = function(genero){
		var generoTratado;
        (genero == 'm') ? generoTratado = 'Masculino' : generoTratado = 'Feminino';
		return generoTratado;
	}

	var dataBase = JSON.parse(localStorage.getItem('dataBase'));

	var linhaTemplate = "<tr><td scope='row'>{0}</td><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td><td class='text-center'><a href='cadastro.html?id={5}'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span></a></td></tr>";

	$(dataBase).each(function(){
        var funcionario = $(this)[0];
		funcionario.genero = exibirGeneroTratado(funcionario.genero);
		funcionario.contrato = exibiContratoTratado(funcionario.contrato);
		var result = linhaTemplate.format(funcionario.nome,funcionario.dataNascimento,funcionario.telefone,funcionario.genero,funcionario.contrato, funcionario.id);
		$("#linhaResultado").append(result);
    });

	//Verifica a quantidade de linhas do resultado e exibe-as.
    var quantidadeTotal = '<p><h6>No total de <strong id="tabelaTotalFuncionarios">{0}</strong> {1}.</h6></p>';
	if(!dataBase){
		var resultado = '<p><h6>Não há registros de funcionários.</h6></p>';		
	}else{
		var quantidade = dataBase.length;
		var verificaPlural = (quantidade > 1) ? 'funcionários' : 'funcionário';
		var resultado = quantidadeTotal.format(quantidade,verificaPlural);
	}
    $('.panel-footer').append(resultado);
});