-- Revert bibliO:user_table from pg

BEGIN;

DROP TABLE "user" CASCADE;

DROP TABLE "role" CASCADE;

DROP DOMAIN email CASCADE;

COMMIT;
