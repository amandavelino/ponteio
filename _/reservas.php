<!DOCTYPE html>
<html lang="pt-BR">

    <head>   
        <?php include("incs/css.php"); ?>
        <link rel="stylesheet" href="css/pikaday.css">
        <link rel="stylesheet" href="css/fancySelect.css">
    </head>

    <body>

        <?php include("incs/ie.php"); ?>

        <div class="pre-con"></div>

        <div class="wrap">
            
            <section id="internas" class="logo-ctr pdg-page reservas-page">

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
                        <h2>Fazer Reserva</h2>
                    </header><!-- /header -->
                    
                    <form class="formulario" action="#" method="post" autocomplete="off">

                        <fieldset>
                            <label>
                                <input type="text" name="nome_reservas" class="input" placeholder="Nome">
                            </label>
                        </fieldset>

                        <fieldset>
                            <label class="columns-2">
                                <input type="email" name="email_reservas" class="input lft" placeholder="E-mail">
                            </label>
                            <label class="columns-2">
                                <input id="telefone" type="tel" name="telefone_reservas" class="input rgt" onkeypress="mascara(this, '## ####-####')" maxlength="12" placeholder="Telefone">
                            </label>                    
                        </fieldset>     

                        <fieldset>
                            <label class="columns-3">
                                <input type="text" name="data_reservas" id="datepicker" class="input lft datepicker" placeholder="Data de reserva">                            
                            </label>
                            <label class="columns-3">
                                <select class="select">
                                    <option value="">Horário da Reserva</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                </select>                                                                  
                            </label>
                            <label class="columns-3">
                                <div class="outer-select">
                                    <select class="select rgt">
                                        <option value="">Nº de convidados</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select>   
                                </div>                              
                            </label>                                                        
                        </fieldset>

                        <fieldset>
                            <label>
                                <textarea name="mensagem_reservas" class="input" placeholder="Mensagem"></textarea>
                            </label>
                        </fieldset>     

                        <fieldset>
                            <input type="submit" class="submit" name="enviar_reservas" value="Enviar">
                        </fieldset> 

                    </form>                     

                </div><!-- container -->

            </section><!-- internas -->

        </div><!-- wrap -->
        
        <?php include("incs/scripts.php"); ?>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script>
        <script src="js/pikaday.js"></script>
        <script src="js/fancySelect.js"></script>
        <script>

            //datepicker
            var picker = new Pikaday({ 
                field: document.getElementById('datepicker'), 
                format: 'DD.MM.YYYY',
                i18n: {
                    previousMonth : 'Mês Anterior',
                    nextMonth     : 'Próximo Mês',
                    months        : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                    weekdays      : ['Domingo','Segunda','Terça','Quarta',' Quinta','Sexta','Sábado'],
                    weekdaysShort : ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
                },
                onSelect: function() {
                    //var date = document.createTextNode(this.getMoment().format('Do MMMM YYYY') + ' ');
                    //document.getElementById('selected').appendChild(date);
                }               
            });

            picker.setMoment(moment().dayOfYear(366));

            //select
            $('.select').fancySelect();

        </script>

    </body>

</html>