<?php

//var_dump($_SERVER);
//die();

?>
<!DOCTYPE html>
<html lang="fr">

<head>

    <!-- PAGE NEEDS -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/assets/images/bv-logo-icon.png">

    <title>
        <?= $title ?> &ndash; BAPTISTE VILLEMUR</title>

    <!-- PAGE INFOS -->
    <meta name="author" content="Baptiste Villemur">
    <meta name="description" content="Site personnel de Baptiste Villemur, étudiant en licence professionnelle Création Multimédia.">
    <meta name="keywords" content="baptiste villemur, baptiste, villemur, étudiant, etudiant, multimédia, multimedia, lpcm, lp cm, lp, cm, dut mmi, dut, mmi, iut, tarbes, la rochelle, webdesign, developpement, web, infographie">
    <meta name="robots" content="noindex, nofollow">

    <meta name="theme-color" content="#3454d1">

    <!-- FACEBOOK -->
    <meta property="og:title" content="BAPTISTE VILLEMUR">
    <meta property="og:site_name" content="Site personnel de Baptiste Villemur">
    <meta property="og:url" content="http://baptistevillemur.fr">
    <meta property="og:description" content="Site personnel de Baptiste Villemur, étudiant en licence professionnelle Création Multimédia.">
    <meta property="og:image" content="http://baptistevillemur/V3/images/bv-logo.png">
    <meta property="og:type" content="website">

    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/reset.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/wolf.css">
    <link rel="stylesheet" href="/assets/css/portfolio.css">

    <!-- FONTS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans:400,500">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cutive+Mono">

</head>

<!--

    Welcome on my source code ! Have fun checking...

                           ___             ___
         _____            /\  \           /\  \
        /::\  \          /::\  \         /::\  \         ___
       /:/\:\  \        /:/\:\  \       /:/\:\__\       /\__\
      /:/ /::\__\      /:/ /::\  \     /:/ /:/  /      /:/  /
     /:/_/:/\:|__|    /:/_/:/\:\__\   /:/_/:/  /      /:/__/
     \:\/:/ /:/  /    \:\/:/  \/__/   \:\/:/  /      /::\  \
      \::/_/:/  /      \::/__/         \::/__/      /:/\:\  \
       \:\/:/  /        \:\  \          \:\  \      \/__\:\  \
        \::/  /          \:\__\          \:\__\          \:\__\
         \/__/            \/__/           \/__/           \/__/
                                           ___             ___
          ___                             /\  \           /\  \
         /\  \                           |::\  \         /::\  \
         \:\  \                          |:|:\  \       /:/\:\__\
          \:\  \       ___     ___     __|:|\:\  \     /:/ /:/  /
      ___  \:\__\     /\  \   /\__\   /::::|_\:\__\   /:/_/:/__/___
     /\  \ |:|  |     \:\  \ /:/  /   \:\~~\  \/__/   \:\/:::::/  /
     \:\  \|:|  |      \:\  /:/  /     \:\  \          \::/~~/~~~~
      \:\__|:|__|       \:\/:/  /       \:\  \          \:\~~\
       \::::/__/         \::/  /         \:\__\          \:\__\
        ~~~~              \/__/           \/__/           \/__/

-->

<body>
    
    <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "<?= $_SERVER['HTTP_REFERER'] ?>#portfolio",
              "name": "Portfolio"
            }
          },{
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "<?= $_SERVER['HTTP_REFERER'] ?>portfolio/<?= basename($_SERVER["SCRIPT_FILENAME"], '.php'); ?>",
              "name": "<?= $title ?>",
              "image": "<?= $_SERVER['HTTP_REFERER'] ?>assets/images/portfolio/<?= $img_name ?>"
            }
          }]
        }
    </script>

    <!-- NAV -->
    <nav id="nav">
        <div class="bar row s-full-width m-full-width l-full-width vertical-align">
            <div class="s-twelve m-twelve l-twelve columns">
                <a href="/">
                    <h1 class="txt-center">Baptiste <img src="/assets/images/bv-logo.svg" alt="Logo"> Villemur</h1>
                </a>
            </div>
        </div>
    </nav>
    <!-- END NAV -->

    <header id="header">
        <div class="row">
            <div class="s-twelve m-ten l-ten columns">
                <p class="back"><a href="/#portfolio"><i class="fa fa-chevron-left"></i> Retour au portfolio</a></p>

                <h2><?= $title ?></h2>
            </div>
        </div>
    </header>
    
    <main>
