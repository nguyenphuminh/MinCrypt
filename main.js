//Encryptor 
function encode(){
	var a = document.querySelector(".box").value;
	var b;
    a = a.replace(/a/g,103);
	a = a.replace(/b/g,301);
	a = a.replace(/c/g,154);
	a = a.replace(/d/g,200);
	a = a.replace(/e/g,350);
	a = a.replace(/f/g,369);
	a = a.replace(/g/g,289);
	a = a.replace(/h/g,389);
	a = a.replace(/i/g,201);
	a = a.replace(/k/g,202);
	a = a.replace(/l/g,567);
	a = a.replace(/m/g,765);
	a = a.replace(/n/g,333);
	a = a.replace(/o/g,111);
	a = a.replace(/p/g,222);
	a = a.replace(/q/g,444);
	a = a.replace(/r/g,555);
	a = a.replace(/s/g,666);
	a = a.replace(/t/g,777);
	a = a.replace(/u/g,808);
	a = a.replace(/v/g,903);
	a = a.replace(/w/g,999);
	a = a.replace(/x/g,888);
	a = a.replace(/y/g,100);
	a = a.replace(/z/g,134);
	var output = document.querySelector("#output");
	output.innerHTML = a;
}

//Decryptor 
function decode(){
	var a = document.querySelector(".box").value;
	var b;
    a = a.replace(/103/g,"a");
	a = a.replace(/301/g,"b");
	a = a.replace(/154/g,"c");
	a = a.replace(/200/g,"d");
	a = a.replace(/350/g,"e");
	a = a.replace(/369/g,"f");
	a = a.replace(/289/g,"g");
	a = a.replace(/389/g,"h");
	a = a.replace(/201/g,"i");
	a = a.replace(/202/g,"k");
	a = a.replace(/567/g,"l");
	a = a.replace(/765/g,"m");
	a = a.replace(/333/g,"n");
	a = a.replace(/111/g,"o");
	a = a.replace(/222/g,"p");
	a = a.replace(/444/g,"q");
	a = a.replace(/555/g,"r");
	a = a.replace(/666/g,"s");
	a = a.replace(/777/g,"t");
	a = a.replace(/808/g,"u");
	a = a.replace(/903/g,"v");
	a = a.replace(/999/g,"w");
	a = a.replace(/888/g,"x");
	a = a.replace(/100/g,"y");
	a = a.replace(/134/g,"z");
	var output = document.querySelector("#output");
	output.innerHTML = a;
}