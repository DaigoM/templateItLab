$(document).ready(function(){
    $('#nome').val('Diego Mizutani');
    $('#dataNascimento').val('16/07/1995');
    $('#telefone').val('(11) 94343-5556');
    $('#email').val('diego.mizutani@itlab.com.br');
    // $('#salario').val('RS1400,00');
    $('#salario').val('1400.00');
    $('#genero[value="m"]').attr('checked', true);
    $('#contrato').find('option[value="2"]').attr('selected', true)
    $('.beneficios[value="1"], .beneficios[value="2"]').attr('checked', true);
});