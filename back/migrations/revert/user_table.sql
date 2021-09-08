-- Revert bibliO:user_table from pg

BEGIN;

DROP TABLE "user" CASCADE;

DROP DOMAIN email CASCADE;

COMMIT;
