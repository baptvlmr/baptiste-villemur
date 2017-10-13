<?php

// Portfolio project informations
$title    = 'Application hybride Chill Masters';
$img_name = 'app-chill-masters-mockup.png';

require_once 'inc/header.php';

?>

<div class="row">
    <div class="s-twelve m-twelve l-ten columns">
        <p>Lors de mon année de LP CM, j’ai effectué un stage dans l’association toulousaine <a href="https://www.chillmasters.fr" target="_blank">Chill Masters</a>. L’une de mes missions de stage était le développement d’une application mobile disponible sur Android et iOS. Elle est pour le moment toujours en développement.</p>
        <figure><img src="/assets/images/portfolio/app-chill-masters-mockup.png"></figure>
    </div>
</div>
   
<div class="row">
    <div class="s-twelve m-ten l-six columns">
        <p>L’application doit pouvoir permettre d’écouter les sons du label Chill Masters Records, ceux qu’ils partagent, de les ajouter à une playlist “Favoris” et également d’en créer d’autres une fois que l’utilisateur est connecté. En plus de cela l’application doit donner des informations sur les événements et les vidéos Chill Masters.</p>
        
        <p>J’ai choisi d’utiliser le framework Ionic afin de développer une application hybride et ainsi la compiler pour Android et iOS. J’ai également fait le choix de ce framework car il propose tout un tas de composants et d’interactions classiques d’application mobile. Cela permet de se concentrer un maximum sur les fonctionnalités propres à l’application plutôt que de perdre du temps sur des choses communes.</p>
        
        <p>J’ai fait le choix de développer un thème WordPress car c’est un CMS que les membres de l’association savent utiliser. Afin de faciliter le développement j’ai utilisé le plugin Advanced Custom Field qui permet, grâce à son interface graphique, de facilement ajouter des champs personnalisés (texte, date, fichier) aux interfaces de création de WordPress.</p>
        
        <p>J’ai codé deux versions de l’application dans le but de me former sur Ionic. Une première version pour m’entraîner à la programmation avec Angular et Ionic. Le but de cette première version était de juste construire une application capable de récupérer les musiques du compte Soundcloud Chill Masters, de les lire et de les ajouter au favoris. J’ai pour cela utilisé le SDK JS de Soundcloud et codé de moi-même un player audio. L’autre version de l’application est juste une version statique de l’application, sans fonctionnalités mais navigable afin de m’entraîner aux principes de navigation d’Ionic et de voir comment bien utiliser les composants d’UI préconçus. L’idée finale est de mêler ces deux applications pour obtenir le résultat final souhaité.</p>
    </div>
    
    <aside class="s-twelve m-ten l-four columns bg-white">        
        <p>
            <em>Date :</em> Depuis Mai 2017
        </p>
        
        <p>
            <em>Contexte :</em> Stage LP CM
        </p>
        
        <p class="no-margin">
            <em>Technologies utilisées :</em>
        </p>
        <ul class="list">
            <li><a href="https://ionicframework.com/" target="_blank">Ionic</a></li>
            <li><a href="https://angular.io/" target="_blank">Angular</a></li>
            <li><a href="http://listjs.com/" target="_blank">List.js</a></li>
            <li><a href="https://developers.soundcloud.com/docs/api/sdks" target="_blank">SoundCloud JavaScript SDK</a></li>
        </ul>
            
    </aside>
</div>

<?php

require_once 'inc/footer.php';