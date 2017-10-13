<?php

// Portfolio project informations
$title    = 'Jeux CreateJS';
$img_name = 'jeux-createjs.jpg';

require_once 'inc/header.php';

?>

<div class="row">
    <div class="s-twelve m-twelve l-ten columns">
        <p>Lors de mon année de LP Création Multimédia, j’ai eu des cours de programmation de l’animation qui ont aboutis sur la créations de 2 jeux navigateurs réalisés avec la bibliothèque CreateJS.</p>
        <figure><img src="/assets/images/portfolio/jeux-createjs.jpg"></figure>
    </div>
</div>
   
<div class="row">
    <div class="s-twelve m-ten l-six columns">
        <p class="no-margin">Le premier jeu a été fait lors des cours afin de nous permettre de nous exercer. Les graphismes et le fonctionnement étant préalablement fournis, l’idée était de se concentrer sur l’apprentissage de CreateJS. Le résultat est un jeu de plateforme où l’on contrôle un personnage qui doit récupérer une clé tout en évitant des obstacles tombants du ciel.</p>
        <p><a href="/portfolio/jeux/jeu1/index.html" class="button black">Voir le premier jeu</a></p>
        
        <p class="no-margin">Le deuxième est une création personnelle que j’ai dû réaliser pour l’évaluation du cours de programmation de l’animation. Ollie est un endless-run où l'on joue un skater devant faire des ollies (saut en skate) par dessus divers obstacles. Les objets arrivent de la droite et pour les esquiver il faut appuyer sur la barre espace et la relâcher lorsque l'on souhaite sauter. Plus la pression de la barre espace est longue, plus le ollie sera haut.</p>
        <p><a href="/portfolio/jeux/ollie/index.html" class="button black">Voir Ollie</a></p>
    </div>
    
    <aside class="s-twelve m-ten l-four columns bg-white">
        
        <p>
            <em>Date :</em> Mars-Avril 2017
        </p>
        
        <p>
            <em>Contexte :</em> LP CM
        </p>
        
        <p class="no-margin">
            <em>Technologies utilisées :</em>
        </p>
        <ul class="list">
            <li><a href="http://createjs.com/" target="_blank">CreateJS</a></li>
        </ul>
            
    </aside>
</div>

<?php

require_once 'inc/footer.php';