let encendido = document.getElementById('encendido')

 	encendido.addEventListener("click",luz,true)
 	uno=0

 function luz(){

 	if(uno==0){

 		let body=document.getElementById("body")
 		body.style.background="black"
 		body.style.color="white"
 		uno+=1
 	}else{
 		body.style.backgroundImage='url(data:image/jpeg;base64,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)'
 		body.style.color="black"
 		uno=0
 	}

}

let hm= document.getElementById("hm")
    hm.addEventListener("click",fun,true)



    function fun(){
        alert("asdknads")

       hm.classList.toggle("active");

    }