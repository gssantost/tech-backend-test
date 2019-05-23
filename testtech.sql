-- Database: techtest

-- DROP DATABASE techtest;

CREATE DATABASE techtest
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


create domain address as VARCHAR(256);

create domain email as VARCHAR(256);

create domain name_long as VARCHAR(128);

create domain name_medium as VARCHAR(64);

create domain name_short as VARCHAR(32);

create domain primary_key as BIGINT;

create domain string_long as VARCHAR(256);

create domain string_medium as VARCHAR(128);

create domain string_short as VARCHAR(64);


CREATE SEQUENCE public.pk_user_sequence
    INCREMENT 1
    START 9
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.pk_user_sequence
    OWNER TO postgres;


-- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    pk_user primary_key NOT NULL DEFAULT nextval('pk_user_sequence'::regclass),
    name name_short COLLATE pg_catalog."default",
    middle_name name_short COLLATE pg_catalog."default",
    last_name name_short COLLATE pg_catalog."default",
    email email COLLATE pg_catalog."default",
    address address COLLATE pg_catalog."default",
    CONSTRAINT pk_user PRIMARY KEY (pk_user)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to postgres;

-- Table: public.user_additional

-- DROP TABLE public.user_additional;

CREATE TABLE public.user_additional
(
    pk_user primary_key,
    music string_medium COLLATE pg_catalog."default",
    cinema string_medium COLLATE pg_catalog."default",
    art string_medium COLLATE pg_catalog."default",
    CONSTRAINT fk_user_add_reference_user FOREIGN KEY (pk_user)
        REFERENCES public."user" (pk_user) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.user_additional
    OWNER to postgres;