/* =====================================================================
   RE:ZERO — base de données encyclopédique (contenu vérifié, FR)
   Sources : Re:Zero Wiki (Fandom) & rezerowebnovelfr.wordpress.com
   ===================================================================== */
window.RZ = {};

/* ---------------------------------------------------------------- ŒUVRE */
RZ.work = {
  intro:
    "<em>Re:Zero kara Hajimeru Isekai Seikatsu</em> (Re:Vivre dans un autre monde à partir de zéro) est une série de "+
    "light novels écrite par <strong>Tappei Nagatsuki</strong> et illustrée par <strong>Shinichirō Otsuka</strong>. "+
    "Publiée gratuitement sur le site amateur <em>Shōsetsuka ni Narō</em> à partir du 20 avril 2012, l'œuvre est "+
    "éditée en volumes reliés par MF Bunko J dès janvier 2014. Elle est adaptée en manga, en jeux et en une série "+
    "animée par le studio <strong>White Fox</strong>. Mêlant dark fantasy, drame psychologique et isekai, Re:Zero "+
    "est devenue l'une des séries les plus influentes de sa génération.",
  novel:
    "Le récit original, toujours en cours, est structuré en grands <strong>arcs</strong> plutôt qu'en simples volumes. "+
    "La version web a de l'avance sur les tomes papier et compte aujourd'hui dix arcs principaux, sans compter les "+
    "nombreuses histoires annexes (séries <em>Ex</em> et <em>IF</em>).",
  anime:
    "Diffusé pour la première fois au printemps 2016, l'anime adapte les premiers arcs du light novel. Réalisé par "+
    "Masaharu Watanabe chez White Fox, sur une bande originale de Kenichirō Suehiro, il a connu trois saisons "+
    "(2016, 2020, 2024) ainsi que des OAV et des director's cut.",
  staff: [
    {r:"Auteur", n:"Tappei Nagatsuki"},
    {r:"Illustrateur", n:"Shinichirō Otsuka"},
    {r:"Studio d'animation", n:"White Fox"},
    {r:"Réalisateur (S1-S2)", n:"Masaharu Watanabe"},
    {r:"Composition de la série", n:"Masahiro Yokotani"},
    {r:"Musique", n:"Kenichirō Suehiro"},
    {r:"Éditeur (light novel)", n:"MF Bunko J — Kadokawa"},
  ],
  ost: [
    {tag:"Ouverture · S1", t:"Redo", by:"Konomi Suzuki", q:"Re%3AZero+Redo+Konomi+Suzuki"},
    {tag:"Ouverture · S2", t:"Realize", by:"Konomi Suzuki", q:"Re%3AZero+Realize+Konomi+Suzuki"},
    {tag:"Fin · S1", t:"STYX HELIX", by:"MYTH & ROID", q:"Re%3AZero+STYX+HELIX+MYTH+ROID"},
    {tag:"Fin · S1 (final)", t:"Stay Alive", by:"Emilia (Rie Takahashi)", q:"Re%3AZero+Stay+Alive+Emilia"},
  ],
  films: [
    {y:"2018 · OAV", t:"Memory Snow", d:"Une journée comique et tendre au village d'Earlham, peu après l'arc 3."},
    {y:"2019 · OAV", t:"Le Lien de Glace (Hyōketsu no Kizuna)", d:"Le passé d'Emilia et de l'esprit Puck, avant sa rencontre avec Subaru."},
    {y:"Courts", t:"Re:Petit & parodies", d:"Sketches chibi qui détendent l'atmosphère entre deux drames."},
  ],
  timeline: [
    {y:"Avr. 2012", h:"Naissance sur le web", p:"Tappei Nagatsuki publie le premier chapitre sur Shōsetsuka ni Narō."},
    {y:"2014", h:"Light novel & manga", p:"MF Bunko J édite l'œuvre illustrée par Shinichirō Otsuka ; les adaptations manga suivent."},
    {y:"2016", h:"Anime — Saison 1", p:"White Fox adapte les arcs 1 à 3 (25 épisodes). Phénomène mondial."},
    {y:"2018-2019", h:"OAV", p:"Memory Snow puis Le Lien de Glace prolongent l'univers."},
    {y:"2020", h:"Anime — Saison 2", p:"L'arc 4 : le Sanctuaire, Echidna et le passé d'Emilia."},
    {y:"2024", h:"Anime — Saison 3", p:"L'arc 5 : l'assaut de Pristella par les Archevêques du Péché."},
    {y:"Web", h:"Arcs 6 à 9", p:"La Tour de Pleiades, l'Empire de Vollachia et sa guerre civile — publiés en ligne."},
    {y:"Jan. 2026", h:"Arc 10 — en cours", p:"« Le pays des Rois-Lions » : le récit continue de s'écrire."},
  ],
};

/* ---------------------------------------------------------------- ARCS */
RZ.arcs = [
  {n:1, title:"Le premier jour tumultueux", romaji:"Dotō no Ichinichime", status:"Anime S1",
   summary:"Subaru est transporté dans la capitale de Lugnica et découvre le Return by Death.",
   detail:"Happé hors d'une supérette, Natsuki Subaru atterrit dans la capitale royale de Lugnica. Sauvé d'une agression par une demi-elfe argentée qui se fait appeler Satella, il l'aide à retrouver son insigne volé. La nuit venue, tous deux sont assassinés par la voleuse Elsa — et Subaru se réveille au matin même. Au fil de morts répétées, il comprend les règles cruelles de son unique pouvoir et noue ses premiers liens, dont le chevalier Reinhard."},
  {n:2, title:"La semaine agitée", romaji:"Gekidō no Isshūkan", status:"Anime S1",
   summary:"Au manoir Roswaal, Subaru affronte une malédiction mortelle et sauve Rem.",
   detail:"Recueilli au domaine du margrave Roswaal, Subaru y devient serviteur aux côtés des jumelles Rem et Ram. Des malédictions invisibles le tuent nuit après nuit ; en remontant la piste, il finit par briser le soupçon qui pèse sur lui et, surtout, par sauver Rem de la haine qu'elle se voue à elle-même — lui offrant son célèbre discours « depuis le négatif »."},
  {n:3, title:"Le retour à la capitale", romaji:"Sairai no Ōto", status:"Anime S1",
   summary:"La Baleine Blanche, l'Archevêque de la Paresse Betelgeuse, et l'aveu à Emilia.",
   detail:"Allié aux camps de Crusch et Anastasia, Subaru organise la chasse à la Baleine Blanche, fléau légendaire, avec le vétéran Wilhelm. Puis il déjoue le Culte des Sorcières et son Archevêque de la Paresse, Betelgeuse Romanée-Conti. Porté par tous ceux qu'il a su réunir, il remporte sa première grande victoire et déclare enfin son amour à Emilia."},
  {n:4, title:"Le contrat éternel", romaji:"Eien no Keiyaku", status:"Anime S2",
   summary:"Le Sanctuaire, les épreuves d'Echidna, et le pacte avec Beatrice.",
   detail:"Tiraillé entre le Sanctuaire — refuge de demi-humains scellé par une barrière — et le manoir condamné par une attaque imminente, Subaru affronte la Sorcière de l'Avarice Echidna et ses Épreuves, déjoue le plan de Roswaal, aide Garfiel à vaincre ses peurs et scelle enfin un pacte avec l'esprit Beatrice, qui attendait son « contractant » depuis quatre siècles."},
  {n:5, title:"Les étoiles qui gravent l'histoire", romaji:"Reki o Kizamu Hoshiboshi", status:"Anime S3",
   summary:"Pristella, Regulus l'Avarice et la chasse aux Évangiles.",
   detail:"Réuni avec les autres camps royaux dans la cité de l'eau Pristella, Subaru affronte simultanément trois Archevêques — Regulus l'Avarice, Sirius la Colère et Capella la Luxure — venus s'emparer des Évangiles. C'est un sommet de coopération entre rivaux, où chaque héros révèle sa résolution pour sauver une ville prise en otage."},
  {n:6, title:"Le couloir des souvenirs", romaji:"Kioku no Kairō", status:"Web",
   summary:"La Tour de Pleiades, l'amnésie et les gardiens du savoir.",
   detail:"Dans le désert d'Augria se dresse la Tour de Pleiades, dépôt du savoir interdit gardé par trois esprits. Frappé d'amnésie par l'Archevêque de la Gourmandise, Subaru doit déjouer la fratrie de la Gourmandise et survivre aux gardiens pour reconquérir son identité — et celle de Rem, dont le nom a été dévoré."},
  {n:7, title:"Le pays des loups", romaji:"Ōkami no Kuni", status:"Web",
   summary:"L'Empire de Vollachia, un Subaru transformé et de nouveaux compagnons.",
   detail:"Projeté dans l'Empire martial de Vollachia, le corps métamorphosé et séparé de ses alliés, Subaru rencontre l'empereur déchu Vincent et une Rem amnésique mais vivante. En terre hostile où seul le fort survit, il doit se reconstruire un réseau d'alliances de zéro."},
  {n:8, title:"Vincent Vollachia", romaji:"Vincent Vollachia", status:"Web",
   summary:"La reconquête du trône impérial aux côtés de l'empereur déchu.",
   detail:"Au cœur d'une guerre civile déclenchée par un usurpateur, Subaru tisse une alliance improbable — rebelles, généraux et marginaux — pour rendre son trône à Vincent Vollachia et empêcher l'Empire de sombrer dans le chaos."},
  {n:9, title:"La lumière de l'étoile sans nom", romaji:"Na mo Naki Hoshi no Hikari", status:"Web",
   summary:"La guerre impériale de Vollachia atteint son paroxysme.",
   detail:"Les fronts s'embrasent : sacrifices, trahisons et révélations précipitent la guerre de Vollachia vers son dénouement, refermant le diptyque impérial entamé à l'arc 7."},
  {n:10, title:"Le pays des Rois-Lions", romaji:"Shishiō no Kuni", status:"En cours · 2026",
   summary:"L'arc le plus récent, débuté en janvier 2026.",
   detail:"Quatorze ans après le premier chapitre, l'aventure de Subaru entre dans un chapitre encore inédit, écrit en temps réel par Tappei Nagatsuki."},
];

/* ---------------------------------------------------------------- MONDE */
RZ.nations = [
  {tag:"Royaume du Dragon", name:"Lugnica", img:"loc-capital",
   desc:"À l'est du continent, lié par un pacte ancestral au Dragon Volcanica. La nation la plus avancée en magie ; son trône est vacant depuis la mort de la famille royale, d'où la Sélection Royale."},
  {tag:"Saint Empire", name:"Vollachia", img:"loc-vollachia",
   desc:"La plus vaste nation, au sud. Une culture martiale où seul le plus fort survit, dirigée d'une main de fer par l'empereur. Maîtres de l'art du combat."},
  {tag:"Cités-États", name:"Kararagi", img:null,
   desc:"À l'ouest, carrefour du commerce continental, proto-capitaliste et individualiste. Patrie d'Anastasia ; on y parle un dialecte rappelant le Kansai."},
  {tag:"Saint Royaume", name:"Gusteko", img:null,
   desc:"Au nord, terre glaciale et dévote, spécialiste des arts spirituels et des redoutables arts de la malédiction."},
];
RZ.magic = {
  gate:"La magie puise dans le <strong>mana</strong>. Les mages l'extraient de leur « <strong>Porte</strong> » intérieure (surcharger sa Porte est mortel), tandis que les utilisateurs d'<strong>arts spirituels</strong> façonnent le mana de l'atmosphère grâce à un pacte avec un esprit.",
  attributes:[
    {name:"Feu", spell:"Goa", desc:"Du modeste Fula d'allumage au dévastateur Al Goa — l'art de Ram et de Roswaal."},
    {name:"Eau", spell:"Huma", desc:"Lances de glace et magie curative ; la voie privilégiée des guérisseurs."},
    {name:"Vent", spell:"Fula", desc:"Lames d'air invisibles, déplacement, défense. Le tout premier sort de Subaru."},
    {name:"Terre", spell:"Dona", desc:"Murs, pics de roche et fortifications instantanées."},
    {name:"Yin (invisible)", spell:"El Minya", desc:"L'attribut rare de Beatrice ; perce et fige par l'obscurité."},
    {name:"Yang (invisible)", spell:"Shamak", desc:"Lumière, brouillard et illusions ; dérobe les sens de l'ennemi."},
  ],
  blessings:[
    {name:"Bénédictions de Reinhard", type:"Innombrables", desc:"Le Sword Saint en cumule un nombre inconnu : Soleil, Vent, Phénix (résurrection)…"},
    {name:"Annulation des Ténèbres", type:"Anti-Yin", desc:"Annule 80 % de la magie Yin dirigée contre son porteur."},
    {name:"Désliage de Lumière", type:"Anti-Yang", desc:"Transfère 80 % de la magie Yang reçue vers une autre cible."},
    {name:"Dragon Terrestre", type:"Monture", desc:"Permet aux dragons de carrosse de comprendre les ordres et de courir sans fatigue."},
  ],
};
RZ.cult = {
  intro:"Une secte vouée au retour de la Sorcière de l'Envie, Satella. Chaque <strong>Archevêque du Péché</strong> porte un « Facteur de Sorcière » qui s'épanouit en une <strong>Authorité</strong> liée à son péché. Les Archevêques se haïssent entre eux et opèrent presque toujours seuls.",
  archbishops:[
    {sin:"傲慢 · Orgueil", holder:"Stride Vollachia", auth:"Tué il y a ~40 ans par le Dragon du Fléau, Valgren."},
    {sin:"強欲 · Avarice", holder:"Regulus Corneas", auth:"« Le Monde Immobile » : tant qu'il retient son souffle, rien ne peut l'altérer — invulnérabilité totale."},
    {sin:"憤怒 · Colère", holder:"Sirius Romanée-Conti", auth:"Contamination émotionnelle : propage et amplifie les sentiments d'une foule entière."},
    {sin:"暴食 · Gourmandise", holder:"Ley · Roy · Louis", auth:"Une fratrie qui dévore « noms » et « souvenirs », effaçant l'existence de leurs victimes."},
    {sin:"色欲 · Luxure", holder:"Capella Emerada Lugunica", auth:"Transforme par malédiction n'importe quel être en monstre."},
    {sin:"怠惰 · Paresse", holder:"Petelgeuse Romanée-Conti", auth:"« La Main Invisible » : des bras invisibles qui broient et empalent."},
    {sin:"嫉妬 · Envie", holder:"— (aucun Archevêque)", auth:"Le péché de la fondatrice Satella elle-même ; nul mortel n'en porte l'Authorité."},
  ],
  witches:[
    {name:"Satella — Envie", desc:"La plus redoutée, qui a dévoré les six autres. Scellée."},
    {name:"Echidna — Avarice", desc:"Sorcière du savoir et de la curiosité, hôtesse du Salon des Sorcières."},
    {name:"Daphne — Gourmandise", desc:"Créatrice des Trois Grands Fléaux."},
    {name:"Sekhmet — Paresse", desc:"Une puissance immobile et écrasante."},
    {name:"Minerva — Colère", desc:"Paradoxalement, ses coups soignent."},
    {name:"Carmilla — Luxure / Typhon — Orgueil", desc:"Le désir trompeur et l'innocence cruelle du jugement."},
  ],
};
RZ.beasts = [
  {tag:"Trois Grands Fléaux", name:"La Baleine Blanche", img:"beast-whale",
   desc:"Léviathan de brume créé par la Sorcière de la Gourmandise. Son brouillard efface jusqu'au souvenir de l'existence de ses victimes."},
  {tag:"Trois Grands Fléaux", name:"Le Grand Lapin", img:"beast-rabbit",
   desc:"Une nuée de petits lapins à la faim infinie qui dévorent tout — chair, os et mana — en quelques instants."},
  {tag:"Trois Grands Fléaux", name:"Le Serpent Noir", img:"beast-serpent",
   desc:"Bête insaisissable porteuse d'une malédiction mortelle ; la plus mystérieuse des trois."},
  {tag:"Meute", name:"Les Wolgarm", img:null,
   desc:"Loups-démons chassant en meute, liés par un mana de malédiction ; un fléau pour les villages isolés."},
  {tag:"Monture", name:"Les Dragons Terrestres", img:null,
   desc:"Reptiles dociles tractant les carrosses ; leur Bénédiction leur permet de courir sans fatigue."},
  {tag:"Origine", name:"Les Bêtes maudites", img:null,
   desc:"Animaux ordinaires corrompus par un excès de mana, devenus hostiles, difformes et avides de chair."},
];
RZ.locations = [
  {tag:"Royaume de Lugnica", name:"La Capitale Royale", img:"loc-capital",
   desc:"Cœur du Royaume du Dragon : marchés, bas-fonds et salle du trône. Théâtre de la toute première boucle de Subaru et de la Sélection Royale."},
  {tag:"Terre gelée", name:"La Forêt d'Elior", img:"loc-elior",
   desc:"Village natal d'Emilia, figé dans la glace par Puck pour la protéger ; le berceau gelé de son passé."},
  {tag:"Arc 4", name:"Le Sanctuaire", img:"loc-sanctuary",
   desc:"Refuge de demi-humains scellé par une barrière ; on n'en sort qu'en surmontant les Épreuves de la Tombe d'Echidna."},
  {tag:"Cité de l'eau", name:"Pristella", img:"loc-pristella",
   desc:"Ville-port sillonnée de canaux, prise d'assaut par les Archevêques du Péché en quête des Évangiles (arc 5)."},
  {tag:"Désert d'Augria", name:"La Tour de Pleiades", img:"loc-pleiades",
   desc:"Tour de surveillance gardée par trois esprits gardiens, dépôt du savoir interdit ; cœur de l'arc 6."},
  {tag:"Sables mouvants", name:"Le Désert d'Augria", img:"loc-augria",
   desc:"Mer de sable changeante infestée de vers géants, isolant la Tour de Pleiades du reste du monde."},
  {tag:"Le Sud", name:"L'Empire de Vollachia", img:"loc-vollachia",
   desc:"Vaste empire martial où seul le fort règne ; décor des arcs 7 à 9, sous l'empereur Vincent."},
];
RZ.terms = [
  {t:"Return by Death", d:"Le pouvoir de Subaru : à sa mort, le temps recule jusqu'à un « point de sauvegarde ». En parler invoque l'ombre de la Sorcière, qui broie son cœur."},
  {t:"Facteur de Sorcière", d:"Graine de pouvoir issue d'une Sorcière qui, en mûrissant chez un hôte, s'épanouit en une Authorité."},
  {t:"Authorité", d:"Capacité surnaturelle liée à un péché, portée par les Archevêques du Culte et certaines Sorcières."},
  {t:"Bénédiction Divine (Kago)", d:"Don inné indépendant du mana ; Reinhard en cumule un nombre incalculable."},
  {t:"Od Laguna", d:"La « source » du monde : un vaste réservoir de mana et de souvenirs collectifs où retournent les âmes."},
  {t:"La Porte (Gate)", d:"Organe interne par lequel un mage puise et convertit le mana en sorts ; la surcharger est mortel."},
  {t:"Arts spirituels", d:"Magie pratiquée via un pacte avec un esprit, puisant le mana de l'atmosphère plutôt que de soi."},
  {t:"Évangile", d:"Livre de prophéties (du Culte ou d'Echidna) qui guide son porteur en révélant des bribes d'avenir."},
  {t:"Les Épreuves", d:"Rituel du Sanctuaire imposé par Echidna : affronter tour à tour son passé, son présent et son futur."},
  {t:"Odeur de la Sorcière", d:"Parfum résiduel sur Subaru, marque de sa mort et de son lien à Satella ; il attire les fidèles du Culte."},
  {t:"Cor Leonis", d:"L'autorité née des liens de Subaru : il ressent l'état de ses alliés et les soutient à distance."},
  {t:"Sélection Royale", d:"Compétition pour désigner la prochaine souveraine de Lugnica, opposant cinq candidates et leurs chevaliers."},
];
RZ.ifroutes = [
  {tag:"怠惰 · Sloth IF", title:"La voie de la Paresse", desc:"Et si Subaru, brisé par les échecs, avait cessé de lutter ? Il sombre et hérite du pouvoir de l'Archevêque de la Paresse — devenant l'ennemi qu'il combattait."},
  {tag:"強欲 · Greed IF", title:"Le thé d'Echidna", desc:"Au Sanctuaire, Echidna lui tend la main : rester hors du temps, à l'abri de la douleur. Et s'il acceptait, possédé par le savoir et la Sorcière ?"},
  {tag:"From Zero · Rem IF", title:"Partir avec Rem", desc:"« Recommençons depuis le négatif. » Et si Subaru avait fui le manoir avec Rem ? Une vie simple — et tout le reste du monde, perdu."},
];
