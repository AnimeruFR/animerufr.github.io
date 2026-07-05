/* =====================================================================
   RE:ZERO — quiz de connaissances & test de personnalité (B10).
   Chaque question de connaissance porte un `arc` : celles qui dépassent
   la progression déclarée (mode spoiler) sont écartées, de même que les
   résultats de personnalité au-delà de l'arc atteint.
   Faits vérifiés sur rezero.fandom.com & Wikipédia.
   ===================================================================== */

/* ---- QUIZ DE CONNAISSANCES ---- q: question, a: options, c: index correct, why: explication */
export const knowledge = [
  { arc:1, q:"Quel est le pouvoir de Natsuki Subaru ?", a:["Le Return by Death","Une force surhumaine","La magie de glace","La télépathie"], c:0,
    why:"À sa mort, le temps recule jusqu'à un « point de sauvegarde », en lui laissant ses souvenirs." },
  { arc:1, q:"Sous quel nom Emilia se présente-t-elle à Subaru lors de leur première rencontre ?", a:["Satella","Puck","Felt","Fortuna"], c:0,
    why:"Elle emprunte le nom de la Sorcière de l'Envie, ne voulant pas révéler le sien." },
  { arc:1, q:"Qui assassine Subaru et Emilia à la fin de la première boucle ?", a:["Elsa Granhiert","Betelgeuse","Meili","Ram"], c:0,
    why:"Elsa, la « Chasseuse de tripes », les tue dans la maison du butin de Rom." },
  { arc:1, q:"Quelle race est Emilia ?", a:["Demi-elfe","Oni","Humaine","Homme-bête"], c:0,
    why:"Sa ressemblance avec la Sorcière de l'Envie lui vaut la défiance du royaume." },
  { arc:2, q:"Quelle est la race des jumelles Rem et Ram ?", a:["Oni (démons)","Elfes","Homme-chat","Dragonkin"], c:0,
    why:"Leur village oni fut massacré par le Culte des Sorcières ; Ram y perdit sa corne." },
  { arc:2, q:"Quel esprit garde la Bibliothèque interdite du manoir Roswaal ?", a:["Beatrice","Puck","Echidna","Satella"], c:0,
    why:"Beatrice, esprit artificiel créé par Echidna, y attend son « contractant » depuis quatre siècles." },
  { arc:2, q:"Que déclare Subaru à Rem pour la sauver d'elle-même ?", a:["« Recommençons depuis le négatif »","« Je te choisis »","« Reviens de la mort »","« Tout selon l'Évangile »"], c:0,
    why:"L'un des sommets émotionnels de la série, au terme de l'arc 2." },
  { arc:3, q:"Combien de candidates s'affrontent lors de la Sélection Royale ?", a:["Cinq","Trois","Sept","Dix"], c:0,
    why:"Emilia, Crusch, Priscilla, Anastasia et Felt." },
  { arc:3, q:"De quel péché Betelgeuse Romanée-Conti est-il l'Archevêque ?", a:["La Paresse","L'Orgueil","La Gourmandise","La Colère"], c:0,
    why:"Son Authorité, l'« Invisible Providence », déploie des Mains invisibles." },
  { arc:3, q:"Quel vétéran traque la Baleine Blanche pour venger son épouse ?", a:["Wilhelm van Astrea","Reinhard","Julius","Otto"], c:0,
    why:"Wilhelm, le « Démon de l'Épée », veuf de Theresia." },
  { arc:3, q:"Quel objet Subaru cède-t-il au marchand Russell Fellow ?", a:["Son téléphone portable","Son survêtement","L'insigne de Felt","Un Évangile"], c:0,
    why:"Le « metia » de Subaru, contre le concours de la Guilde à la chasse au fléau." },
  { arc:4, q:"Quelle Sorcière reçoit Subaru dans la Tombe du Sanctuaire ?", a:["Echidna, l'Avarice","Daphne, la Gourmandise","Minerva, la Colère","Typhon, l'Orgueil"], c:0,
    why:"La Sorcière de l'Avarice, mue par une soif inextinguible de savoir." },
  { arc:4, q:"Par quelle phrase Subaru scelle-t-il son pacte avec Beatrice ?", a:["« Je te choisis »","« Reviens de la mort »","« Depuis le négatif »","« Cor Leonis »"], c:0,
    why:"L'ordre que l'esprit attendait depuis quatre cents ans." },
  { arc:4, q:"Qui était la mère adoptive d'Emilia à la forêt d'Elior ?", a:["Fortuna","Echidna","Theresia","Ryuzu"], c:0,
    why:"Une elfe gardienne du sceau, tuée lors de l'attaque de Pandora." },
  { arc:5, q:"Quelle est l'Authorité de Regulus, l'Archevêque de l'Avarice ?", a:["Le Monde Immobile (invulnérabilité)","La transformation en monstre","La contamination émotionnelle","La manipulation du réel"], c:0,
    why:"Tant qu'il retient son souffle, rien ne peut l'altérer — jusqu'à ce qu'on trouve la faille." },
  { arc:5, q:"Comment la Chanteuse Liliana neutralise-t-elle l'Authorité de Sirius ?", a:["Par son chant (le Domaine du Barde)","Par la magie de glace","Par la force brute","Par un Évangile"], c:0,
    why:"Elle soustrait la conscience des habitants à la contamination de la Colère." },
  { arc:5, q:"Dans quelle ville se déroule l'assaut simultané de trois Archevêques ?", a:["Pristella","La capitale royale","Vollachia","Le Sanctuaire"], c:0,
    why:"La cité de l'eau, sillonnée de canaux, prise en otage à l'arc 5." },
  { arc:6, q:"Qui fut le tout premier Sword Saint, gardien d'une Épreuve de la Tour ?", a:["Reid Astrea","Reinhard","Wilhelm","Heinkel"], c:0,
    why:"Ancêtre des Astrea, il scella la Sorcière de l'Envie il y a quatre siècles." },
  { arc:6, q:"Quelle créature garde la Tour de Pleiades et prend Subaru pour son « Maître » ?", a:["Shaula","Patrasche","Puck","Meili"], c:0,
    why:"Un scorpion géant créé par Daphne, élève du vrai Sage, Flugel." },
  { arc:6, q:"Dans quel état Subaru trouve-t-il le Dragon Divin Volcanica au sommet de la Tour ?", a:["Une coquille sénile","À son apogée","Endormi paisiblement","Transformé en humain"], c:0,
    why:"Réduit à ~10 % de sa puissance, opérant purement par instinct." },
  { arc:7, q:"Sous quel nom l'empereur déchu Vincent Vollachia se cache-t-il ?", a:["Abel","Schwartz","Aldebaran","Chisha"], c:0,
    why:"Renversé par un sosie, il fait équipe avec Subaru pour reconquérir son trône." },
  { arc:7, q:"Qui est le Premier des Neuf Généraux Divins, l'« Éclair Bleu » ?", a:["Cecilus Segmunt","Goz Ralfon","Olbart","Arakiya"], c:0,
    why:"Cité parmi les plus forts du monde, aux côtés de Reinhard." },
  { arc:8, q:"Comment surnomme-t-on la catastrophe qui relève les morts de Vollachia ?", a:["Le Grand Désastre","Le Return by Death","La Baleine Blanche","L'Épreuve"], c:0,
    why:"Des légions de morts-vivants menées par la mystérieuse Sphinx." },
  { arc:9, q:"Quel autre personnage, comme Subaru, s'avère venir du Japon ?", a:["Aldebaran (Al)","Otto","Flop","Todd"], c:0,
    why:"Sa vérité éclate à l'arc 9, avec les buts qu'il poursuit pour « sauver » le monde." },
]

/* ---- TRIVIA STELLAIRE (toujours disponible : culture générale hors intrigue) ---- */
export const knowledgeStars = [
  { arc:1, q:"À quel amas d'étoiles le prénom « Subaru » fait-il référence ?", a:["Les Pléiades","La Grande Ourse","Orion","La Voie lactée"], c:0,
    why:"« Subaru » est le nom japonais de l'amas des Pléiades." },
]

/* ---- TEST « QUEL PERSONNAGE ES-TU ? ---- pondération vers un id de personnage ---- */
export const personalityQuestions = [
  { q:"Face à un échec cuisant, tu…",
    a:[
      { t:"te relèves et recommences, encore et encore", w:{subaru:2, garfiel:1} },
      { t:"gardes la tête froide et analyses la faille", w:{roswaal:2, otto:1} },
      { t:"t'en veux terriblement… avant de te reprendre", w:{rem:2, emilia:1} },
      { t:"hausses les épaules : ce n'était pas ta faute", w:{ram:2, roswaal:1} },
    ] },
  { q:"Ce qui te définit le mieux, c'est…",
    a:[
      { t:"ta loyauté sans faille envers les tiens", w:{rem:2, otto:1} },
      { t:"ta fierté et ton franc-parler", w:{ram:2, beatrice:1} },
      { t:"ta gentillesse, quitte à tout porter seul(e)", w:{emilia:2, subaru:1} },
      { t:"ta détermination à protéger, coûte que coûte", w:{garfiel:2, subaru:1} },
    ] },
  { q:"En groupe, tu es plutôt…",
    a:[
      { t:"celui/celle qui gère la logistique dans l'ombre", w:{otto:2, ram:1} },
      { t:"le moteur qui galvanise tout le monde", w:{subaru:2, emilia:1} },
      { t:"discret(ète), jusqu'à ce qu'on gagne ta confiance", w:{beatrice:2, rem:1} },
      { t:"celui/celle qui mène, avec panache", w:{roswaal:2, ram:1} },
    ] },
  { q:"Ta plus grande peur ?",
    a:[
      { t:"être abandonné(e) par ceux que tu aimes", w:{garfiel:2, beatrice:1} },
      { t:"ne pas être à la hauteur d'un(e) proche", w:{rem:2, subaru:1} },
      { t:"qu'on te juge sur tes origines", w:{emilia:2} },
      { t:"que ton plan patiemment ourdi échoue", w:{roswaal:2, otto:1} },
    ] },
  { q:"Ton rapport à l'aide des autres ?",
    a:[
      { t:"tu peines à la demander et fais tout toi-même", w:{emilia:2, ram:1} },
      { t:"tu t'appuies sur tes liens, c'est ta vraie force", w:{subaru:2, otto:1} },
      { t:"tu la refuses par fierté", w:{beatrice:2, ram:1} },
      { t:"tu la donnes plus que tu ne la reçois", w:{rem:2, garfiel:1} },
    ] },
  { q:"Ton petit défaut assumé ?",
    a:[
      { t:"une malchance quasi comique", w:{otto:2} },
      { t:"un sale caractère sous une carapace", w:{beatrice:2, ram:1} },
      { t:"tu en fais parfois trop", w:{subaru:2, roswaal:1} },
      { t:"tu te dévalues sans cesse", w:{rem:2, emilia:1} },
    ] },
]
