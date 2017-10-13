<?php

// Portfolio project informations
$title    = 'Site Chill Masters';
$img_name = 'site-chill-masters.png';

require_once 'inc/header.php';

?>

<div class="row">
    <div class="s-twelve m-twelve l-ten columns">
        <p>Lors de mon année de LP CM, j’ai effectué un stage dans l’association toulousaine <a href="https://www.chillmasters.fr" target="_blank">Chill Masters</a>. L’une de mes missions de stage était la refonte de leur site.</p>
        <figure><img src="/assets/images/portfolio/site-chill-masters.png"></figure>
    </div>
</div>
   
<div class="row">
    <div class="s-twelve m-ten l-six columns">
        <p>Les activités de Chill Masters étant très variées (promotion et production musicale, événementiel, prestations audiovisuelles) le site doit permettre de tout regrouper un seul et même endroit et ainsi permettre à quiconque de comprendre ce que fait l’association. Un autre point important est la mise en avant du label afin qu’il dispose d’une meilleure visibilité. En plus de cela, l’audience de Chill Masters étant principalement non francophone, il est essentiel que le site soit disponible en français ainsi qu’en anglais.</p>
        
        <p>Le site devra alors comprendre une galerie vidéo et une galerie photo sous forme d’album, des présentations pour les artistes et les releases du label et des événements. Il devra également contenir une partie “Histoire” sous forme d’un storytelling avec des animations afin d’expliquer comment l’association est devenue ce qu’elle est aujourd’hui.</p>
        
        <p>J’ai fait le choix de développer un thème WordPress car c’est un CMS que les membres de l’association savent utiliser. Afin de faciliter le développement j’ai utilisé le plugin Advanced Custom Field qui permet, grâce à son interface graphique, de facilement ajouter des champs personnalisés (texte, date, fichier) aux interfaces de création de WordPress.</p>
        
        <p>Le projet étant toujours en cours, le site <a href="https://www.chillmasters.fr" target="_blank">www.chillmasters.fr</a> contient pour le moment uniquement une page indiquant que le site est en construction ainsi qu’un champ permettant au visiteur d’enregistrer son adresse mail afin d’être prévenu de la mise en ligne du nouveau site.</p>
    </div>
    
    <aside class="s-twelve m-ten l-four columns bg-white">
        <p class="no-margin">
            <em>Voir le site :</em>
            <a href="https://www.chillmasters.fr" target="_blank" class="button black">Chill Masters <i class="fa fa-globe "></i></a>
        </p>
        
        <p>
            <em>Date :</em> Depuis Avril 2017
        </p>
        
        <p>
            <em>Contexte :</em> Stage LP CM
        </p>
        
        <p class="no-margin">
            <em>Technologies utilisées :</em>
        </p>
        <ul class="list">
            <li><a href="https://wordpress.org/" target="_blank">WordPress</a></li>
            <li><a href="https://www.advancedcustomfields.com/" target="_blank">Advanced Custom Fields</a></li>
            <li><a href="http://listjs.com/" target="_blank">List.js</a></li>
            <li><a href="https://github.com/ariona/hover3d" target="_blank">Hover3D</a></li>
        </ul>
            
    </aside>
</div>

<?php

require_once 'inc/footer.php';