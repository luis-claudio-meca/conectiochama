<?php 
class Conexion{	  
    public static function Conectar() {        
        define('servidor', 'dbconection.cqjgcxgqtekt.us-east-1.rds.amazonaws.com');
        define('nome_bd', 'dash_conection');
        define('usuario', 'admin');
        define('password', 'ChamaTech');					        
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');			
        try{
            $conexion = new PDO("mysql:host=".servidor."; dbname=".nome_bd, usuario, password, $opciones);			
            return $conexion;
        }catch (Exception $e){
            die("Erro na Conexão pode ser: ". $e->getMessage());
        }
    }
}

$objeto = new Conexion();
$conexion = $objeto->Conectar();


$data = (isset($_POST['data'])) ? filter_input(INPUT_POST,'data',FILTER_SANITIZE_STRING) : '';
$culto = (isset($_POST['culto'])) ? filter_input(INPUT_POST,'culto',FILTER_SANITIZE_STRING) : '';
$sexo = (isset($_POST['sexo'])) ? filter_input(INPUT_POST,'sexo',FILTER_SANITIZE_STRING) : '';
$name = (isset($_POST['nome'])) ? filter_input(INPUT_POST,'nome',FILTER_SANITIZE_STRING) : '';
$idade = (isset($_POST['idade'])) ? filter_input(INPUT_POST,'idade',FILTER_SANITIZE_STRING) : '';
$civil = (isset($_POST['civil'])) ? filter_input(INPUT_POST,'civil',FILTER_SANITIZE_STRING) : '';
$phone = (isset($_POST['phone'])) ? filter_input(INPUT_POST,'phone',FILTER_SANITIZE_STRING) : '';
$bairro = (isset($_POST['bairro'])) ? filter_input(INPUT_POST,'bairro',FILTER_SANITIZE_STRING) : '';
$aceitou = (isset($_POST['aceitou'])) ? filter_input(INPUT_POST,'aceitou',FILTER_SANITIZE_STRING) : '';
$visita = (isset($_POST['visita'])) ? filter_input(INPUT_POST,'visita',FILTER_SANITIZE_STRING) : '';
$voluntario = (isset($_POST['voluntario'])) ? filter_input(INPUT_POST,'voluntario',FILTER_SANITIZE_STRING) : '';
$queromais = (isset($_POST['queromais'])) ? filter_input(INPUT_POST,'queromais',FILTER_SANITIZE_STRING) : '';
$conhecer = (isset($_POST['conhecer'])) ? filter_input(INPUT_POST,'conhecer',FILTER_SANITIZE_STRING) : '';
$algumaigreja = (isset($_POST['algumaigreja'])) ? filter_input(INPUT_POST,'algumaigreja',FILTER_SANITIZE_STRING) : '';
$qualigreja = (isset($_POST['qualigreja'])) ? filter_input(INPUT_POST,'qualigreja',FILTER_SANITIZE_STRING) : '';
$mais = (isset($_POST['mais'])) ? $_POST['mais'] : '';

$consulta = "INSERT INTO dados_visitantes (data, culto, sexo,name,idade,civil,phone,bairro,aceitou,visita,queromais,conhecer,mais, voluntario, algumaigreja, qualigreja ) VALUES('$data','$culto','$sexo','$name','$idade','$civil','$phone','$bairro','$aceitou','$visita','$queromais','$conhecer','$mais', '$voluntario', '$algumaigreja', '$qualigreja') ";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
