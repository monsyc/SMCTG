<?php    
 
 $es_movil=FALSE; //Aquí se declara la variable falso o verdadero XD 
  $usuario = $_SERVER['HTTP_USER_AGENT']; //Con esta leemos la info de su navegador 
 $usuarios_moviles = "Android, AvantGo, Blackberry, Blazer, Cellphone, Danger, DoCoMo, EPOC,
 
 EudoraWeb, Handspring, HTC, Kyocera, LG, MMEF20, MMP, MOT-V, Mot, Motorola, NetFront, Newt, 
 
Nokia, Opera Mini, Palm, Palm, PalmOS, PlayStation Portable, ProxiNet, Proxinet, SHARP-TQ-GX10,
 
 Samsung, Small, Smartphone, SonyEricsson, SonyEricsson, Symbian, SymbianOS, TS21i-10, UP.Browser,
 
 UP.Link, WAP, webOS, Windows CE, hiptop, iPhone, iPod, iPad, portalmmm, Elaine/3.0, OPWV";     
 
$navegador_usuario = explode(',',$usuarios_moviles);   
 
foreach($navegador_usuario AS $navegador){ //Este ciclo es el que se encarga de detectar el navegador y devolver un TRUE si encuentra la cadena     
 
if(eregi(trim($navegador),$usuario)){     
 
 $es_movil=TRUE;       
}  
  }
 
 if($es_movil==TRUE){ 
 
   header('Location:http://www.local10.mx/m/index.html'); 
 
} 
 
else{   
 
   header('Location:http://www.local10.mx/home.html');
 
    } 
 
?>