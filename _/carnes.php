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

                <div class="slider-full" style="width: 100%;height: 100%;position: relative;">
                    
                    <div id="owl-cardapio" class="owl-carousel owl-theme">
                     
                        <div class="item"><img class="owl-lazy" data-src="imgs/temp/card01.jpg" border="0"></div>
                        <div class="item"><img class="owl-lazy" data-src="imgs/temp/card02.jpg" border="0"></div>
                        <div class="item"><img class="owl-lazy" data-src="imgs/temp/card03.jpg" border="0"></div>
                        <div class="item"><img class="owl-lazy" data-src="imgs/temp/card01.jpg" border="0"></div>
                        <div class="item"><img class="owl-lazy" data-src="imgs/temp/card02.jpg" border="0"></div>
                        <div class="item"><img class="owl-lazy" data-src="imgs/temp/card03.jpg" border="0"></div>                        
                    </div>

                </div><!-- slider-full

            </section><!-- home -->

        </div><!-- wrap -->
        
        <?php include("incs/scripts.php"); ?>

    </body>

</html>