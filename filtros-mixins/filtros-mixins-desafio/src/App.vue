<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ 'Eu sou o Matheus Almeida' | commaSetter }}</p>
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ 'Pedro é legal' | howMuchLetters }}</p>
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ commaSetterMethod }}</p>
		<p>{{ howMuchLettersMethod }}</p>
		<hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ commaSetterMixin }}</p>
		<p>{{ howMuchLettersMixin }}</p>
	</div>
</template>

<script>
import filtrosMixin from './filtrosMixin'

export default {
	mixins: [filtrosMixin],
	filters: {
		commaSetter(word) {
			return word.replaceAll(' ', ',')
		}
	},
	computed: {
		commaSetterMethod() {
			return this.word.replaceAll(' ', ',')
		},
		howMuchLettersMethod() {
			this.word2 = this.word2.split(' ')

			return this.word2.map(function (singleWord) {
				return `${singleWord} (${singleWord.length}) `
			}).join('')
		}
	},
	data() {
		return {
			word: 'Eu sou o Matheus Almeida',
			word2: 'Pedro é legal'
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
