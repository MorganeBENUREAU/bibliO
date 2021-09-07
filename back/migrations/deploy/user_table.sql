-- Deploy bibliO:user_table to pg

BEGIN;

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" text NOT NULL,
  "password" text NOT NULL,
  "firstname" text NULL,
  "lastname" text NULL,
  "role" text NOT NULL DEFAULT 'standard'
);

COMMIT;
