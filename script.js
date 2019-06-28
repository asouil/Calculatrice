var input = '';
var result = '';
var last='';

function affichage(input) {
	document.getElementById('affichage').innerHTML = input;
}

function chiffre(nb) {
	if(result!=="") {
		reset();
	}
	
	if((last==')')&&(nb!=')')) {
		input+="*";
	}
	if(nb=='(' && !isNaN(last) &&(last!=='')){
		input+='*';
	}
	if(nb=='.'){
		if(last=='+'||last=='-'||last=='*'||last=='/'||last==''||last=='(') {
			input+='0';
		}
	}
	input+=nb;
	last=nb;
	affichage(input);
}

function operator(op) {
	if (input === '') {
		chiffre('0');
	}
	if (result!=='') {
		input = result;
		result = '';
	}
	input +=' ' + op + ' ';
	last=op;
	affichage(input);
}

function equal() {
	// La fonction eval permet de faire l'opération écrite automatiquement
	result = eval(input);
	affichage(result);
	if (result === undefined) {
		affichage('0');
	}
	
}

function reset() {
	input = '';
	last='';
	result='';
	affichage('0');
}

function back() {
	last='';
	if(input.length>1){
		input = input.substr(0, input.length-1);
	}
	else {
		input=0;
	}
	affichage(input);
}