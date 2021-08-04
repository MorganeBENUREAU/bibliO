-- Verify bibliO:user_table on pg

BEGIN;

SELECT id FROM "user" WHERE FALSE;

ROLLBACK;
