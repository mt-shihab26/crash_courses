# PostgreSQL Essential Training (LinkedIn Learning)

## Link

-   https://www.linkedin.com/learning/postgresql-essential-training

## What is PostgreSQL

-   Sometimes abbreviated as simply "postgres"
-   Relational database management system (RDBMS)
-   Fourth most popular RDBMS on the market\*
-   Steadily increasing in popularity over the past six years\*
-   Postgresql Popularity
    -   Open-source software, which is free to use for any purpose
    -   In active development for over 30 years
    -   Benefits from a worldwide network of developers
    -   Very large businesses prove viability for smaller users
-   RDBMS
    -   Creates a protective wrapper around your data
    -   Gives your data a place to live and controls modifications
    -   Secures your data by enforcing access permissions
    -   Manages system performance for data read and writes
-   Structured Query Language
    -   SQL is used by data professionals in every RDBMS
    -   Reading ans writing SQL code is a highly sought skill
    -   SQL uses human-readable syntax

## Connect to the server with psql

```sql
SELECT version();
SELECT now();
\l
CREATE DATABASE favorite_colors;
\c favorite_colors
CREATE TABLE colors (id int, name char(20));
INSERT INTO colors VALUES (1, 'Red'), (3, 'Green'), (4, 'blue');
SELECT * FROM colors
```

## Primary Keys

-   Unique value for each row in the table
-   Typically do not have real-word significance
-   Do no imply a ranking, sequence, or count of items
-   Common primary keys include credit card and phone number

## Data Types

-   Numeric
    -   Use `INTEGER`, `SMALLINT` OR `BIGINT` for storing whole numbers
    -   `INTEGER` values range from -2 billion to +2 billion
    -   Use `NUMERIC` or `DECIMAL` for numbers with decimal points
    -   The value 123.45 would require a NUMERIC(5, 2) data type
    -   Use `READL` AND `DOUBLE PRECISION` for floating point values
-   Character
    -   Fixed-length strings use `CHARACTER(n)` or `CHAR(n)`
    -   The state abbreviation "CA" would fit in a `CHAR(2)` column
    -   Variable-length strings use `CHARACTER VARYING(n)` or `varchar(n)`
    -   According to Guinees World Records, `VARCHAR(26021) would be required to store the longest book title
    -   For unlimited length character data, use `TEXT` data type
    -   Perfect for blog posts or newspaper articles
-   Data/Time
    -   `DATE` stores dates between 4713 BC and 5874897 AD
    -   `TIME` will store time of day accurate to 1 microsecond
    -   Use `TIMESTAMP` to record both time and date in one column
    -   `TIMESTRAMP WITH TIME ZONE` adds time zone awareness
-   Geometric
-   Binary
-   Monetary
    -   `MONEY`
-   Boolean
-   And more...

## Table Indexes

-   Like indexes in a textbook, they point to content in the table
-   Help the PostgreSQL database engine fine records faster
-   Without and index, Postgres performs a full table scan
-   Created on one or more columns in a table

## Next Steps

-   Consider a different interface client: https://wiki.postgresql.org/wiki/PostgreSQL_Clinets
-   Learning SQL Programming (LinkedIn Learning)
-   Relational Databases Essential Training (LinkedIn Learning)
