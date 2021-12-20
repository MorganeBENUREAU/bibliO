GENRE: <u>id</u>, label

AUTHOR: <u>id</u>, firstname, lastname, nationality, bithdate, deathdate, website

BOOK: <u>id</u>, isbn_paperback, original_title, title, summary, publication_year, language, page_count, cover, paperback_price, isbn_ebook, ebook_price, #publisher_id

PUBLISHER: <u>id</u>, name, country


BOOK_HAS_GENRE: <u>genre_id</u>, <u>book_id</u>

BOOK_HAS_AUTHOR: <u>author_id</u>, <u>book_id</u>