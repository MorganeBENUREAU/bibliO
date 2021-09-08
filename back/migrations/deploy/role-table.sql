-- Deploy bibliO:role-table to pg

BEGIN;

CREATE TABLE "role" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO "role" ("label") VALUES
('admin'),
('user');

ALTER TABLE "user" ADD COLUMN "role_id" INT NOT NULL REFERENCES "role"("id") ON DELETE CASCADE;
-- Ajouter des colonnes ?? 
-- "role_id" INT NOT NULL REFERENCES "role"("id") ON DELETE CASCADE,

COMMIT;
