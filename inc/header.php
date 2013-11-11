<?php 
function printHead(){?>
<!DOCTYPE html>
<html>
	<head>
		<title>Dawg Pizza</title>
		<meta charset="UTF-8">
		<meta name="author" content="cpf5193">
		<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
		<link rel="shortcut icon" href="img/logo.png">
<?php
}
function printNavbarStart(){
?>
	</head>
	<body>
		<!-- <a href="index.shtml"><img class="headimg" src="img/newlogo.png" alt="pizza picture"></a> -->

		<nav class="navbar navbar-default" role="navigation">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-menu">
	            <span class="sr-only">Toggle Navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>                        
       			 </button>
			</div>

			<div class="collapse navbar-collapse navbar-menu">
	        	<ul class="nav navbar-nav">
<?php
}

function printNavbarEnd(){?>
        </ul>
    </div>
</nav>
<a href="index.shtml" class="logo">DP</a>
<div class='hidetop'></div>	            
<?php
}
?> 