//Encryptor 
function encode(){
	var a = document.querySelector(".box").value;

	//Lower case
    a = a.replace(/a/g,'-103');
	a = a.replace(/b/g,'-301');
	a = a.replace(/c/g,'-154');
	a = a.replace(/d/g,'-200');
	a = a.replace(/e/g,'-350');
	a = a.replace(/f/g,'-369');
	a = a.replace(/g/g,'-289');
	a = a.replace(/h/g,'-389');
	a = a.replace(/i/g,'-201');
	a = a.replace(/j/g,'-311');
	a = a.replace(/k/g,'-202');
	a = a.replace(/l/g,'-567');
	a = a.replace(/m/g,'-765');
	a = a.replace(/n/g,'-333');
	a = a.replace(/o/g,'-111');
	a = a.replace(/p/g,'-222');
	a = a.replace(/q/g,'-444');
	a = a.replace(/r/g,'-555');
	a = a.replace(/s/g,'-666');
	a = a.replace(/t/g,'-777');
	a = a.replace(/u/g,'-808');
	a = a.replace(/v/g,'-903');
	a = a.replace(/w/g,'-999');
	a = a.replace(/x/g,'-888');
	a = a.replace(/y/g,'-100');
	a = a.replace(/z/g,'-134');

	//Upper case
	a = a.replace(/A/g,'-0a1');
	a = a.replace(/B/g,'-0a2');
	a = a.replace(/C/g,'-0a3');
	a = a.replace(/D/g,'-0a4');
	a = a.replace(/E/g,'-0a5');
	a = a.replace(/F/g,'-0a6');
	a = a.replace(/G/g,'-0a7');
	a = a.replace(/H/g,'-0a8');
	a = a.replace(/I/g,'-0a9');
	a = a.replace(/J/g,'-1a1');
	a = a.replace(/K/g,'-1a2');
	a = a.replace(/L/g,'-1a3');
	a = a.replace(/M/g,'-1a4');
	a = a.replace(/N/g,'-1a5');
	a = a.replace(/O/g,'-1a6');
	a = a.replace(/P/g,'-1a7');
	a = a.replace(/Q/g,'-1a8');
	a = a.replace(/R/g,'-1a9');
	a = a.replace(/S/g,'-2a1');
	a = a.replace(/T/g,'-2a2');
	a = a.replace(/U/g,'-2a3');
	a = a.replace(/V/g,'-2a4');
	a = a.replace(/W/g,'-2a5');
	a = a.replace(/X/g,'-2a6');
	a = a.replace(/Y/g,'-2a7');
	a = a.replace(/Z/g,'-2a8');

	//Vietnam
	//Special Vietnam letters #1
	a = a.replace(/\u00E2/g, '-0b1');
	a = a.replace(/\u0103/g, '-0b2');
	a = a.replace(/\u00F4/g, '-0b3');
	a = a.replace(/\u01A1/g, '-0b4');
	a = a.replace(/\u0111/g, '-0b5');
	a = a.replace(/\u00EA/g, '-0b6');
	a = a.replace(/\u01B0/g, '-0b7');
	//Special Vietnam letters #2
	a = a.replace(/\u00E1/g, '-0b9');
	a = a.replace(/\u00E0/g, '-1b1');
	a = a.replace(/\u1EA1/g, '-1b2');
	a = a.replace(/\u1EA3/g, '-1b3');
	a = a.replace(/\u00E3/g, '-1b4');
	a = a.replace(/\u00E9/g, '-1b5');
	a = a.replace(/\u00E8/g, '-1b6');
	a = a.replace(/\u1EBD/g, '-1b7');
	a = a.replace(/\u1EB9/g, '-1b8');
	a = a.replace(/\u1EBB/g, '-1b9');
	a = a.replace(/\u00ED/g, '-2b1');
	a = a.replace(/\u00EC/g, '-2b2');
	a = a.replace(/\u1EC9/g, '-2b3');
	a = a.replace(/\u1ECB/g, '-2b4');
	a = a.replace(/\u0129/g, '-2b5');
	a = a.replace(/\u00F3/g, '-2b6');
	a = a.replace(/\u00F2/g, '-2b7');
	a = a.replace(/\u1ECF/g, '-2b8');
	a = a.replace(/\u1ECD/g, '-2b9');
	a = a.replace(/\u00F5/g, '-3b1');
	a = a.replace(/\u00FA/g, '-3b2');
	a = a.replace(/\u00F9/g, '-3b3');
	a = a.replace(/\u1EE5/g, '-3b4');
	a = a.replace(/\u0169/g, '-3b5');
	a = a.replace(/\u1EE7/g, '-3b6');
	var output = document.querySelector("#output");
	output.innerHTML = a;
}

//Decryptor 
function decode(){
	var a = document.querySelector(".box").value;
	//Upper Case
	//Vietnam
	//Special Vietnam letters #1
	a = a.replace(/-0b1/g, '\u00E2');
	a = a.replace(/-0b2/g, '\u0103');
	a = a.replace(/-0b3/g, '\u00F4');
	a = a.replace(/-0b4/g, '\u01A1');
	a = a.replace(/-0b5/g, '\u0111');
	a = a.replace(/-0b6/g, '\u00EA');
	a = a.replace(/-0b7/g, '\u01B0');
	//Special Vietnam letters #2
	a = a.replace(/-0b9/g, '\u00E1');
	a = a.replace(/-1b1/g, '\u00E0');
	a = a.replace(/-1b2/g, '\u1EA1');
	a = a.replace(/-1b3/g, '\u1EA3');
	a = a.replace(/-1b4/g, '\u00E3');
	a = a.replace(/-1b5/g, '\u00E9');
	a = a.replace(/-1b6/g, '\u00E8');
	a = a.replace(/-1b7/g, '\u1EBD');
	a = a.replace(/-1b8/g, '\u1EB9');
	a = a.replace(/-1b9/g, '\u1EBB');
	a = a.replace(/-2b1/g, '\u00ED');
	a = a.replace(/-2b2/g, '\u00EC');
	a = a.replace(/-2b3/g, '\u1EC9');
	a = a.replace(/-2b4/g, '\u1ECB');
	a = a.replace(/-2b5/g, '\u0129');
	a = a.replace(/-2b6/g, '\u00F3');
	a = a.replace(/-2b7/g, '\u00F2');
	a = a.replace(/-2b8/g, '\u1ECF');
	a = a.replace(/-2b9/g, '\u1ECD');
	a = a.replace(/-3b1/g, '\u00F5');
	a = a.replace(/-3b2/g, '\u00FA');
	a = a.replace(/-3b3/g, '\u00F9');
	a = a.replace(/-3b4/g, '\u1EE5');
	a = a.replace(/-3b5/g, '\u0169');
	a = a.replace(/-3b6/g, '\u1EE7');

	a = a.replace(/-0a1/g,"A");
	a = a.replace(/-0a2/g,"B");
	a = a.replace(/-0a3/g,"C");
	a = a.replace(/-0a4/g,"D");
	a = a.replace(/-0a5/g,"E");
	a = a.replace(/-0a6/g,"F");
	a = a.replace(/-0a7/g,"G");
	a = a.replace(/-0a8/g,"H");
	a = a.replace(/-0a9/g,"I");
	a = a.replace(/-1a1/g,"J");
	a = a.replace(/-1a2/g,"K");
	a = a.replace(/-1a3/g,"L");
	a = a.replace(/-1a4/g,"M");
	a = a.replace(/-1a5/g,"N");
	a = a.replace(/-1a6/g,"O");
	a = a.replace(/-1a7/g,"P");
	a = a.replace(/-1a8/g,"Q");
	a = a.replace(/-1a9/g,"R");
	a = a.replace(/-2a1/g,"S");
	a = a.replace(/-2a2/g,"T");
	a = a.replace(/-2a3/g,"U");
	a = a.replace(/-2a4/g,"V");
	a = a.replace(/-2a5/g,"W");
	a = a.replace(/-2a6/g,"X");
	a = a.replace(/-2a7/g,"Y");
	a = a.replace(/-2a8/g,"Z");
	
	//Lower Case
	a = a.replace(/-103/g,"a");
	a = a.replace(/-301/g,"b");
	a = a.replace(/-154/g,"c");
	a = a.replace(/-200/g,"d");
	a = a.replace(/-350/g,"e");
	a = a.replace(/-369/g,"f");
	a = a.replace(/-289/g,"g");
	a = a.replace(/-389/g,"h");
	a = a.replace(/-201/g,"i");
	a = a.replace(/-311/g,"j");
	a = a.replace(/-202/g,"k");
	a = a.replace(/-567/g,"l");
	a = a.replace(/-765/g,"m");
	a = a.replace(/-333/g,"n");
	a = a.replace(/-111/g,"o");
	a = a.replace(/-222/g,"p");
	a = a.replace(/-444/g,"q");
	a = a.replace(/-555/g,"r");
	a = a.replace(/-666/g,"s");
	a = a.replace(/-777/g,"t");
	a = a.replace(/-808/g,"u");
	a = a.replace(/-903/g,"v");
	a = a.replace(/-999/g,"w");
	a = a.replace(/-888/g,"x");
	a = a.replace(/-100/g,"y");
	a = a.replace(/-134/g,"z");
	var output = document.querySelector("#output");
	output.innerHTML = a;
}