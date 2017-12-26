//Example one

var a = prompt('Wpisz wartosc a'),
	b = prompt('Wpisz wartosc b'),
	value;

value = (a * a) - (2 * a * b) + (b * b);
console.log(value);
alert('Twoj wynik: ' + value);

if (value > 0) {
	console.log('Wynik dodatni');
	alert('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
	alert('Wynik ujemny');
} else {
	console.log('Wynik zero');
	alert('Wynik zero');
}

//Example two

/*
var a = prompt('Wpisz wartosc a'),
	b = prompt('Wpisz wartosc b'),
	result,
	value;

value = (a * a) - (2 * a * b) + (b * b);
console.log(value);
alert('Twoj wynik: ' + value);

var result = value >=0 ? 'Wynik dodatni' : 'Wynik ujemny';
console.log(result);
alert(result);
*/