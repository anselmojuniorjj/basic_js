var frutas = ['laranja', 'morango', 'abacate'];
var pessoa = {
	nome: 'Anselmo',
	sobrenome: 'Junior',
	idade:37,
	andar: function(){
		return 'andando';
	}
};

console.log(pessoa.nome);
console.log(pessoa.andar());
console.log(pessoa.idade);

console.log(frutas);

// push - adiciona no final
frutas.push('manga');

// unshift adiciona no inicio
frutas.unshift('pitanga');

console.log(frutas.join(' - '));
console.log(frutas.length);

// pop - retira ultima;
frutas.pop();
console.log(frutas);
console.log(frutas.length);

// shift - retira primeira
frutas.shift();
console.log(frutas);
console.log(frutas.length);

// sort - coloca em ordem
frutas.sort();
console.log(frutas);

// reverse inverte a ordem do array
console.log(frutas.reverse());
