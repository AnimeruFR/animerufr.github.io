/* =====================================================================
   RE:ZERO — base de données encyclopédique (contenu vérifié, FR)
   Sources : Re:Zero Wiki (Fandom) & rezerowebnovelfr.wordpress.com
   ===================================================================== */
export const RZ = {};

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
    "Masaharu Watanabe (S1-S2) puis Masahiro Shinohara chez White Fox, sur une bande originale de Kenichirō Suehiro, "+
    "il compte quatre saisons (2016, 2020, 2024, 2026 — en cours) ainsi que des OAV et des director's cut.",
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
    {y:"Avr. 2026", h:"Anime — Saison 4", p:"L'arc 6 : la Tour de Pleiades. 19 épisodes annoncés, diffusion hebdomadaire en cours."},
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
  {n:6, title:"Le couloir des souvenirs", romaji:"Kioku no Kairō", status:"Anime S4 · 2026",
   summary:"La Tour de Pleiades, l'amnésie et les gardiens du savoir.",
   detail:"Dans le désert d'Augria se dresse la Tour de Pleiades, dépôt du savoir interdit gardé par trois esprits. Frappé d'amnésie par l'Archevêque de la Gourmandise, Subaru doit déjouer la fratrie de la Gourmandise et survivre aux gardiens pour reconquérir son identité — et celle de Rem, dont le nom a été dévoré."},
  {n:7, title:"Le pays des loups", romaji:"Ōkami no Kuni", status:"Web",
   summary:"L'Empire de Vollachia, un Subaru transformé et de nouveaux compagnons.",
   detail:"Projeté dans l'Empire martial de Vollachia, le corps métamorphosé et séparé de ses alliés, Subaru rencontre l'empereur déchu Vincent et une Rem amnésique mais vivante. En terre hostile où seul le fort survit, il doit se reconstruire un réseau d'alliances de zéro."},
  {n:8, title:"Vincent Vollachia", romaji:"Vincent Vollachia", status:"Web",
   summary:"La reconquête du trône impérial aux côtés de l'empereur déchu.",
   detail:"Au cœur d'une guerre civile déclenchée par un usurpateur, Subaru tisse une alliance improbable — rebelles, généraux et marginaux — pour rendre son trône à Vincent Vollachia et empêcher l'Empire de sombrer dans le chaos."},
  {n:9, title:"La lumière de l'étoile sans nom", romaji:"Na mo Naki Hoshi no Hikari", status:"Web",
   summary:"L'après-guerre, le Livre des Morts — et la vérité d'Aldebaran.",
   detail:"Le Grand Désastre passé, l'Empire se reconstruit et les gens de Lugnica reprennent la route du royaume. Mais l'escorte d'Al vers la Tour de Pleiades tourne au piège : Subaru, capturé et scellé, découvre enfin qui est l'autre invoqué venu du Japon — et ce qu'Aldebaran est prêt à détruire pour « sauver » le monde."},
  {n:10, title:"Le pays des Rois-Lions", romaji:"Shishiō no Kuni", status:"En cours · 2026",
   summary:"L'arc le plus récent, débuté en janvier 2026.",
   detail:"Quatorze ans après le premier chapitre, l'aventure de Subaru entre dans un chapitre encore inédit, écrit en temps réel par Tappei Nagatsuki."},
];

/* ---------------------------------------------------------------- MONDE */
/* map = [lat, lng] sur la carte Leaflet (CRS.Simple, bornes 0-1000, origine en bas) */
RZ.nations = [
  {id:"nation-lugnica", tag:"Royaume du Dragon", name:"Lugnica", img:"loc-capital", map:[556, 728],
   desc:"À l'est du continent, lié par un pacte ancestral au Dragon Volcanica. La nation la plus avancée en magie ; son trône est vacant depuis la mort de la famille royale, d'où la Sélection Royale."},
  {id:"nation-vollachia", tag:"Saint Empire", name:"Vollachia", img:"loc-vollachia", map:[326, 523],
   desc:"La plus vaste nation, au sud. Une culture martiale où seul le plus fort survit, dirigée d'une main de fer par l'empereur. Maîtres de l'art du combat."},
  {id:"nation-kararagi", tag:"Cités-États", name:"Kararagi", img:null, map:[546, 234],
   desc:"À l'ouest, carrefour du commerce continental, proto-capitaliste et individualiste. Patrie d'Anastasia ; on y parle un dialecte rappelant le Kansai."},
  {id:"nation-gusteko", tag:"Saint Royaume", name:"Gusteko", img:null, map:[805, 498],
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
    {arc:7, sin:"傲慢 · Orgueil", holder:"Stride Vollachia", auth:"Tué il y a ~40 ans par le Dragon du Fléau, Valgren."},
    {arc:5, sin:"強欲 · Avarice", holder:"Regulus Corneas", auth:"« Le Monde Immobile » : tant qu'il retient son souffle, rien ne peut l'altérer — invulnérabilité totale."},
    {arc:5, sin:"憤怒 · Colère", holder:"Sirius Romanée-Conti", auth:"Contamination émotionnelle : propage et amplifie les sentiments d'une foule entière."},
    {arc:5, sin:"暴食 · Gourmandise", holder:"Ley · Roy · Louis", auth:"Une fratrie qui dévore « noms » et « souvenirs », effaçant l'existence de leurs victimes."},
    {arc:5, sin:"色欲 · Luxure", holder:"Capella Emerada Lugunica", auth:"Transforme par malédiction n'importe quel être en monstre."},
    {arc:3, sin:"怠惰 · Paresse", holder:"Petelgeuse Romanée-Conti", auth:"« La Main Invisible » : des bras invisibles qui broient et empalent."},
    {sin:"嫉妬 · Envie", holder:"— (aucun Archevêque)", auth:"Le péché de la fondatrice Satella elle-même ; nul mortel n'en porte l'Authorité."},
  ],
  witches:[
    {name:"Satella — Envie", desc:"La plus redoutée, qui a dévoré les six autres. Scellée."},
    {arc:4, name:"Echidna — Avarice", desc:"Sorcière du savoir et de la curiosité, hôtesse du Salon des Sorcières."},
    {arc:4, name:"Daphne — Gourmandise", desc:"Créatrice des Trois Grands Fléaux."},
    {arc:4, name:"Sekhmet — Paresse", desc:"Une puissance immobile et écrasante."},
    {arc:4, name:"Minerva — Colère", desc:"Paradoxalement, ses coups soignent."},
    {arc:4, name:"Carmilla — Luxure / Typhon — Orgueil", desc:"Le désir trompeur et l'innocence cruelle du jugement."},
  ],
};
RZ.beasts = [
  {arc:3, tag:"Trois Grands Fléaux", name:"La Baleine Blanche", img:"beast-whale",
   desc:"Léviathan de brume créé par la Sorcière de la Gourmandise. Son brouillard efface jusqu'au souvenir de l'existence de ses victimes."},
  {arc:4, tag:"Trois Grands Fléaux", name:"Le Grand Lapin", img:"beast-rabbit",
   desc:"Une nuée de petits lapins à la faim infinie qui dévorent tout — chair, os et mana — en quelques instants."},
  {arc:4, tag:"Trois Grands Fléaux", name:"Le Serpent Noir", img:"beast-serpent",
   desc:"Bête insaisissable porteuse d'une malédiction mortelle ; la plus mystérieuse des trois."},
  {arc:2, tag:"Meute", name:"Les Wolgarm", img:null,
   desc:"Loups-démons chassant en meute, liés par un mana de malédiction ; un fléau pour les villages isolés."},
  {tag:"Monture", name:"Les Dragons Terrestres", img:null,
   desc:"Reptiles dociles tractant les carrosses ; leur Bénédiction leur permet de courir sans fatigue."},
  {tag:"Origine", name:"Les Bêtes maudites", img:null,
   desc:"Animaux ordinaires corrompus par un excès de mana, devenus hostiles, difformes et avides de chair."},
];
RZ.locations = [
  {id:"loc-capital", tag:"Royaume de Lugnica", name:"La Capitale Royale", img:"loc-capital", map:[556, 728],
   desc:"Cœur du Royaume du Dragon : marchés, bas-fonds et salle du trône. Théâtre de la toute première boucle de Subaru et de la Sélection Royale."},
  {id:"loc-manoir", arc:2, tag:"Domaine Mathers", name:"Le manoir Roswaal", img:null, map:[565, 459],
   desc:"La résidence du margrave Roswaal L. Mathers, où Subaru devient domestique : la Bibliothèque interdite de Beatrice, les jumelles Rem et Ram, et le village d'Earlham en contrebas."},
  {id:"loc-arbre", arc:3, tag:"Grand-route de Lifaus", name:"Le grand arbre de Flugel", img:null, map:[687, 752],
   desc:"L'arbre gigantesque planté, dit-on, par le Sage Flugel il y a quatre siècles. C'est à son pied que se joue la bataille contre la Baleine Blanche."},
  {id:"loc-elior", arc:4, tag:"Terre gelée", name:"La Forêt d'Elior", img:"loc-elior", map:[507, 586],
   desc:"Village natal d'Emilia, figé dans la glace ; le berceau gelé de son passé."},
  {id:"loc-sanctuaire", arc:4, tag:"Arc 4", name:"Le Sanctuaire", img:"loc-sanctuary", map:[530, 430],
   desc:"Refuge de demi-humains scellé par une barrière ; on n'en sort qu'en surmontant les Épreuves de la Tombe d'Echidna."},
  {id:"loc-pristella", arc:5, tag:"Cité de l'eau", name:"Pristella", img:"loc-pristella", map:[600, 484],
   desc:"Ville-port sillonnée de canaux, prise d'assaut par les Archevêques du Péché en quête des Évangiles (arc 5)."},
  {id:"loc-tour", arc:6, tag:"Désert d'Augria", name:"La Tour de Pleiades", img:"loc-pleiades", map:[430, 855],
   desc:"Tour de surveillance gardée par trois esprits gardiens, dépôt du savoir interdit ; cœur de l'arc 6."},
  {id:"loc-augria", arc:6, tag:"Sables mouvants", name:"Le Désert d'Augria", img:"loc-augria", map:[470, 800],
   desc:"Mer de sable changeante infestée de vers géants, isolant la Tour de Pleiades du reste du monde."},
  {id:"loc-vollachia", arc:7, tag:"Le Sud", name:"L'Empire de Vollachia", img:"loc-vollachia", map:[326, 523],
   desc:"Vaste empire martial où seul le fort règne ; décor des arcs 7 à 9, sous l'empereur Vincent."},
  {id:"loc-chaosflame", arc:7, tag:"Cité démoniaque", name:"Chaosflame", img:null, map:[228, 640],
   desc:"La « cité démoniaque » du sud de l'Empire, refuge des demi-humains sous la protection de Yorna Mishigure et de son château de Lapis écarlate."},
];
RZ.terms = [
  {t:"Return by Death", d:"Le pouvoir de Subaru : à sa mort, le temps recule jusqu'à un « point de sauvegarde ». En parler invoque l'ombre de la Sorcière, qui broie son cœur."},
  {arc:3, t:"Facteur de Sorcière", d:"Graine de pouvoir issue d'une Sorcière qui, en mûrissant chez un hôte, s'épanouit en une Authorité."},
  {arc:3, t:"Authorité", d:"Capacité surnaturelle liée à un péché, portée par les Archevêques du Culte et certaines Sorcières."},
  {t:"Bénédiction Divine (Kago)", d:"Don inné indépendant du mana ; Reinhard en cumule un nombre incalculable."},
  {arc:4, t:"Od Laguna", d:"La « source » du monde : un vaste réservoir de mana et de souvenirs collectifs où retournent les âmes."},
  {t:"La Porte (Gate)", d:"Organe interne par lequel un mage puise et convertit le mana en sorts ; la surcharger est mortel."},
  {t:"Arts spirituels", d:"Magie pratiquée via un pacte avec un esprit, puisant le mana de l'atmosphère plutôt que de soi."},
  {arc:3, t:"Évangile", d:"Livre de prophéties (du Culte ou d'Echidna) qui guide son porteur en révélant des bribes d'avenir."},
  {arc:4, t:"Les Épreuves", d:"Rituel du Sanctuaire imposé par Echidna : affronter tour à tour son passé, son présent et son futur."},
  {arc:2, t:"Odeur de la Sorcière", d:"Parfum résiduel sur Subaru, marque de sa mort et de son lien à Satella ; il attire les fidèles du Culte."},
  {arc:7, t:"Cor Leonis", d:"L'autorité née des liens de Subaru : il ressent l'état de ses alliés et les soutient à distance."},
  {arc:3, t:"Sélection Royale", d:"Compétition pour désigner la prochaine souveraine de Lugnica, opposant cinq candidates et leurs chevaliers."},
];
RZ.ifroutes = [
  {tag:"怠惰 · Sloth IF", title:"La voie de la Paresse", desc:"Et si Subaru, brisé par les échecs, avait cessé de lutter ? Il sombre et hérite du pouvoir de l'Archevêque de la Paresse — devenant l'ennemi qu'il combattait."},
  {tag:"強欲 · Greed IF", title:"Le thé d'Echidna", desc:"Au Sanctuaire, Echidna lui tend la main : rester hors du temps, à l'abri de la douleur. Et s'il acceptait, possédé par le savoir et la Sorcière ?"},
  {tag:"From Zero · Rem IF", title:"Partir avec Rem", desc:"« Recommençons depuis le négatif. » Et si Subaru avait fui le manoir avec Rem ? Une vie simple — et tout le reste du monde, perdu."},
];

/* ---------------------------------------------------------- OBJETS (A3) */
RZ.objects = [
  {name:"L'Épée du Dragon, Reid", d:"L'épée sacrée du tout premier Sword Saint, transmise à travers la lignée Astrea. Elle ne se laisse dégainer que face à un adversaire jugé digne d'elle — Reinhard, son porteur actuel, refuse d'ordinaire de la tirer du fourreau, estimant qu'y recourir serait déjà un échec."},
  {name:"L'insigne royal de Felt", d:"Le joyau dérobé par Felt dans la toute première boucle de Subaru. Ces insignes réagissent au sang des personnes qualifiées pour la Sélection Royale : celui-ci s'illumina au contact de la voleuse des bas-fonds, scellant son destin.", arc:3},
  {name:"Le cristal de Puck", d:"La pierre verte qu'Emilia porte au cou : le « domicile » de l'esprit Puck et le cœur de leur pacte. C'est par ce cristal que le Grand Esprit se manifeste chaque jour — et c'est vers lui qu'il se retire la nuit venue."},
  {name:"Les Évangiles", d:"Livres de prophéties du Culte des Sorcières : les copies défectueuses guident chaque Archevêque en révélant des bribes d'avenir. Il en existe deux originaux — détenus par Roswaal et Beatrice — écrits par la Sorcière de l'Avarice, Echidna.", arc:4},
  {name:"Les miroirs de conversation", d:"Metia jumeaux permettant de converser à distance, chaque miroir montrant ce que reflète son double. Artefacts rarissimes, ils sont surtout connus pour leur usage dans les intrigues du Culte relatées par les récits annexes."},
  {name:"Les Livres des Morts", d:"Les archives de la bibliothèque de la Tour de Pleiades : chaque livre contient la vie entière d'un défunt. Le lire, c'est revivre cette existence de l'intérieur — un savoir vertigineux, aux conséquences parfois irréversibles.", arc:6},
  {name:"Cristaux-mémoire (pyroxènes)", d:"Pierres précieuses capables d'emmagasiner du mana ou des souvenirs. Les plus pures servent d'habitacle aux esprits."},
  {name:"Météores (metia)", d:"Artefacts magiques anciens produisant leurs effets sans passer par la Porte de l'utilisateur — du miroir de communication au « metia » le plus célèbre du récit : le téléphone portable de Subaru."},
];

/* --------------------------------------------------- ORGANISATIONS (A4) */
RZ.orgs = [
  {name:"Les Chevaliers Royaux", d:"L'ordre militaire d'élite de Lugnica, commandé par Marcos Gyldark. Julius y incarne l'idéal chevaleresque, Ferris le soin des blessés — et Reinhard, membre de la Garde royale, en est le symbole vivant.", arc:3},
  {name:"Le Conseil des Sages", d:"L'assemblée qui gouverne Lugnica depuis la disparition de la famille royale, présidée par le vénérable Miklotov McMahon. C'est lui qui encadre la Sélection Royale au nom du pacte avec le Dragon.", arc:3},
  {name:"Le Culte des Sorcières", d:"Organisation fanatique vouée à la Sorcière de l'Envie, dirigée dans les faits par les Archevêques du Péché. Son origine — une confrérie fondée il y a quatre siècles pour veiller sur le sceau — a été dévorée par ce qu'elle est devenue.", arc:3},
  {name:"Le Croc de Fer (Iron Fang)", d:"La troupe de mercenaires demi-humains au service de la compagnie Hoshin d'Anastasia : Ricardo au front, les triplés Pearlbaton aux commandes tactiques. Décisive dans la chasse à la Baleine Blanche.", arc:3},
  {name:"Le Sanctuaire", d:"L'enclave scellée de Kremaldy, refuge des demi-humains fondé sur les expériences de la Sorcière Echidna et administré par les répliques de Ryuzu. Nul ne franchit sa barrière sans affronter les Épreuves de la Tombe.", arc:4},
  {name:"La Guilde marchande de Kararagi (Hoshin)", d:"L'empire commercial fondé sur l'héritage de Hoshin des Terres Désolées. Anastasia dirige la compagnie Hoshin, l'une de ses branches les plus puissantes.", arc:3},
  {name:"La Brigade des Pléiades", d:"La troupe la plus improbable du récit : gladiateurs de Ginunhive, déserteurs et enfants perdus, levés par un « petit Schwartz » durant la guerre civile de Vollachia. Son nom est un hommage direct à l'étoile de son capitaine.", arc:7},
  {name:"Les Neuf Généraux Divins", d:"L'élite absolue de l'armée impériale de Vollachia — neuf généraux de première classe choisis selon la loi du plus fort, numérotés du Premier au Neuvième.", arc:7},
];

/* --------------------------------------------- RÉCEPTION & TRIVIA (A8-A9) */
RZ.work.reception = [
  {n:"13 M+", l:"exemplaires en circulation", d:"Light novel, numérique inclus — chiffre de mars 2023 (11 M+ dès janvier 2022)."},
  {n:"2×  1ᵉʳ", l:"Sugoi Japan Awards 2017", d:"Double première place, dans les catégories light novel ET anime."},
  {n:"4ᵉ / 3ᵉ", l:"ventes annuelles de LN", d:"4ᵉ meilleure série au Japon en 2016 (1 007 381 ex.), 3ᵉ en 2017."},
  {n:"49,5 %", l:"Rem, plébiscite mondial", d:"1ʳᵉ du sondage mondial Crunchyroll 2016 (17 488 votes) — trois fois le score de Subaru — et Best Female Character aux Newtype Anime Awards 2015-2016."},
];
RZ.work.impact =
  "Porte-étendard du boom isekai des années 2010, Re:Zero est régulièrement cité pour sa relecture du genre : un protagoniste sans forces "+
  "démesurées, brisé et reconstruit par l'échec, à rebours du héros tout-puissant. Son influence se lit dans toute une génération de récits "+
  "de « boucles » et de dark fantasy, et l'épisode 15 de la saison 1 reste l'un des chocs télévisuels les plus commentés de la décennie.";

RZ.work.stars = [
  {name:"Natsuki Subaru", star:"Subaru — les Pléiades", d:"« Subaru » est le nom japonais de l'amas des Pléiades. La Tour, la Brigade et bien des clins d'œil du récit gravitent autour de son étoile."},
  {name:"Al", star:"Aldebaran — α Tauri", d:"« La suivante » : l'étoile qui semble suivre les Pléiades dans le ciel nocturne. Tout est dans le nom.", arc:3},
  {name:"Betelgeuse", star:"Bételgeuse — α Orionis", d:"La supergéante rouge de l'épaule d'Orion, promise à l'effondrement — comme l'Archevêque qui en porte le nom.", arc:3},
  {name:"Regulus", star:"Regulus — α Leonis", d:"« Le petit roi », cœur de la constellation du Lion, pour l'homme qui se voulait roi de son petit monde immobile.", arc:5},
  {name:"Sirius", star:"Sirius — α Canis Majoris", d:"L'étoile la plus brillante du ciel — et l'« épouse » la plus incandescente du Culte.", arc:5},
  {name:"Capella", star:"Capella — α Aurigae", d:"« La petite chèvre » du Cocher, pour la métamorphe au sang de dragon.", arc:5},
  {name:"Ley Batenkaitos", star:"Baten Kaitos — ζ Ceti", d:"Littéralement « le ventre de la Baleine » (constellation de la Baleine) : difficile de mieux nommer la Gourmandise.", arc:4},
  {name:"Roy Alphard", star:"Alphard — α Hydrae", d:"« La solitaire », cœur de l'Hydre — l'astre isolé d'un dévoreur sans attaches.", arc:5},
  {name:"Louis Arneb", star:"Arneb — α Leporis", d:"L'étoile principale du Lièvre, la proie éternellement pourchassée au pied d'Orion.", arc:6},
  {name:"Shaula", star:"Shaula — λ Scorpii", d:"« Le dard levé » du Scorpion. La gardienne de la Tour porte son destin dans son nom.", arc:6},
];

/* ------------------------------------------------------- DOUBLAGE (A7) */
/* -------------------------- LES TROIS VERSIONS (A10) */
RZ.work.media = [
  {tag:"Web novel", n:"Roman en ligne", d:"La version originale et gratuite, publiée sur Shōsetsuka ni Narō depuis le 20 avril 2012. Toujours en cours et en avance sur le reste, c'est la source la plus brute — et souvent la plus sombre (morts plus graphiques, scènes ensuite coupées)."},
  {tag:"Light novel", n:"Volumes MF Bunko J", d:"L'édition papier illustrée par Shinichirō Otsuka (depuis 2014). En reprenant le web novel, l'auteur en profite pour <strong>modifier, ajouter ou supprimer</strong> du contenu : c'est la version « canon » de référence, réagencée et enrichie."},
  {tag:"Anime", n:"Adaptation White Fox", d:"Le studio adapte le light novel, en condensant surtout les monologues intérieurs et certains flashbacks. La saison 1 a même connu un <em>Director's Cut</em> (2020) qui réécrit des scènes et regroupe l'ensemble en 13 épisodes d'une heure."},
];

RZ.work.dub = {
  note:"Deux versions françaises coexistent : la VF d'origine de la saison 1, et une nouvelle VF lancée avec le Director's Cut "+
    "(disponible depuis août 2024, studio Time-Line Factory) qui couvre également les saisons suivantes sur Crunchyroll. "+
    "Les seiyū japonais figurent sur chaque fiche personnage.",
  cast:[
    {role:"Natsuki Subaru", va:"Yūsuke Kobayashi", vf:"Grégory Laisné (VF 1) · Rémi Gutton (nouvelle VF)"},
    {role:"Emilia", va:"Rie Takahashi", vf:"Lou Viguier"},
    {role:"Rem", va:"Inori Minase", vf:"Charlotte Hervieux"},
    {role:"Puck", va:"Yumi Uchiyama", vf:"Sophie Ouaknine"},
    {role:"Felt", va:"Chinatsu Akasaki", vf:"Jessie Lambotte"},
    {role:"Priscilla Barielle", va:"Marie Miyake", vf:"Frédérique Marlot"},
    {role:"Al", va:"—", vf:"Jeremy Zylberberg"},
    {role:"Anastasia Hoshin", va:"Inori Minase", vf:"Sophie Planet (VF 1) · Estelle Darazi (nouvelle VF)"},
    {role:"Crusch Karsten", va:"Yōko Hikasa", vf:"Célia Asensio"},
    {role:"Garfiel Tinsel", va:"Yūto Uemura", vf:"Arnaud Laurent"},
    {role:"Roswaal L. Mathers", va:"Takehito Koyasu", vf:"Jean-Marco Montalto"},
  ],
};
