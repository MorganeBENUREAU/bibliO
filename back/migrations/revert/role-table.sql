-- Revert bibliO:role-table from pg

BEGIN;

DROP TABLE "role" CASCADE;

COMMIT;
