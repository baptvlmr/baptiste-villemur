<?php

// Portfolio project informations
$title    = 'Site Yo Agency';
$img_name = 'yo-mockup.jpg';

require_once 'inc/header.php';

?>

<div class="row">
    <div class="s-twelve m-twelve l-ten columns">
        <p>Lors de mon année de LP CM j’ai travaillé en groupe avec <a href="http://yannischerif.com" target="_blank">Yann Chérif</a>, <a href="http://sophietricot.com/" target="_blank">Sophie Tricot</a>, <a href="https://www.franckdemoute.fr/" target="_blank">Frank Demoute</a> et <a href="https://www.linkedin.com/in/lucas-rasquin-263458120/" target="_blank">Lucas Rasquin</a>. Notre micro-agence, la <a href="http://yoagency.fr/" target="_blank">Yo Agency</a>, a travaillé sur deux projets tutorés dans le cadre de notre licence.</p>
        <figure><img src="/assets/images/portfolio/yo-mockup.jpg"></figure>
    </div>
</div>
   
<div class="row">
    <div class="s-twelve m-ten l-six columns">
        <p>Nous avons fait le choix de concevoir un site one-page avec un univers graphique coloré, des animations parallax et une navigation fullscreen responsive. Le site se compose d’un accueil, de 4 sections (L’agence, Services, L’équipe, Contact) et d’un footer avec un fond animé en parallax.</p>
        <p>Nous avons codés nous-même le CSS et la plupart du JavaScript (avec la bibliothèque jQuery). Je me suis par exemple chargé de l'interaction sur les photos dans la partie “L’équipe”. Cependant nous avons utilisé la ressource Parallax.js pour les animations des éléments graphiques et du footer.</p>
    </div>
    
    <aside class="s-twelve m-ten l-four columns bg-white">
        <p class="no-margin">
            <em>Voir le site :</em>
            <a href="http://yoagency.fr/" target="_blank" class="button black">Yo Agency <i class="fa fa-globe"></i></a>
        </p>
        
        <p>
            <em>Date :</em> Octobre-Novembre 2016
        </p>
        
        <p>
            <em>Collaborateurs :</em> <a href="http://yannischerif.com" target="_blank">Yann Chérif</a>, <a href="http://sophietricot.com/" target="_blank">Sophie Tricot</a>, <a href="https://www.franckdemoute.fr/" target="_blank">Frank Demoute</a>, <a href="https://www.linkedin.com/in/lucas-rasquin-263458120/" target="_blank">Lucas Rasquin</a>
        </p>
        
        <p>
            <em>Contexte :</em> LP CM
        </p>
        
        <p class="no-margin">
            <em>Technologies utilisées :</em>
        </p>
        <ul class="list">
            <li><a href="https://jquery.com/" target="_blank">jQuery</a></li>
            <li><a href="http://matthew.wagerfield.com/parallax/" target="_blank">Parallax.js</a></li>
        </ul>
            
    </aside>
</div>

<?php

require_once 'inc/footer.php';