<!DOCTYPE html>
<html lang="pt-BR">

    <head>   
        <?php include("incs/css.php"); ?>
    </head>

    <body>

        <?php include("incs/ie.php"); ?>

        <div class="pre-con"></div>

        <div class="wrap">
            
            <section id="internas" class="logo-ctr">

                <?php include("incs/menu.php"); ?>
                <div id="bg-menu-internas"></div><!-- bg-menu-internas -->

                <div id="boxLogo">

                    <div id="logo"></div><!-- logo -->
                    <div id="icon-menu">
                        <a href="#">Icon Menu</a>
                    </div><!-- icon-menu -->

                </div><!-- boxLogo -->

                <div id="ext-mapa">
                    <div id="mapa"></div><!-- mapa -->
                    <form id="form-localizacao" method="post" action="#" autocomplete="off">
            
                        <div class="container">
                                <fieldset>                                
                                <label>
                                    <input type="text" id="txtEnderecoPartida" name="txtEnderecoPartida">
                                </label>                                        
                                <input class="color-transition" type="submit" id="btnEnviar" name="btnEnviar" value=" Traçar Rota ">
                            </fieldset>                            
                        </div><!-- container -->

                    </form>             
                </div><!-- ext-mapa -->  

            </section><!-- home -->

        </div><!-- wrap -->
        
        <?php include("incs/scripts.php"); ?>
        <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDwPlsJIDxQkwgFcqdFxVEEBEZoOoHRZ2E&amp;sensor=false"></script>
        <script src="js/maps.js"></script>

    </body>

</html>