BEGIN;

INSERT INTO "author" ("firstname", "lastname", "birthdate", "deathdate", "nationality", "website") VALUES
('Jupiter', 'Phaeton', NULL, NULL, 'FR', 'https://jupiterphaeton.com/'),
('Deborah', 'Harkness', '1965-05-04', NULL, 'US', 'https://deborahharkness.com/');

INSERT INTO "publisher" ("name", "country") VALUES
('Jupiter Phaeton Edition', 'FR') ,
('Calmann-Levy', 'FR');

INSERT INTO "genre" ("label")
VALUES ('urban fantasy'), 
('fantasy');

INSERT INTO "book" ("original_title", "title", "publisher_id", "isbn_paperback", "publication_year", "language", "page_count", "cover", "summary", "paperback_price", "isbn_ebook", "ebook_price") VALUES
('September Jones, Tome 1 : Loups, magie et cie','September Jones, Tome 1 : Loups, magie et cie', 1,'NA', 2020,'FR', 262, 'https://cdn1.booknode.com/book_cover/1469/full/september-jones-tome-1-loups-magie-et-cie-1469150.jpg', 'Qu’est-ce qui m’a pris de tuer mon ex, un loup-garou, et de l’enterrer à deux cents mètres de chez moi ? Je dois dire que ça n’a pas été la plus brillante de mes idées. Mais j’ai appris à me défendre dès mon plus jeune âge, et là, il l’avait un peu cherché. Je m’appelle September Jones, membre de la communauté des surnaturels et, même si je fais mon maximum pour rester discrète, il semblerait que ma nature de changeling se rappelle à moi sous la forme d’un beau spécimen de loup-garou nommé Kyle. Et quand une fan décide de m’attaquer en pleine séance de dédicace — oui, je suis aussi autrice à temps plein —et que Kyle se met en tête de me sauver, les choses commencent sérieusement à déraper dans ma vie.Une chose est certaine : à ce rythme-là, le secret de notre communauté n''en sera bientôt plus un. Je ne sais pas qui me tuera en premier : les humains, ou la meute de mon ex qui commence à flairer mon crime ? D’ailleurs, ce n’est pas de chance, Kyle est chargé de l’enquête sur ce sujet… Combien de temps vais-je parvenir à lui cacher la vérité ?', 19.90, 'NA', 5.99),
('September Jones, Tome 2 : Sorciers, Vampires et cie','September Jones, Tome 2 : Sorciers, Vampires et cie', 1,'NA', 2021,'FR', 250, 'https://cdn1.booknode.com/book_cover/1469/full/september-jones-tome-2-sorciers-vampires-et-cie-1469151.jpg', 'Ma vie de changeling est merdique, voilà.Et encore, je ne peux même pas me transformer à cause de ce foutu poison dans mes veines. J''aurais eu deux semaines de tranquillité si j''avais décidé de rester sagement sous la protection de Kyle, un loup-garou très sexy qui a décidé qu''il était mon preux chevalier. Évidemment, je n''ai pas tenu plus de deux heures.Évidemment, j''ai foncé droit dans la gueule du loup (oh oh, c''est le cas de le dire).Et maintenant ? Maintenant, je suis en train de courir pour ma vie. Les vampires veulent ma peau, les loups rêvent de m''étriper et il y a une horde de sorciers qui aimeraient bien savoir où j''ai planqué un artefact surpuissant.Oh j''allais oublier : Super Papa s''est aussi pointé dans les parages. Et il n''a pas l''air de vouloir jouer les paternels aimants. Je me demande s''il ne faut pas que je quitte la ville, et le pays par la même occasion. Est-ce que j''ai encore une chance de m''enfuir ? Ou est-ce qu''il est déjà trop tard ?', 19.90, 'NA', 5.99),
('September Jones, Tome 3 : Revenants, Chamans et cie','September Jones, Tome 2 : Revenants, Chamans et cie', 1,'NA', 2021,'FR', 247, 'https://cdn1.booknode.com/book_cover/1468/full/september-jones-tome-3-revenants-chamans-et-cie-1468316.jpg', 'J’aimerais que l’espace d’une journée, ma vie soit un long fleuve tranquille. Pas de loups-garous qui ont envie de me dépecer, pas de vampires millénaires qui veulent me surprotéger, pas d’artefacts magiques qui pourraient provoquer la fin du monde, pas d’ex supposé mort, mais apparemment bien vivant. La seule chose que je veux bien garder, c’est l’alpha sexy qui vole à mon secours, voilà. Mais évidemment, le destin en a décidé autrement. Entre mes colocataires qui me détestent, à raison d’ailleurs, et les ennuis surnaturels qui semblent infinis, les journées sont bien remplies. Sauf que moi, j’ai décidé de reprendre le contrôle de ma vie. Je vais régler les problèmes un par un, jusqu’à retrouver ma vie tranquille d’écrivain. Mais est-ce seulement possible ?', 19.90, 'NA', 5.99),
('September Jones, Tome 4 : Changelings, Fées et cie','September Jones, Tome 2 : Changelings, Fées et cie', 1,'NA', 2021,'FR', 260, 'https://cdn1.booknode.com/book_cover/1477/full/september-jones-tome-4-changelings-fees-et-cie-1476560.jpg', 'Je pense que si les dieux existent, leur but dans la vie est de ruiner mon quotidien. C’est tout juste si j’ai encore le temps d’écrire avec tous ces problèmes qui me tombent sur la tête.Comme si être une changeling n''était déjà pas assez complexe, je dois aussi me coltiner Prudence, un chaman coincé dans le corps d''un gosse de quatorze ans accro au sucre. J''ai déjà du mal à assurer ma propre sécurité, mais surveiller un gamin chaman, ce n''est pas chose aisée. En fait, je me plains, mais il est le cadet de mes soucis : un nouveau vampire est sur le point de débarquer en ville et dans le genre surpuissant, on ne fait pas mieux. Tout le monde surnaturel tremble à l''idée de sa venue. Oh, et il y a Peter qui ne cesse de me demander avec qui je compte finir ma vie : un vampire millénaire du nom d''Artie, ou un loup alpha sexy prénommé Kyle ? Ma réponse ? Je ne sais pas.Voilà.Débrouille-toi avec ça.', 19.90, 'NA', 5.99),
('ALL SOULS trilogy - A Discovery Of Witches','Le livre perdu des sortilèges - le livres perdu des sortilèges', 2,'9782360510337', 2011,'FR', 528, 'https://cdn1.booknode.com/book_cover/1393/full/le-livre-perdu-des-sortileges-1393036.jpg', 'Diana Bishop est la dernière d''une longue lignée de sorcières, mais elle a renoncé dpuis longtemps à son héritage familial pour privilégier ses recherches universitaires, une vie simple et ordinaire. Jusqu''au jour où elle emprunte un manuscrit alchimique : l''Ashmole 782. Elle ignore alors qu''elle vient de réveiller un ancien et terrible secret, et que tous - démons, sorcières et vampires - le convoitent ardemment. Parmi eux, Matthew Clairmont, un vampire aussi redoutable qu''énigmatique. Un tueur, lui a-t-on dit. Diana se retrouve très vite au coeur de la toumente, entre un manuscrit maudit et un amour impossible.', 19.80, '9782360511112', 8.99),
('ALL SOULS trilogy - Shadow Of Night', 'Le livre perdu des sortilèges - L''Ecole de la nuit', 2,'9782360510689', 2012,'FR', 552, 'https://cdn1.booknode.com/book_cover/1393/full/l-ecole-de-la-nuit-1393010.jpg', 'Diana Bishop, jeune historienne héritière d''une puissante lignée de sorcières, et le vampire Matthew Clairmont ont brisé le pacte qui leur interdisait de s''aimer. Quand diana a découvert l''Ashmole 782, un manuscrit alchimique, à la bibliothèque d''Oxford, elle a déclenché un conflit millénaire. La paix fragile entre les vampires, les sorcières, les démons et les humains est désormais menacée.
Déterminés à percer le mystère du manuscrit perdu, et tentant d''échapper à leurs ennemis, Diana et Matthew ont fui à Londres... en 1590. Un monde d''espions et de subterfuges, qui les plonge dans les arcanes du passé de Matthew et les confronte aux pouvoirs de Diana.
Et à l''inquiétante École de la nuit.', 19.90, '9782360511129', 8.99),
('ALL SOULS trilogy - The Book Of Life', 'Le livre perdu des sortilèges - Le Noeud de la sorcière', 2,'9782360511150', 2014,'FR', 576, 'https://cdn1.booknode.com/book_cover/1393/full/le-noeud-de-la-sorciere-1392945.jpg', 'Après un séjour en 1590, Diana Bishop et Matthew Clairmont reviennent dans le présent pour affronter d’anciens ennemis et de nouveaux dangers. Dans le domaine familial de Sept-Tours, la sorcière et le vampire vont retrouver amis et membres de leur vaste clan – à une exception près. Une terrible menace pèse sur leur avenir, et elle ne se dissipera que s’ils parviennent à récupérer les pages manquantes de l’Ashmole 782. Mais ils ne sont pas les seuls engagés dans cette quête, or le temps presse, car la grossesse de Diana arrive à son terme et Matthew a de son côté décidé de défier la Congrégation qui régit la vie de toutes les créatures surnaturelles.
De vieux châteaux en laboratoires universitaires, s’appuyant sur des savoirs séculaires aussi bien que sur les sciences modernes, depuis les collines de l’Auvergne jusqu’aux palais vénitiens, Diana et Matthew, décidés à protéger leur amour défendu coûte que coûte, finiront par découvrir le secret extraordinaire que les sorcières ont percé voilà des siècles et des siècles.', 19.90, '9782360511167', 9.49);


INSERT INTO "user" ("email", "password", "firstname", "lastname", "role_id") VALUES
('admin@biblio.io', '$2a$10$9a0AtDt4PZfDXH0OBT8H0uoaW71r1/ejqDpSsCOpvDErvv9ItRxfe', 'admin', 'biblio', 1),
('user@biblio.io', '$2a$10$biN1dU9ushqIcpL7uIU3U.NN4XUVymIDFoFcWakVOq6fvItR/e4OG', 'user', 'biblio', 2),
('test@biblio.io', '$2a$10$5QjWRkZYhk4l3r4a0qWB0O8SsTZGpibhrQuwoHIzB50MDTsdWjH9a', 'test', 'DreamTeam', 2);


INSERT INTO "book_has_author" ("book_id", "author_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2);

INSERT INTO "book_has_genre" ("book_id", "genre_id") VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2);

COMMIT;