function testaValidaNome(){
	(function testaValidaNome_sucesso1_nome_completo(){
		if(validaNome('Marcelo Neias'))
			console.log('testaValidaNome_sucesso1_nome_completo: ok');
		else
			console.log('testaValidaNome_sucesso1_nome_completo: não ok');
	})();

	(function testaValidaNome_falha1_apenas_nome(){
		if(!validaNome('Marcelo'))
			console.log('testaValidaNome_falha1_apenas_nome: ok');
		else
			console.log('testaValidaNome_falha1_apenas_nome: não ok');
	})();

	(function testaValidaNome_falha2_nome_espaco(){
		if(!validaNome('Marcelo '))
			console.log('testaValidaNome_falha2_nome_espaco: ok');
		else
			console.log('testaValidaNome_falha2_nome_espaco: não ok');
	})();

	(function testaValidaNome_falha3_espaco_nas_pontas(){
		if(!validaNome('  Marcelo '))
			console.log('testaValidaNome_falha3_espaco_nas_pontas: ok');
		else
			console.log('testaValidaNome_falha3_espaco_nas_pontas: não ok');
	})();

	(function testaValidaNome_falha4_apenas_um_espaco(){
		if(!validaNome(''))
			console.log('testaValidaNome_falha4_apenas_um_espaco: ok');
		else
			console.log('testaValidaNome_falha4_apenas_um_espaco: não ok');
	})();

	(function testaValidaNome_falha5_apenas_espacos(){
		if(!validaNome('	'))
			console.log('testaValidaNome_falha5_apenas_espacos: ok');
		else
			console.log('testaValidaNome_falha5_apenas_espacos: não ok');
	})();

	(function testaValidaNome_falha6_poucos_caracteres(){
		if(!validaNome('AB S'))
			console.log('testaValidaNome_falha6_poucos_caracteres: ok');
		else
			console.log('testaValidaNome_falha6_poucos_caracteres: não ok');
	})();

	(function testaValidaNome_falha7(){
		if(!validaNome('luan alves1'))
			console.log('testaValidaNome_falha7: ok');
		else
			console.log('testaValidaNome_falha7: não ok');
	})();

	(function testaValidaNome_sucesso2(){
		if(validaNome('vjcdsbc     ckjsdbcjsd      csdjbkbcsd'))
			console.log('testaValidaNome_sucesso2: ok');
		else
			console.log('testaValidaNome_sucesso2: não ok');
	})();
}

function testaValidaDataNascimento(){
	(function testaValidaDataNascimento_sucesso1_barra(){
		if(validaDataNascimento('16/07/1995'))
			console.log('testaValidaDataNascimento_sucesso1_barra: ok');
		else
			console.log('testaValidaDataNascimento_sucesso1_barra: não ok');
	})();

	(function testaValidaDataNascimento_sucesso2_traco(){
		if(validaDataNascimento('16-07-1995'))
			console.log('testaValidaDataNascimento_sucesso2_traco: ok');
		else
			console.log('testaValidaDataNascimento_sucesso2_traco: não ok');
	})();

	(function testaValidaDataNascimento_sucesso3_espaco(){
		if(validaDataNascimento('16 07 1995'))
			console.log('testaValidaDataNascimento_sucesso3_espaco: ok');
		else
			console.log('testaValidaDataNascimento_sucesso3_espaco: não ok');
	})();

	(function testaValidaDataNascimento_falha1_faltaCaracteres(){
		if(validaDataNascimento('16/07'))
			console.log('testaValidaDataNascimento_falha1_faltaCaracteres: ok');
		else
			console.log('testaValidaDataNascimento_falha1_faltaCaracteres: não ok');
	})();

	(function testaValidaDataNascimento_falha2_ordemErrada(){
		if(validaDataNascimento('1995/07/16'))
			console.log('testaValidaDataNascimento_falha2_ordemErrada: ok');
		else
			console.log('testaValidaDataNascimento_falha2_ordemErrada: não ok');
	})();
}

function testaValidaTelefone(){
	(function testaValidaTelefone_sucesso1(){
		if(validaTelefone('(11) 1234-5678'))
			console.log('testaValidaTelefone_sucesso1: ok');
		else
			console.log('testaValidaTelefone_sucesso1: não ok');
	})();

	(function testaValidaTelefone_sucesso2_espaco(){
		if(validaTelefone('(11) 1234 - 5678'))
			console.log('testaValidaTelefone_sucesso2_espaco: ok');
		else
			console.log('testaValidaTelefone_sucesso2_espaco: não ok');
	})();

	(function testaValidaTelefone_sucesso3_sem_linha(){
		if(validaTelefone('(11) 12345678'))
			console.log('testaValidaTelefone_sucesso3_sem_linha: ok');
		else
			console.log('testaValidaTelefone_sucesso3_sem_linha: não ok');
	})();

	(function testaValidaTelefone_falha1_letras(){
		if(!validaTelefone('(gf) asdfasdfs'))
			console.log('testaValidaTelefone_falha1_letras: ok');
		else
			console.log('testaValidaTelefone_falha1_letras: não ok');
	})();
}

function testaValidaGenero(){
	(function testaValidaGenero_sucesso1_radio_selecionado(){
		if(validaGenero('m'))
			console.log('testaValidaGenero_sucesso1_radio_selecionado: ok');
		else
			console.log('testaValidaGenero_sucesso1_radio_selecionado: nw ok');
	})();
	(function testaValidaGenero_falha1_radio_nw_selecionado(){
		if(!validaGenero(undefined))
			console.log('testaValidaGenero_falha1_radio_nw_selecionado: ok');
		else
			console.log('testaValidaGenero_falha1_radio_nw_selecionado: nw ok');
	})();
	(function testaValidaGenero_falha2_radio_nw_selecionado(){
		if(!validaGenero(false))
			console.log('testaValidaGenero_falha2_radio_nw_selecionado: ok');
		else
			console.log('testaValidaGenero_falha2_radio_nw_selecionado: nw ok');
	})();
}

function testaValidaContrato(){
	var quantidadeTipoDeContrato = dataBase.contratos.length;
	
	(function testaValidaContrato_sucesso1(){
		if(validaContrato(1, quantidadeTipoDeContrato))
			console.log('testaValidaContrato_selecionado: ok');
		else
			console.log('testaValidaContrato_selecionado: nw ok');
	})();
	(function testaValidaContrato_falha1(){
		if(!validaContrato(0, quantidadeTipoDeContrato))
			console.log('testaValidaContrato_nw_selecionado: ok');
		else
			console.log('testaValidaContrato_nw_selecionado: nw ok');
	})();
	(function testaValidaContrato_falha2(){
		if(!validaContrato(6, quantidadeTipoDeContrato))
			console.log('testaValidaContrato_item_inexistente: ok');
		else
			console.log('testaValidaContrato_item_inexistente: nw ok');
	})();
}

function testaValidaEmail(){
	(function testaValidaEmail_sucesso1_compelto(){
		var resultado = validaEmail('diego.mizutani@itlab.com.br');
		if( resultado.validado )
			console.log('testaValidaEmail_sucesso: ok');
		else
			console.log('testaValidaEmail_sucesso: nw ok');
	})();
	(function testaValidaEmail_sucesso2_apenasUmPonto(){
		var resultado = validaEmail('diego.mizu@hotmail.com');
		if( resultado.validado )
			console.log('testaValidaEmail_sucesso2_apenasUmPonto: ok');
		else
			console.log('testaValidaEmail_sucesso2_apenasUmPonto: nw ok');
	})();
	(function testaValidaEmail_sucesso3_comNumero(){
		var resultado = validaEmail('diego.mizutani7@outlook.com');
		if( resultado.validado )
			console.log('testaValidaEmail_sucesso3_comNumero: ok');
		else
			console.log('testaValidaEmail_sucesso3_comNumero: nw ok');
	})();
	(function testaValidaEmail_falha1_semPonto(){
		var resultado = validaEmail('diego.mizutani@outlookcom');
		if( !resultado.validado )
			console.log('testaValidaEmail_falha1_semPonto: ok');
		else
			console.log('testaValidaEmail_falha1_semPonto: nw ok');
	})();
	(function testaValidaEmail_falha2_semCaracter(){
		var resultado = validaEmail('@outlook.com');
		if( !resultado.validado )
			console.log('testaValidaEmail_falha2_muitoCurto: ok');
		else
			console.log('testaValidaEmail_falha2_muitoCurto: nw ok');
	})();
	(function testaValidaEmail_falha3_maisArrobaNoDominio(){
		var resultado = validaEmail('diego.mizutani@hotm@il.com');
		if( !resultado.validado )
			console.log('testaValidaEmail_falha3_maisArrobaNoDominio: ok');
		else
			console.log('testaValidaEmail_falha3_maisArrobaNoDominio: nw ok');
	})();
	(function testaValidaEmail_falha4_espaco(){
		var resultado = validaEmail('diego mizutani@itlab.com.br');
		if( !resultado.validado )
			console.log('testaValidaEmail_falha4_espaco: ok');
		else
			console.log('testaValidaEmail_falha4_espaco: nw ok');
	})();
	(function testaValidaEmail_falha5_semCaracterDominio(){
		var resultado = validaEmail('diego.mizutani@');
		if( !resultado.validado)
			console.log('testaValidaEmail_falha5_semCaracterDominio: ok');
		else
			console.log('testaValidaEmail_falha5_semCaracterDominio: nw ok');
	})();
	(function testaValidaEmail_falha6_vazio(){
		var resultado = validaEmail('');
		if( !resultado.validado)
			console.log('testaValidaEmail_falha6_vazio: ok');
		else
			console.log('testaValidaEmail_falha6_vazio: nw ok');
	})();
	(function testaValidaEmail_falha7_naoTerArroba(){
		var resultado = validaEmail('diego.mizutaniitlab.com.br');
		if( !resultado.validado )
			console.log('testaValidaEmail_falha7_naoTerArroba: ok');
		else
			console.log('testaValidaEmail_falha7_naoTerArroba: nw ok');
	})();
}

function testaValidaSalario(){
	(function testaValidaSalario_sucesso(){
		if(validaSalario('1700,00'))
			console.log('testaValidaSalario_sucesso: ok');
		else
			console.log('testaValidaSalario_sucesso: nw ok');
	})();
	(function testaValidaSalario_falha_baixoDoQueSalarioMinimo(){
		if(!validaSalario('170,00'))
			console.log('testaValidaSalario_falha_baixoDoQueSalarioMinimo: ok');
		else
			console.log('testaValidaSalario_falha_baixoDoQueSalarioMinimo: nw ok');
	})();
	(function testaValidaSalario_falha_valorAltissimo(){
		if(!validaSalario('170000,00'))
			console.log('testaValidaSalario_falha_valorAltissimo: ok');
		else
			console.log('testaValidaSalario_falha_valorAltissimo: nw ok');
	})();
	(function testaValidaSalario_falha_vazio(){
		if(!validaSalario(''))
			console.log('testaValidaSalario_falha_vazio: ok');
		else
			console.log('testaValidaSalario_falha_vazio: nw ok');
	})();
	(function testaValidaSalario_falha_apenasZero(){
		if(!validaSalario('0,00'))
			console.log('testaValidaSalario_falha_apenasZero: ok');
		else
			console.log('testaValidaSalario_falha_apenasZero: nw ok');
	})();
}

$(document).ready(function(){
	console.log('LISTAS DE TESTES DE FORMULARIO');
	// testaValidaNome();
	// console.log('--------------------------');
	// validaDataNascimento();
	// console.log('--------------------------');
	testaValidaDataNascimento()
	// console.log('--------------------------');
	// testaValidaTelefone();
	// console.log('--------------------------');
	// testaValidaGenero();
	// console.log('--------------------------');
	// testaValidaContrato();
	// console.log('--------------------------');
	testaValidaEmail();
	// console.log('--------------------------');
	// testaValidaSalario();
	// console.log('--------------------------');
});
