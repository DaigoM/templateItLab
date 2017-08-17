'use strict';

//Avalia quais classes serão retiradas ou acrescentadas.
//Se for true, irá remover a classe de alert-danger e adicionar alert-success.
//Caso for false, o resultado será inverso.
$.fn.alertaMensagem = function(texto, alertaTipo){
	var classeParaAdd = (alertaTipo) ? 'alert-success' : 'alert-danger';

	$(this).removeClass().addClass('alert '+classeParaAdd).append($('<h5>', {
		text: texto
	}));

}

//Objeto que será o resultado das validações.
var resultado = {
		validado: false,
		texto: ''
};

//Validação do nome
//verifica se há mais de 5 caracteres, se tem nome e sobrenome e se há número.
var validaNome = function(nome){
	var resultado = false;

	if(nome.length > 5 && nome.trim().split(' ').length > 1){
		resultado = true;
		var caracteresInvalidos = [1,2,3,4,5,6,7,8,9,0];

		caracteresInvalidos.forEach(function(item){
			if(nome.indexOf(item) != -1) {
				resultado = false;
			}
		});
	}
	return resultado;
}

//Vai tratar os dados inseridos no campo 'Data de Nascimento'
var tratarDataNascimento = function(data){
	var divisoria, dataTratada;
	( data.indexOf('/') > -1 ) ? divisoria = '/' : ( data.indexOf('-') ) ? divisoria = '-' : divisoria = ' ';
	
	data = data.trim().split(divisoria);
	dataTratada = new Date(data[0], data[1]-1, data[2]);
	return dataTratada;

}

//Validação de data de nascimento
//verifica se há mais de 7 caracteres, se a data realmente é anterior que a data de hoje
var validaDataNascimento = function(data){
	if( data.length > 7 ){

		var dataTratada = tratarDataNascimento(data);
		
		if( ( new Date() ) >  dataTratada ){
		
			// resultado = {validado:true, texto: 'Data Valida'};
			return {validado:true, texto: 'Data Valida'};
		
		}else{
		
			// resultado = {validado:false, texto: 'A data inserida é uma data futura.'};
			return {validado:false, texto: 'A data inserida é uma data futura.'};
		
		}
		
	}else{

		// resultado = {validado:false, texto:'Digite a data completa'};
		return {validado:false, texto:'Digite a data completa'};
	
	}
	
	// resultado = {validado:false, texto: 'Data Invalida'};
	return {validado:false, texto: 'Data Invalida'};

}

var validaTelefone = function(){
	return true;
}

//Função que valida o email
//Divide o valor inserido em duas partes: uma é tudo que tiver antes do '@'(chamado de 'usuario'),
//E a outra é tudo que tiver depois(chamado de 'dominio').
var validaEmail = function(emailInserido){
	emailInserido = emailInserido.trim();
	var campoEmail = $('#alertaEmail');

	//Verifica se há '@' e '.' no valor.
	if( emailInserido.indexOf('@') > -1 && emailInserido.indexOf('.') > -1 && !(~emailInserido.search(' ')) ){
		var emailSeparado = emailInserido.split('@');
		
		//Verifica se há mais de 6 caracteres no usuario.
		if(emailSeparado[0].length > 6){
			
			//Verifica se há erro no dominio.
			if( (emailSeparado[1].length > 4)  		&&
				!(~emailSeparado[1].search('@')) 	&&
				!(~emailSeparado[1].search(' ')) 	&&
				(emailSeparado[1].indexOf('.')) > -1 ){

				return {validado: true, texto: 'Email Valido.'};
			
			}else{
			
				return {validado: false, texto: 'Verifique se existe algo errado depois do "@".'};				
			
			}
		
		}else{
		
			return {validado: false, texto: 'Digite mais de 6 caracteres antes do "@".'};
		
		}
	}

	return {validado: false, texto: 'Email Invalido.'};

}

var validaSalario = function(salario){
	if( !isNaN(salario) ){
		return true;
	}
	return false;
}

var validaGenero = function(genero){
	if(genero && (genero == 'm' || genero == 'f'))	
		return true;
	return false;
}

var validaContrato = function(tipo){
	if((tipo > 0) && (tipo < (dataBase.contratos.length+1)) )
		return true;
	return false;
}

var mostraMensagemNome = function(){
	$('#alertaNome').find('h5').remove();
	$('#form-usuario').parent().find('span.glyphicon').remove();
	
	if(validaNome($('#nome').val())){
	
		$('label[for="nome"]').parent().removeClass('has-error').addClass('has-success has-feedback');
		$('#alertaNome').alertaMensagem('Nome Valido.', true);
		$('#form-usuario').parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		
	}else{
	
		$('label[for="nome"]').parent().removeClass('has-success').addClass('has-error has-feedback');
		$('#alertaNome').alertaMensagem('Nome Invalido.', false);
		$('#form-usuario').parent().append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
	
	}
}

var mostraMensagemDataNascimento = function(){
	var resultadoDataNascimento = validaDataNascimento( $('#dataNascimento').val());
	
	$('#alertaDataNascimento').find('h5').remove();
	$('#form-dataNascimento').parent().find('span.glyphicon').remove();
	
	$('#alertaDataNascimento').alertaMensagem(resultadoDataNascimento.texto, (resultadoDataNascimento.validado) ? true : false);

	$('label[for="dataNascimento"]').parent().toggleClass('has-error has-feedback', !resultadoDataNascimento.validado).toggleClass('has-success has-feedback', resultadoDataNascimento.validado);

	if(resultadoDataNascimento.validado){
		$('#form-dataNascimento').parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');

	}else{

		$('#form-dataNascimento').parent().append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
	}

}

var mostraMensagemEmail = function(){
	var resultadoEmail = validaEmail( $('#email').val());
	
	$('#alertaEmail').find('h5').remove();
	$('#form-email').parent().find('span.glyphicon').remove();
	
	$('#alertaEmail').alertaMensagem(resultadoEmail.texto, (resultadoEmail.validado) ? true : false);

	$('label[for="email"]').parent().toggleClass('has-error has-feedback', !resultadoEmail.validado).toggleClass('has-success has-feedback', resultadoEmail.validado);

	if(resultadoEmail.validado){
		$('#form-email').parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');

	}else{

		$('#form-email').parent().append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
	}
}

var mostraMensagemGenero = function(){
	
	$('#alertaGenero').find('h5').remove();
	$('#form-genero').parent().find('span.glyphicon').remove();

	if( validaGenero( $('#genero:checked').val() ) ){
	
		$('label[for="genero"]').parent().removeClass('has-error').addClass('has-success has-feedback');
		$('#alertaGenero').alertaMensagem('Genero Valido.', true);
	
	}else{
	
		$('label[for="genero"]').parent().removeClass('has-success').addClass('has-error has-feedback');
		$('#alertaGenero').alertaMensagem('Selecione o genero.', false);
		
	}
}

var mostraMensagemContrato = function(){
	
	$('#alertaContrato').find('h5').remove();
	$('#form-contrato').parent().find('span.glyphicon').remove();

	if( validaContrato( $('#contrato').val() ) ){

		$('label[for="contrato"]').parent().removeClass('has-error').addClass('has-success has-feedback');
		$('#alertaContrato').alertaMensagem('Contrato Valido.', true);
		
	}else{
	
		$('label[for="Contrato"]').parent().removeClass('has-success').addClass('has-error has-feedback');
		$('#alertaContrato').alertaMensagem('Selecione o contrato.', false);
	
	}
}

var mostraMensagemSalario = function(){
	$('#alertaSalario').find('h5').remove();
	$('#form-salario').parent().find('span.glyphicon').remove();

	if( validaSalario( $('#salario').val() ) ){

		$('label[for="salario"]').parent().removeClass('has-error').addClass('has-success has-feedback');
		$('#alertaSalario').alertaMensagem('Salario Valido.', true);
		$('#form-salario').parent().append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');

	}else{

		$('label[for="salario"]').parent().removeClass('has-success').addClass('has-error has-feedback');
		$('#alertaSalario').alertaMensagem('Salario Invalido, digite apenas números.', false);
		$('#form-salario').parent().append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
	}
}

//Pseudo Banco de dados
window.dataBase ={
	contratos: [
		{codigo: 1,descricao:'Efetivo - CLT'},
		{codigo: 2,descricao:'Estagiario'},
		{codigo: 3,descricao:'Prestador de Servico - PJ'},
		{codigo: 4,descricao:'Autonomo'},
		{codigo: 5,descricao:'Temporario'}
	],
	beneficios:[
		{codigo:1,descricao:'Vale-Refeição'},
		{codigo:2,descricao:'Vale-Transporte'},
		{codigo:3,descricao:'Plano de Saúde'},
		{codigo:4,descricao:'Plano Odontologico'}
	],
	funcionarios: []
}

//Busca no localStorage o pseudo banco de dados como um objeto.
window.dataBase.funcionarios = JSON.parse(localStorage.getItem('dataBase'));

//Verifica se existe um funcionario
if(!window.dataBase.funcionarios){
	window.dataBase.funcionarios = [];
}

//Busca valores dos formularios
var buscaValorFormulario = function(){
	var formulario = {
		nome: $('#nome').val(),
		dataNascimento: $('#dataNascimento').val(),
		telefone: $('#telefone').val(),
		email: $('#email').val(),
		salario: $('#salario').val(),
		genero: $('#genero:checked').val(),
		contrato: $('#contrato').val(),
		beneficios: []
	};
	//Busca por cada campo selecionado para ser registrado.
	$('.beneficios:checked').each(function(){
		formulario.beneficios.push($(this).val());
	});
	//retorna com objeto com todo os valores do formulário.
	return formulario;
}

//Gerar um objeto funcionario
var gerarFuncionario = function(formulario, proximoId){
	var funcionario = {
		id: proximoId,
		nome: formulario.nome,
		dataNascimento: formulario.dataNascimento,
		telefone: formulario.telefone,
		email: formulario.email,
		salario: formulario.salario,
		contrato: formulario.contrato,
		genero: formulario.genero,
		beneficios: formulario.beneficios
	};
	return funcionario;
}	

//Create
$(document).ready(function(){
	//Adicionar primeiro item como 'Selecione...' no campo 'contrato'.
	$('#contrato').prepend($('<option>', { value:0,text:'Selecione...'}));
	//Busca por cada opção e cria no campo 'contrato' dinamicamente.
	$.each(dataBase.contratos, function (i, item) {
   		 $('#contrato').find('optgroup[label="Contrato"]').append($('<option>', { 
        	value: item.codigo,
        	text : item.descricao	 
    	}));
	});
	//Busca por itens do 'beneficios' e insere no HTML.
	dataBase.beneficios.forEach(function(item,i){
		 $("<div class='checkbox'><label><input class='beneficios' type='checkbox' value='"+item.codigo+"'>"+item.descricao+"</label></div>").appendTo('#containerBeneficios');
	});

	$('#salvar').on('click',function(){

		var formulario = buscaValorFormulario();
		var validado = true;

		if(validaNome(formulario.nome)){
			$('label[for="nome"]').parent().removeClass('has-error').addClass('has-success has-feedback');
		}else{
			validado = false;
			$('label[for="nome"]').parent().removeClass('has-success').addClass('has-success has-feedback');
		}

		var resultadoEmail = validaEmail(formulario.email);
		if(!resultadoEmail.validado){
			validado = false;
			mostraMensagemEmail();
		}

		var proximoId = window.dataBase.funcionarios ? window.dataBase.funcionarios.length : 1;

		var funcionario = gerarFuncionario(formulario, proximoId);

		window.dataBase.funcionarios.push(funcionario);
		$('.mensagem div').removeClass().addClass('alert alert-success').text('Dados incluidos com sucesso');
		$('.mensagem').fadeIn();

		localStorage.setItem('dataBase', JSON.stringify(window.dataBase.funcionarios));
		return validado;
		
	});

	//Alert Controls
	$('#nome').on('keyup blur', function(){
		mostraMensagemNome();
	});

	$('#email').on('keyup blur submit', function(){
		mostraMensagemEmail();
	});

	$('#genero').on('keyup blur', function(){
		mostraMensagemGenero();
	});

	$('#contrato').on('keyup blur', function(){
		mostraMensagemContrato();
	});

	$('#salario').on('keyup blur', function(){
		mostraMensagemSalario();
	});

	$('#dataNascimento').on('keyup blur', function(){
		mostraMensagemDataNascimento();
	});

});
