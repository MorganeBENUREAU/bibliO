TABLE PUBLISHER

Champ | Type | Spécificités | Description
-- | -- | -- | --
id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | id du rôle
name | TEXT | NOT NULL UNIQUE | nom de l'éditeur
country | (domain as text) | NOT NULL | nationnalité de l'éditeur
created_at | TIMESTAMPTZ | NOT NULL | date de création
updated_at | TIMESTAMPTZ | NOT NULL | date de modification


TABLE AUTHOR

Champ | Type | Spécificités | Description
-- | -- | -- | --
id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | id du rôle
firstname | TEXT | NOT NULL | nom de l'auteur
lastname | TEXT | NOT NULL | prénom de l'auteur
nationality | (domain as text) | NOT NULL | nationnalité de l'auteur
birthdate | DATE | - | date de naissance de l'auteur
deathdate | DATE | - | date de décès de l'auteur
website | TEXT | NOT NULL | nom de l'auteur
created_at | TIMESTAMPTZ | NOT NULL | date de création
updated_at | TIMESTAMPTZ | NOT NULL | date de modification


TABLE GENRE

Champ | Type | Spécificités | Description
-- | -- | -- | --
id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | id du rôle
label | TEXT | NOT NULL UNIQUE | genre du livre
created_at | TIMESTAMPTZ | NOT NULL | date de création
updated_at | TIMESTAMPTZ | NOT NULL | date de modification


TABLE BOOK

Champ | Type | Spécificités | Description
-- | -- | -- | --
id | INT | GENERATED ALWAYS AS IDENTITY PRIMARY KEY | id du rôle
isbn_paperback | TEXT | - | numéro isbn papier
original_title | TEXT | NOT NULL | titre original
title | TEXT | - | titre français
summary | TEXT | NOT NULL | résumé du livre
publication_year | INT | - | année de publication
language | (domain as text) | - | langue du livre
page_count | (domain as int) | NOT NULL | nombre de page
cover | TEXT | - | page de couverture
paperback_price | NUMERIC | NOT NULL | prix du livre papier
isbn_ebook | TEXT | - | numéro isbn ebook
ebook_price | NUMERIC | NOT NULL | prix du livre ebook
publisher_id | INT | GPRIMARY KEY, NOT NULL | id de l'éditeur
created_at | TIMESTAMPTZ | NOT NULL | date de création
updated_at | TIMESTAMPTZ | NOT NULL | date de modification


TABLE BOOK_HAS_AUTHOR

Champ | Type | Spécificités | Description
-- | -- | -- | --
book_id | INT | PRIMARY KEY, NOT NULL | id du livre
author_id | INT | PRIMARY KEY, NOT NULL | id de l'auteur


TABLE BOOK_HAS_GENRE

Champ | Type | Spécificités | Description
-- | -- | -- | --
book_id | INT | PRIMARY KEY, NOT NULL | id du livre
genre_id | INT | PRIMARY KEY, NOT NULL | id de l'auteur
