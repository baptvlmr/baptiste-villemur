<?php

// Portfolio project informations
$title    = 'TPF Blog';
$img_name = 'tpf-blog.png';

require_once 'inc/header.php';

?>

<div class="row">
    <div class="s-twelve m-twelve l-ten columns">
        <p>Ce CMS, conçu et développé avec <a href="http://remirobichet.fr/" target="_blank">Rémi Robichet</a>, est un projet réalisé dans le cadre de ma deuxième année de DUT MMI.</p>
        <figure><img src="/assets/images/portfolio/tpf-blog.png"></figure>
    </div>
</div>
   
<div class="row">
    <div class="s-twelve m-ten l-six columns">
        <p>Nous avions pour mission de réaliser en PHP et SQL un CMS orienté blog permettant de créer et modifier des articles et choisir à quelles catégories ils appartiennent. Chaque article se compose d’un titre, d’un texte et d’une image.</p>
        <p>En plus de cela le CMS dispose d’un système de gestion des utilisateurs avec différents rôles (administrateur, modérateur, rédacteur et utilisateur). Seul un administrateur peut modifier le rôle d’un utilisateur.</p>
        <p>Pour ce qui est de la partie front-end nous avons utilisé Isotope afin de permettre un tri rapide et efficace des catégories d’articles.</p>
    </div>
    
    <aside class="s-twelve m-ten l-four columns bg-white">
        <p class="no-margin">
            <em>Voir le code :</em>
            <a href="https://github.com/RemiRbt/tpfblog" target="_blank" class="button black">GitHub <i class="fa fa-github"></i></a>
        </p>
        
        <p>
            <em>Date :</em> Décembre 2015
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
            <li><a href="https://isotope.metafizzy.co/" target="_blank">Isotope</a></li>
        </ul>
            
    </aside>
</div>

<?php

require_once 'inc/footer.php';