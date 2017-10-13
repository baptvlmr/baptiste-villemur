<?php

// Portfolio project informations
$title    = 'Gestion des visiteurs, Immersions digitales';
$img_name = 'gestvisitimmdigi.jpg';

require_once 'inc/header.php';

?>

<div class="row">
    <div class="s-twelve m-twelve l-ten columns">
        <p>Lors de la préparations des Immersions Digitales 2016 du département MMI de Tarbes, <a href="http://remirobichet.fr/" target="_blank">Rémi Robichet</a> et moi avons à nouveau collaboré à la conception et au développement d’un outil de gestion des visiteurs.</p>
        <figure><img src="/assets/images/portfolio/gestvisitimmdigi.jpg"></figure>
    </div>
</div>
   
<div class="row">
    <div class="s-twelve m-ten l-six columns">
        <p>Nous avions pour mission de concevoir un outil permettant d’enregistrer les visiteurs présents lors des portes ouvertes de l’IUT de Tarbes. Il y a différentes informations disponibles pour enregistrer un utilisateur en base de données telles que son nom, son prénom, son site web, ses études, une photo et les ateliers qu’il a visité.</p>
        
        <p>Pour le front-end nous avons utilisé le framework CSS et JavaScript Materialize, basé sur le Material Design de Google. Cela nous a permis d’avoir rapidement une interface claire et moderne pour l’outil.</p>
    </div>
    
    <aside class="s-twelve m-ten l-four columns bg-white">
        <p class="no-margin">
            <em>Voir le code :</em>
            <a href="https://github.com/baptvlmr/immersions-digitales-2016" target="_blank" class="button black">GitHub <i class="fa fa-github"></i></a>
        </p>
        
        <p>
            <em>Date :</em> Janvier 2016
        </p>
        
        <p>
            <em>Collaborateur :</em> <a href="http://remirobichet.fr/" target="_blank">Rémi Robichet</a>
        </p>
        
        <p>
            <em>Contexte :</em> DUT MMI (2<sup>ème</sup> année)
        </p>
        
        <p class="no-margin">
            <em>Technologies utilisées :</em>
        </p>
        <ul class="list">
            <li><a href="http://php.net/" target="_blank">PHP</a></li>
            <li>SQL</li>
            <li><a href="http://materializecss.com/" target="_blank">Materialize</a></li>
        </ul>
            
    </aside>
</div>

<div class="row">
    <div class="s-twelve m-six l-five columns">
        <figure><img src="/assets/images/portfolio/gestvisitimmdigi1.png" alt="Edition d'un visiteur - Gestion des visiteurs, Immersions digitales"></figure>
    </div>
    
    <div class="s-twelve m-six l-five columns">
        <figure><img src="/assets/images/portfolio/gestvisitimmdigi2.png" alt="Edition d'un atelier - Gestion des visiteurs, Immersions digitales"></figure>
    </div>
</div>

<?php

require_once 'inc/footer.php';