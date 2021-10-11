-- Deploy bibliO:user_role_table to pg

BEGIN;

CREATE DOMAIN email AS text
CHECK (VALUE ~ '^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$');

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO "role" ("label") VALUES
('admin'),
('user');

CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "email" email NOT NULL,
  "password" TEXT NOT NULL,
  "firstname" TEXT NULL,
  "lastname" TEXT NULL,
  "role_id" INT NOT NULL DEFAULT '2' REFERENCES "role"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);


COMMIT;
