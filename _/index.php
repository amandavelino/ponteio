<!DOCTYPE html>
<html lang="pt-BR">

    <head>
        
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="author" content="Recife Sites">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link rel="stylesheet" type="text/css" href="css/styles.css">

    </head>

    <body id="home-page">

        <?php include("incs/ie.php"); ?>

        <section id="home">
                   
            <!-- menu -->
            <div id="logo-menu"></div><!-- logo -->   
            <div id="close"></div> 

            <ul id="menu">
                <li class="id-1"><a href="#">Home</a></li>
                <li class="id-2"><a href="#">O Restaurante</a></li>
                <li class="id-3"><a href="#">Cardápio</a></li>
                <li class="id-4"><a href="#">Reservas e Eventos</a></li>
                <li class="id-5"><a href="#">Localização</a></li>
                <li class="id-6"><a href="#">Contato</a></li>
            </ul>

            <ul id="redes-sociais">
                <li>
                    <a href="#" target="_blank">
                        <picture>
                            <source srcset="imgs/svg/facebook.svg" type="image/svg+xml">
                            <img srcset="imgs/facebook.png" alt="Facebook">
                        </picture>  
                    </a>                 
                </li>
                <li>
                    <a href="#" target="_blank">
                        <picture>
                            <source srcset="imgs/svg/instagram.svg" type="image/svg+xml">
                            <img srcset="imgs/instagram.png" alt="Instagram">
                        </picture>  
                    </a>                       
                </li>
                <li>
                     <a href="#" target="_blank">
                        <picture>
                            <source srcset="imgs/svg/pin.svg" type="image/svg+xml">
                            <img srcset="imgs/pin.png" alt="Instagram">
                        </picture>  
                    </a>                    
                </li>
            </ul><!-- redes-sociais -->

            <!-- logo central -->

            <div id="sqr"></div><!-- sqr -->
            <div id="boxLogo">

                <div id="logo"></div><!-- logo -->
                <div id="icon-menu">
                    <a href="#">Icon Menu</a>
                </div><!-- icon-menu -->

            </div><!-- boxLogo -->

            <!-- fim logo central -->

            <div id="info-fone-rodape">
                <p>81.3326-2386 <span></span> 81.3125-3009</p>
            </div><!-- info-fone-rodape -->

        </section><!-- home -->
        
        <?php include("incs/scripts.php"); ?>

    </body>

</html>