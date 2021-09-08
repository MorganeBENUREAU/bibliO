-- Deploy bibliO:user_table to pg

BEGIN;

CREATE DOMAIN email AS text
CHECK (VALUE ~ '^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$');

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" email NOT NULL,
  "password" text NOT NULL,
  "firstname" text NULL,
  "lastname" text NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
  
);


COMMIT;
