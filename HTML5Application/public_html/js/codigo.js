
$(document).ready(function(){
    var a=0; 
    var contador =0;
    var por=0;
   
    $("#fmr1").submit(function (parametro){
        parametro.preventDefault();
        
        a=$("#lista1").val();
        if(a === "B"){
            contador = contador +1;
        } 
        
        a=$("#lista2").val();
        if(a === "A"){
            contador = contador +1;
        }
        
        a=$("#lista3").val();
        if(a === "B") {
            contador = contador +1;
        }
        
        a=$("#lista4").val();
        if(a === "C") {
            contador = contador +1;
        }
        
        a=$("#lista5").val();
        if(a === "B") {
            contador = contador +1;
        }
        
        a=$("#lista6").val();
        if(a === "B") {
            contador = contador +1;
        }
        
        a=$("#lista7").val();
        if(a === "B") {
            contador = contador +1;
        }
        
        a=$("#lista8").val();
        if(a === "D") {
            contador = contador +1;
        }
        
        a=$("#lista9").val();
        if(a === "C") {
            contador = contador +1;
        }
        
        a=$("#lista10").val();
        if(a === "E") {
            contador = contador +1;
        }
        
        por = (contador*100)/10;
    
       alert("Su resultado es: "+contador "de 10" +por"%");
    
    });    
 
 
});
