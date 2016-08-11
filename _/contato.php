<!DOCTYPE html>
<html lang="pt-BR">

    <head>   
        <?php include("incs/css.php"); ?>
    </head>

    <body>

        <?php include("incs/ie.php"); ?>

        <div class="pre-con"></div>

        <div class="wrap">
            
            <section id="internas" class="logo-ctr pdg-page contato-page">

                <?php include("incs/menu.php"); ?>
                <div id="bg-menu-internas"></div><!-- bg-menu-internas -->

                <div id="boxLogo">

                    <div id="logo"></div><!-- logo -->
                    <div id="icon-menu">
                        <a href="#">Icon Menu</a>
                    </div><!-- icon-menu -->

                </div><!-- boxLogo -->

                <div class="container">

                    <header>
                        <h2>Contato</h2>
                    </header><!-- /header -->
                    
                    <form class="formulario" action="#" method="post" autocomplete="off">

                        <fieldset>
                            <label>
                                <input type="text" name="nome_contato" class="input" placeholder="Nome">
                            </label>
                        </fieldset>

                        <fieldset>
                            <label class="columns-2">
                                <input type="email" name="email_contato" class="input lft" placeholder="E-mail">
                            </label>
                            <label class="columns-2">
                                <input id="telefone" type="tel" name="telefone_contato" class="input rgt" onkeypress="mascara(this, '## ####-####')" maxlength="12" placeholder="Telefone">
                            </label>                    
                        </fieldset>     

                        <fieldset>
                            <label>
                                <textarea name="mensagem_contato" class="input" placeholder="Mensagem"></textarea>
                            </label>
                        </fieldset>     

                        <fieldset>
                            <input type="submit" class="submit" name="enviar_contato" value="Enviar">
                        </fieldset> 

                    </form>                     

                </div><!-- container -->

                <div id="info-fone-rodape">
                    <p>81.3326-2386 <span></span> 81.3125-3009</p>
                </div><!-- info-fone-rodape -->

            </section><!-- internas -->

        </div><!-- wrap -->
        
        <?php include("incs/scripts.php"); ?>
        <script>

            function mascara(t, mask){
                var i = t.value.length;
                var saida = mask.substring(1,0);
                var texto = mask.substring(i)
                if (texto.substring(0,1) != saida){
                    t.value += texto.substring(0,1);
                }
            }//           

        </script>   

    </body>

</html>