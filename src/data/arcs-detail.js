/* =====================================================================
   RE:ZERO — sous-pages d'arcs : déroulé par étapes, correspondances
   web novel / light novel / anime, différences d'adaptation.
   Sources : Re:Zero Wiki (pages Arc 1-10, sections Overview & Adaptation
   Differences), Wikipédia FR (correspondances volumes/chapitres/épisodes).
   Vérifié le 3 juillet 2026. Chaque page est protégée par le mode spoiler
   au niveau de son arc.
   ===================================================================== */
export const arcsDetail = {
1: {
  corresp: { web: "24 chapitres", ln: "Tome 1", anime: "Saison 1 · ép. 1-3", manga: "2 volumes (Daichi Matsue)" },
  resume: "Au retour d'une supérette, Natsuki Subaru est happé dans le royaume de Lugnica. Persuadé d'être le héros tout désigné d'un isekai, il déchante vite : sans pouvoir ni argent, il est sauvé d'une correction par une demi-elfe aux cheveux d'argent qu'il décide d'aider à retrouver son insigne volé. La nuit venue, tous deux sont assassinés — et Subaru se réveille au matin même, découvrant à ses dépens le seul pouvoir que ce monde lui ait accordé : le Return by Death.",
  stages: [
    {t:"L'invocation", html:"Subaru se matérialise en pleine rue marchande de la capitale royale. Premier contact : le fruitier Kadomon, trois voyous… et une demi-elfe accompagnée d'un esprit-chat, lancée à la poursuite de l'insigne que vient de lui dérober la voleuse Felt."},
    {t:"Première mort", html:"La piste de l'insigne mène à la maison du butin du vieux Rom, dans les bas-fonds. Subaru et sa bienfaitrice y sont massacrés par une tueuse aux couteaux courbes — Elsa, la « Chasseuse de tripes ». Écran noir… et réveil devant l'étal de fruits, au matin du même jour."},
    {t:"Les boucles d'apprentissage", html:"Mort après mort, Subaru cartographie sa journée : le fonctionnement du « point de sauvegarde », la loyauté de Rom, les intentions de Felt, la létalité d'Elsa. Il comprend qu'il ne peut parler de son pouvoir à personne — une main invisible lui broie le cœur à chaque tentative."},
    {t:"Le nom de la Sorcière", html:"La demi-elfe se présente comme « Satella ». Subaru apprendra qu'il s'agit du nom de la Sorcière de l'Envie, la pire insulte qui soit — et que sa bienfaitrice, qui refuse de donner son vrai nom, porte ce fardeau depuis toujours."},
    {t:"La bataille de la maison du butin", html:"Dans la boucle finale, Subaru réunit toutes les pièces : il gagne Felt et Rom à sa cause, obtient le concours du chevalier Reinhard van Astrea et affronte Elsa. Le Sword Saint met la tueuse en fuite ; l'insigne réagit au sang de Felt, que Reinhard emmène malgré elle."},
    {t:"« Dis-moi ton nom »", html:"Blessé mais vivant, Subaru obtient enfin sa récompense : un sourire, et un nom — Emilia. L'arc se clôt sur cette promesse fondatrice, prélude à son entrée au service du manoir Roswaal."},
  ],
  diffWebLn: [
    "La deuxième mort de Subaru a été adoucie dans le light novel : dans le web novel, Elsa lui arrache les yeux et le démembre membre par membre.",
    "Le chapitre 8 du web novel mentionne une « magie de duplication » (copie d'êtres vivants et d'objets) absente du light novel.",
  ],
  diffAnime: "L'anime condense les premières boucles : les morts de Subaru y sont plus expéditives, là où le roman prend le temps d'installer la terreur de la toute première mort. Le Director's Cut de la saison 1 (2020) réécrit certaines scènes et regroupe l'arc dans des épisodes d'une heure.",
},
2: {
  corresp: { web: "50 chapitres", ln: "Tomes 2-3", anime: "Saison 1 · ép. 4-11", manga: "4 volumes" },
  resume: "Recueilli au manoir du margrave Roswaal L. Mathers pour y être soigné, Subaru demande à y travailler comme domestique afin de rester auprès d'Emilia. Mais chaque nuit de sa première semaine s'achève de la même façon : il meurt dans son sommeil, sans comprendre ni par qui, ni pourquoi. Entre les jumelles Rem et Ram, l'esprit Beatrice et un maître de maison trop souriant, Subaru doit identifier une menace invisible — et découvrir que la vraie blessure n'est pas la sienne.",
  stages: [
    {t:"Serviteur au manoir", html:"Réveil dans un lit inconnu : Emilia a porté Subaru au manoir Roswaal. Il y rencontre les servantes jumelles Rem et Ram, la bibliothécaire Beatrice et le margrave excentrique qui parraine la candidature d'Emilia au trône."},
    {t:"Morts dans le sommeil", html:"Boucle après boucle, Subaru meurt durant la nuit — étouffé, vidé de son mana, glacé. Le « point de sauvegarde » s'est déplacé : impossible de fuir, il faut comprendre. Les soupçons se portent sur les habitants du manoir eux-mêmes."},
    {t:"Le pacte avec Beatrice", html:"Pour survivre à la quatrième nuit, Subaru négocie la protection de Beatrice dans la Bibliothèque interdite. Il survit… et découvre au matin le manoir en deuil : mourir n'est pas le seul échec possible."},
    {t:"La malédiction du chiot", html:"L'enquête révèle l'arme du crime : une malédiction contractée au village d'Earlham, transmise par la morsure d'un « chiot » — en réalité un Wolgarm, bête démoniaque tapie parmi les enfants."},
    {t:"La nuit des Wolgarm", html:"Pour sauver les enfants enlevés par la meute, Subaru s'enfonce dans la forêt avec Rem et Ram. La corne de Rem se déchaîne, le passé des jumelles refait surface — le village oni massacré, la culpabilité de la cadette — et Subaru s'interpose, au prix de sa chair, entre Rem et sa propre haine."},
    {t:"« Recommençons, depuis le négatif »", html:"Subaru offre à Rem les mots qui la sauvent d'elle-même. La malédiction est levée, la meute anéantie par Roswaal, et le manoir gagne un majordome — l'arc s'achève sur le rendez-vous promis avec Emilia sous les fleurs."},
  ],
  diffWebLn: [
    "Plusieurs conversations avec Beatrice sont développées différemment entre web novel et light novel, notamment autour de la « Porte » et du mana de Subaru.",
  ],
  diffAnime: "Les échanges avec Beatrice sont raccourcis dans l'anime ; le roman explique bien mieux la logique des Portes et la nature du mana de Subaru.",
},
3: {
  corresp: { web: "89 chapitres", ln: "Tomes 4-9", anime: "Saison 1 · ép. 12-25 + Saison 2 · ép. 1" },
  resume: "De retour à la capitale pour la cérémonie d'ouverture de la Sélection Royale, Subaru commet l'irréparable : un esclandre public qui humilie Emilia et le brouille avec elle. Resté seul, il assiste, boucle après boucle, à l'anéantissement du domaine Roswaal par le Culte des Sorcières et son Archevêque de la Paresse. Du fond du désespoir, une servante bleue lui tend la main — et l'arc s'achève sur la première grande victoire de Subaru, remportée non par un pouvoir, mais par les liens qu'il a su nouer.",
  stages: [
    {t:"La Sélection Royale", html:"Les cinq candidates — Emilia, Crusch, Priscilla, Anastasia et Felt — sont présentées au château. Subaru, venu contre l'avis d'Emilia, se proclame son chevalier : humiliation publique, duel perdu contre Julius, rupture avec Emilia."},
    {t:"L'engrenage", html:"Resté en convalescence à la capitale avec Rem, Subaru apprend qu'un danger guette le domaine. Chaque retour tourne au cauchemar : le manoir gelé, le village massacré, Rem morte entre ses bras, la brume de la Baleine Blanche, les doigts du Culte. Les boucles s'enchaînent jusqu'à l'effondrement — et jusqu'à la tentation de fuir, simplement, avec Rem."},
    {t:"« Depuis zéro »", html:"Au fond du gouffre, Rem refuse la fuite et rend à Subaru sa propre légende : le héros qui l'a sauvée. De cet aveu naît la résolution de l'arc — et l'une des scènes les plus célèbres de la série."},
    {t:"L'alliance improbable", html:"Armé de la connaissance de ses boucles, Subaru négocie l'impossible : l'appui militaire de Crusch contre l'annonce de l'apparition de la Baleine Blanche, et celui d'Anastasia via le Croc de Fer de Ricardo. Le marchand Russell Fellow arbitre, le vétéran Wilhelm s'engage — pour des raisons très personnelles."},
    {t:"La chasse à la Baleine Blanche", html:"Sur la grand-route de Lifaus, sous le grand arbre de Flugel, l'alliance affronte le fléau légendaire vieux de quatre cents ans. Wilhelm venge enfin Theresia ; la Baleine tombe — première entaille dans les Trois Grands Fléaux."},
    {t:"La traque de la Paresse", html:"Reste le Culte : Betelgeuse Romanée-Conti et ses « doigts ». Piégé, contre-piégé, l'Archevêque est finalement acculé — son Invisible Providence retournée contre lui — et périt écrasé, privé de réceptacle."},
    {t:"L'aveu", html:"Vainqueur, Subaru retrouve Emilia pour la scène qui donne son sens au titre de l'épisode final : des excuses, une explication — et « Je t'aime, du fond du cœur, Emilia »."},
  ],
  diffWebLn: [
    "Dans le light novel, Wilhelm décapite seul Betelgeuse lors de la première embuscade ; dans le web novel, Ricardo l'y assistait.",
    "Une boucle entière du web novel — l'anéantissement de l'expédition par un « doigt » féminin au village d'Earlham — a été supprimée du light novel.",
    "Plusieurs scènes (dialogue Emilia/Julius, réveils de Subaru) ont été déplacées ou réécrites entre les tomes 8 et 9.",
  ],
  diffAnime: "La révélation qu'Al vient lui aussi du Japon est coupée de la saison 1 (seulement suggérée). L'épisode 1 de la saison 2 adapte la toute fin de l'arc.",
},
4: {
  corresp: { web: "141 chapitres", ln: "Tomes 10-15", anime: "Saison 2 · ép. 2-25", manga: "8 volumes (en cours)" },
  resume: "La victoire a un prix que Subaru est seul à connaître : le nom et les souvenirs de Rem ont été dévorés, et le monde entier l'a oubliée. De retour au domaine, il trouve le manoir déserté et prend la route du Sanctuaire de Kremaldy, refuge scellé des demi-humains où l'attendent Emilia, Roswaal — et la conscience défunte de la Sorcière de l'Avarice, Echidna. Entre les Épreuves de la Tombe, un manoir condamné et les plans croisés de trois sorcières, l'arc 4 est le grand roman psychologique de Re:Zero.",
  stages: [
    {t:"Ce que la Gourmandise a pris", html:"Sur le chemin du retour, l'Archevêque de la Gourmandise frappe : Crusch perd ses souvenirs, Rem son nom et son existence même — plongée dans un sommeil sans fin que Subaru est le seul à pleurer."},
    {t:"Le Sanctuaire de Kremaldy", html:"Manoir vide, nouvelle servante — Frederica — et direction la forêt perdue de Kremaldy : un village scellé où sont retenus la moitié des villageois d'Earlham, Ram, un Roswaal grièvement blessé… et le gardien fauve du lieu, Garfiel."},
    {t:"Le thé d'Echidna", html:"Admis dans la Tombe, Subaru rencontre en rêve la Sorcière de l'Avarice. La première Épreuve l'oblige à affronter son passé — ses parents, sa fuite — dans l'une des plongées les plus intimes du récit."},
    {t:"Le manoir condamné", html:"Pendant que le Sanctuaire retient Emilia, le manoir Roswaal vit ses dernières heures : Elsa et Meili y sont envoyées, Beatrice attend dans sa bibliothèque la fin d'un contrat vieux de quatre siècles. Les boucles de Subaru se déchirent entre deux fronts inconciliables — gel, Grand Lapin, entrailles."},
    {t:"Les vérités enterrées", html:"Le Sanctuaire livre ses secrets : les répliques de Ryuzu et le cristal de l'originelle, l'Évangile de Roswaal et son vœu obsessionnel, les peurs d'Emilia entretenues par son sponsor — et le passé d'Elior, où Fortuna, Geuse et Pandora scellèrent le destin d'une petite demi-elfe."},
    {t:"« Je te choisis »", html:"Subaru refuse le pacte d'Echidna, déjoue les sorcières du Salon et offre à Beatrice ce que quatre cents ans d'attente n'avaient pas fourni : un choix. Le pacte scellé fait d'eux le duo emblématique de la suite du récit."},
    {t:"Dénouement au Sanctuaire", html:"Garfiel vaincu et libéré de ses peurs rejoint le camp ; le Grand Lapin est aspiré par la magie conjointe de Subaru et Beatrice ; Emilia surmonte ses Épreuves ; Roswaal, battu à son propre jeu, est contraint au pari de Subaru. La barrière tombe — le camp Emilia, au complet, est né."},
  ],
  diffWebLn: [
    "Le light novel nomme les lieux (« Sanctuaire de Kremaldy », « forêt perdue de Kremaldy ») et ajoute la pierre-lueur de Frederica pour franchir la barrière.",
    "L'ordre des événements d'arrivée au Sanctuaire est réarrangé (rencontre avec une réplique de Ryuzu, tombe d'Echidna) pour un rythme plus rapide.",
    "L'exposition sur Reid et Volcanica donnée par Echidna dans le web novel a été retirée du light novel.",
  ],
  diffAnime: "La saison 2 suit fidèlement les tomes 10 à 15, en condensant surtout les monologues intérieurs de Subaru et plusieurs flashbacks secondaires.",
},
5: {
  corresp: { web: "84 chapitres", ln: "Tomes 16-20", anime: "Saison 3 · ép. 1-16" },
  resume: "Un an après le Sanctuaire, Anastasia attire le camp Emilia dans la cité de l'eau Pristella, en faisant miroiter un moyen de réveiller Puck. Hasard trop parfait : les cinq camps royaux s'y retrouvent réunis — au moment précis où le Culte des Sorcières lance son offensive. Regulus l'Avarice, Sirius la Colère, Capella la Luxure et la Gourmandise prennent la ville en otage. Pour la première fois, rivaux et alliés doivent combattre côte à côte.",
  stages: [
    {t:"La cité de l'eau", html:"Retrouvailles générales à Pristella : Felt et Reinhard, Priscilla et Al, Crusch amnésique et Ferris, Julius et Anastasia — et les nouvelles têtes, Kiritaka le magnat et Liliana la Chanteuse."},
    {t:"La ville prise en otage", html:"Les Archevêques s'emparent du centre de contrôle des vannes : Pristella peut être noyée sur un mot. Les demandes tombent, insensées — Regulus exige Emilia pour « épouse », Capella réclame Vincent... les héros comprennent que la cité entière est déjà un piège."},
    {t:"Les fronts multiples", html:"Les camps se répartissent les cibles. La Colère retourne la population contre elle-même par contagion émotionnelle ; la Luxure mue les habitants en monstres ; la Gourmandise rôde. Chaque victoire partielle se paie comptant."},
    {t:"Le chant de Liliana", html:"Contre Sirius, la force brute ne suffit pas : c'est le « Domaine du Barde » de Liliana qui soustrait les cœurs de la foule à la contamination de la Colère — le miracle le plus doux de l'arc."},
    {t:"Le mariage immobile", html:"Emilia, enlevée, tient tête à Regulus ; Subaru et Beatrice percent le secret du « Monde Immobile » : un cœur externalisé, battant dans la poitrine de ses « épouses ». La coalition libère les otages, et l'invulnérable connaît enfin la douleur — et la fin."},
    {t:"Le prix de Pristella", html:"La victoire laisse des cicatrices : le nom de Julius est dévoré et le monde l'oublie ; Anastasia n'est plus tout à fait elle-même ; Capella s'évanouit dans la nature ; et les Évangiles convoités par le Culte posent plus de questions qu'ils n'en résolvent. Cap sur la seule source de réponses : le Sage de la Tour de Pleiades."},
  ],
  diffWebLn: [
    "Dans le light novel, le camp Emilia connaît déjà Liliana, Kiritaka et Dynas (rencontrés dans une histoire annexe entre les arcs 2 et 3), ce qui modifie plusieurs dialogues d'introduction.",
    "La première rencontre d'Emilia avec Regulus est réécrite : apparence décrite d'emblée, tension accrue, et la mention de la « 79e épouse » remplacée par une chute différente.",
    "Des précisions sur la construction de Pristella par Hoshin des Terres Désolées ont été ajoutées.",
  ],
  diffAnime: "La saison 3 (2024-2025) adapte l'intégralité de l'arc en 16 épisodes, dans un découpage « assaut » puis « contre-attaque ».",
},
6: {
  corresp: { web: "90 chapitres", ln: "Tomes 21-25", anime: "Saison 4 · 2026 (en cours, 19 ép. annoncés)" },
  resume: "Pour rendre son nom à Julius, ses souvenirs à Crusch et son réveil à Rem, une seule piste : le Sage de la Tour de Pleiades, au cœur du désert d'Augria. Passé la « barrière du temps de sable » qui arrêta Reinhard lui-même, le groupe découvre une tour aux règles mortelles, une gardienne exubérante qui prend Subaru pour son maître — et des Épreuves qui ne testent plus le passé, mais la mémoire, l'identité et la mort elle-même.",
  stages: [
    {t:"La traversée d'Augria", html:"Subaru, Emilia, Beatrice, Ram, Julius, Meili et « Anastasia » affrontent les dunes mouvantes, les vers géants et le temps de sable. Dans le light novel, c'est la clairvoyance de Ram qui trouve la faille de la barrière."},
    {t:"Les règles de la Tour", html:"Au pied de la tour de guet, la gardienne Shaula accueille « Maître » à bras ouverts — et énonce les règles dont la violation transforme l'amie en fléau. Trois étages d'Épreuves séparent le groupe de la bibliothèque du Sage."},
    {t:"L'Épreuve du deuxième étage", html:"Le gardien de l'étage « Elektra » n'est autre que Reid Astrea, le premier Sword Saint, ressuscité en écho arrogant de lui-même. Une baguette lui suffit — l'Épreuve semble tout simplement insoluble."},
    {t:"La nuit de l'amnésie", html:"La Gourmandise s'invite dans la tour, et Subaru se réveille vide : plus un souvenir depuis son arrivée dans ce monde. Le « Natsuki Subaru » qui ment à ses compagnons pour survivre est l'un des passages les plus vertigineux du roman — jusqu'à la rencontre, dans le Couloir des souvenirs, de celle qui l'observe à chaque mort."},
    {t:"Le siège de la Tour", html:"Toutes les menaces convergent : Ley et Roy à l'assaut, l'armée des Bêtes du désert, le scorpion colossal qu'est devenue Shaula, et au sommet — un Dragon Divin qui n'est plus que la coquille sénile de sa légende."},
    {t:"Mémoires rendues, portes ouvertes", html:"Au terme d'une nuit de sacrifices et de boucles, Subaru se reconstruit et reprend son nom ; la bibliothèque livre ses Livres des Morts ; Shaula, libérée et perdue à la fois, choisit son Maître. Mais la Tour a un dernier caprice : ses portes dispersent le groupe — et Subaru, Rem et Louis se réveillent très, très loin au sud…"},
  ],
  diffWebLn: [
    "Le dragon terrestre du groupe est renommé (Gian dans le web novel, Joseph dans le light novel).",
    "Le light novel confie à Ram, via sa clairvoyance, un rôle décisif dans le franchissement du temps de sable, absent du web novel.",
    "Beatrice sait dès le départ, dans le light novel, que l'esprit artificiel Echidna occupe le corps d'Anastasia.",
  ],
  diffAnime: "La saison 4 (avril 2026-) adapte l'arc en 19 épisodes annoncés ; premières différences notables à confirmer au fil de la diffusion.",
},
7: {
  corresp: { web: "116 chapitres", ln: "Tomes 26-33" },
  resume: "Projeté par la Tour dans la jungle de Buddheim, à l'autre bout du continent, Subaru se réveille dans l'Empire de Vollachia — blessé, séparé des siens, flanqué d'une Rem amnésique qui se méfie de lui et d'une Louis muette. Dans ce pays où « seul le plus fort règne », il croise un empereur déchu qui se fait appeler Abel, des marchands trop gentils pour l'Empire, un soldat ordinaire plus terrifiant que les Archevêques — et découvre qu'une guerre civile couve, dont il deviendra, bien malgré lui, l'un des pivots.",
  stages: [
    {t:"La jungle de Buddheim", html:"Réveil au pied d'un arbre, une flèche dans le corps : bienvenue à Vollachia. Rem, éveillée mais sans souvenirs, ne voit en Subaru que le miasme de la Sorcière qui l'imprègne. Premier miracle : la caravane des O'Connell, Flop et Medium, qui les mène à la ville de Guaral."},
    {t:"Guaral", html:"Entre les soldats impériaux de Jamal et Todd Fang et un mystérieux fugitif masqué — l'empereur Vincent Vollachia, renversé par un sosie et réfugié sous le nom d'« Abel » —, Subaru apprend les règles du pays. La prise de Guaral scelle l'alliance contre nature entre le garçon de Lugnica et l'empereur déchu."},
    {t:"Chaosflame", html:"Pour rallier la cité démoniaque et sa maîtresse Yorna Mishigure, Subaru s'improvise émissaire — et croise deux Généraux Divins : la belle renarde au grand cœur, et le « Vieillard scélérat » Olbart, dont les arts shinobi laissent Subaru… considérablement rajeuni. La ville s'embrase quand l'Empire frappe."},
    {t:"L'île-arène de Ginunhive", html:"Vendu comme gladiateur, le « petit Schwartz » survit dans l'arène aux côtés d'un Cecilus Segmunt réduit lui aussi en enfant — sans le savoir. De la boue de Ginunhive naît la Brigade des Pléiades, la troupe la plus improbable du récit."},
    {t:"La bataille de la capitale", html:"Rebelles, généraux ralliés, brigade de gladiateurs : l'assaut sur Lupugana et son Palais de Cristal — défendu par Moguro Hagane — culmine dans la confrontation avec le faux empereur. La vérité éclate : l'usurpateur n'était que Chisha Gold, le plus loyal des serviteurs, sacrifié à un plan conçu pour sauver Vincent d'une prophétie funeste."},
    {t:"L'étoile tombée", html:"La victoire n'a pas le temps d'être fêtée : au-dessus de la capitale reconquise, le ciel s'ouvre sur le premier acte du « Grand Désastre ». L'arc se clôt sur l'irruption de la menace qui dévorera le diptyque impérial."},
  ],
  diffWebLn: [
    "Le light novel coupe la plupart des flashbacks du début d'arc (conversations au manoir avec Ram, Rem, Clind, Petra, Otto, Roswaal…).",
    "Une conversation ajoutée montre Subaru confier à Rem qu'il a lui aussi connu l'amnésie, pour gagner sa confiance.",
    "La scène avec Volcanica omise du tome 25 est restituée dans le prologue du tome 26 ; plusieurs chapitres web deviennent des interludes.",
  ],
  diffAnime: null,
},
8: {
  corresp: { web: "76 chapitres", ln: "Tomes 34-38" },
  resume: "Le Grand Désastre a un visage : les morts de l'Empire se relèvent. Menées par la mystérieuse Sphinx, des légions de « zombies » — anonymes, héros d'antan, camarades tombés la veille — déferlent sur Vollachia. Contraints à la retraite vers la ville fortifiée de Garkla, Subaru, Vincent et une coalition de circonstance doivent affronter des ennemis qu'ils ont déjà pleurés, et gagner une guerre où chaque perte peut changer de camp.",
  stages: [
    {t:"La retraite de Lupugana", html:"La capitale conquise la veille est abandonnée aux morts. Dans le convoi : les alliés d'hier, les rebelles ralliés — et Todd Fang, ennemi intime de Subaru, que la nécessité impose comme compagnon de route jusqu'à la trahison suivante."},
    {t:"Sphinx et les revenants", html:"À la tête de plus d'un millier de morts, Sphinx — visage troublant venu des recherches d'Echidna — ne relève pas les cadavres au hasard : les légendes de l'Empire reviennent, et avec elles Balleroy Temeglyph, le tireur de balles magiques, face à une Madelyn qui le pleurait encore."},
    {t:"Garkla", html:"La ville fortifiée devient l'ultime bastion. Renforts de Lugnica, Brigade des Pléiades, Généraux Divins au complet : toutes les forces du récit convergent pour l'une des batailles les plus vastes de l'œuvre."},
    {t:"Les adieux impossibles", html:"La guerre contre les morts est une guerre contre la mémoire : chaque revenant impose un second deuil. Moguro se sacrifie jusqu'à la réinitialisation de son noyau ; Ley Batenkaitos, l'Archevêque qui vola Rem au monde, est enfin vaincu ; et le soleil du camp Barielle — Priscilla — s'éteint en donnant à l'arc sa perte la plus retentissante."},
    {t:"La fin du Grand Désastre", html:"Le plan de Sphinx démantelé, l'Empire exsangue mais debout referme le diptyque commencé à l'arc 7 : Vincent restauré tire les leçons du « pays des loups », et les étrangers de Lugnica peuvent enfin envisager le retour — changés, endeuillés, grandis."},
  ],
  diffWebLn: [
    "Plusieurs chapitres du web novel deviennent des interludes dans le light novel ; le light novel ajoute la précision que « Todd s'était heurté maintes fois à Natsuki Subaru » sans jamais s'entendre avec lui.",
    "Les points faibles des zombies sont retravaillés : parties du corps propres à chacun dans le light novel, au lieu de la zone du cœur.",
    "Le nombre de morts suivant Sphinx est précisé (plus d'un millier) là où le web novel restait vague.",
  ],
  diffAnime: null,
},
9: {
  corresp: { web: "62 chapitres", ln: "Tomes 39-43" },
  resume: "Le Grand Désastre passé, l'Empire panse ses plaies : Spica purge les derniers morts-vivants, la reconstruction s'organise, et les gens de Lugnica reprennent la route du royaume — chacun avec une dernière tâche. Celle de Subaru : escorter Al jusqu'à la Tour de Pleiades, où l'attend un certain Livre des Morts. Mais à peine arrivé, le piège se referme : capturé et scellé par Al, Subaru découvre enfin qui est l'autre voyageur venu du Japon — et ce qu'il est prêt à détruire pour « sauver » le monde.",
  stages: [
    {t:"L'Empire à reconstruire", html:"Chaosflame, Garkla, la capitale : les grandes cités ont tenu, mais le pays est exsangue. Spica — l'ancienne Louis Arneb — rachète l'inexcusable en effaçant un à un les zombies restants, sous le regard partagé de ceux qui savent ce qu'elle fut."},
    {t:"Les chemins du retour", html:"Adieux impériaux et retours échelonnés vers Lugnica : chaque camp reprend sa place sur l'échiquier de la Sélection Royale, transformé par deux arcs de guerre."},
    {t:"Le piège de la Tour", html:"L'escorte d'Al vers la Tour de Pleiades tourne court : Subaru est neutralisé et scellé par celui qu'il croyait un allié bourru. Al veut lire un Livre des Morts précis — et surtout, empêcher Subaru d'interférer."},
    {t:"Aldebaran", html:"Le heaume tombe : boucles, obsessions, décennies d'échecs — le récit livre enfin la vérité sur l'autre invocation venue du Japon, et sur le but qu'Al poursuit : éliminer ce qu'il tient pour la cause de la fin du monde, quel qu'en soit le prix. Rom lui-même, le vieux stratège, s'invite dans la partie."},
    {t:"Étoiles contre étoiles", html:"La confrontation entre les deux « invoqués » — leurs pouvoirs, leurs philosophies, leurs Sorcières — referme l'arc sur des révélations qui rebattent les cartes de toute la fin du récit. La route de l'arc final est ouverte."},
  ],
  diffWebLn: [
    "Le light novel ajoute des prologues inédits (Petra et Meili ; Aldebaran et Echidna) absents du web novel.",
    "Les scènes où Petra lit le Livre des Morts de Subaru sont étendues et réécrites pour le light novel.",
  ],
  diffAnime: null,
},
10: {
  corresp: { web: "24 chapitres (en cours)", ln: "Tomes 44 et suivants (en cours)" },
  resume: "L'arc final a commencé en janvier 2026, quatorze ans après le premier chapitre. Apprenant que Roy Alphard serait capable de « régurgiter » les noms et souvenirs dévorés par la Gourmandise, Subaru met le cap sur la capitale royale. Pendant ce temps, une nonne de l'Église du Dragon Divin nommée Filore — homonyme troublante de la princesse disparue lors de l'« Enlèvement royal » — se découvre la qualification de candidate à la Sélection Royale. Le « pays des Rois-Lions » s'écrit en temps réel sur Shōsetsuka ni Narō.",
  stages: [
    {t:"L'espoir de la régurgitation", html:"Si la Gourmandise peut rendre ce qu'elle a dévoré, alors les noms de Julius et des victimes de la fratrie peuvent revivre : la traque de Roy Alphard devient une course à la restauration des mémoires."},
    {t:"Filore et l'Église du Dragon", html:"Émissaire de l'Église auprès des sinistrés de Pristella, la nonne Filore porte le nom de la princesse enlevée jadis — et le Conseil des Sages lui découvre la qualification au trône. Sixième candidate, coïncidence impossible : la Sélection Royale entre dans son acte final."},
    {t:"En cours d'écriture", html:"L'arc 10 est publié chapitre par chapitre sur le web ; cette page sera enrichie au fil des parutions et des recoupements de traduction (rezerowebnovelfr, Witch Cult Translations)."},
  ],
  diffWebLn: [
    "Le light novel (tomes 44+) ajoute des prologues inédits, dont une scène de la nuit de l'Enlèvement royal.",
  ],
  diffAnime: null,
},
}
