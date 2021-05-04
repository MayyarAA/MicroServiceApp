const express = require('express');

const firstFunctionDeclared = () => {
	console.log('logging from firstFunctionDeclared');
};

const secondFunctionDeclared = () => {
	console.log('logging from secondFunctionDeclared');
};

function holder() {
	console.log('hello from holder');
	setTimeout(firstFunctionDeclared, 1000);
	secondFunctionDeclared();
}

module.exports = holder;
