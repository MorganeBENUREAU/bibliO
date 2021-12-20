-- Deploy bibliO:init to pg

BEGIN;

CREATE DOMAIN country_iso_code_2 AS text
CHECK (VALUE ~ '^[A-Z]{2}$');
COMMENT ON DOMAIN country_iso_code_2 IS 'check if the country passed with rule ISO 3166-1 alpha-2';


CREATE DOMAIN pint AS int
CHECK (VALUE >= 0);
COMMENT ON DOMAIN pint IS 'only positive integer is accepted';


CREATE TABLE "publisher" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "country" country_iso_code_2 NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "author" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "nationality" country_iso_code_2 NOT NULL,
    "birthdate" DATE,
    "deathdate" DATE,
    "website" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ,
    UNIQUE ("firstname", "lastname", "nationality", "birthdate")
);

CREATE TABLE "genre" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "book" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "isbn_paperback" TEXT,
    "original_title" TEXT NOT NULL,
    "title" TEXT,
    "summary" TEXT NOT NULL,
    "publication_year" INT,
    "language" country_iso_code_2,
    "page_count" pint NOT NULL,
    "cover" TEXT,
    "paperback_price" NUMERIC NOT NULL,
    "isbn_ebook" TEXT,
    "ebook_price" NUMERIC NOT NULL,
    "publisher_id" INT NOT NULL REFERENCES "publisher"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "book_has_author" (
    "book_id" INT NOT NULL REFERENCES "book"("id") ON DELETE CASCADE,
    "author_id" INT NOT NULL REFERENCES "author"("id") ON DELETE CASCADE,
    UNIQUE ("book_id", "author_id")
);

CREATE TABLE "book_has_genre" (
    "book_id" INT NOT NULL REFERENCES "book"("id") ON DELETE CASCADE,
    "genre_id" INT NOT NULL REFERENCES "genre"("id") ON DELETE CASCADE,
    UNIQUE ("book_id", "genre_id")
);

COMMIT;
