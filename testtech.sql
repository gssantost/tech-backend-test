create domain address as VARCHAR(256);

create domain email as VARCHAR(256);

create domain name_long as VARCHAR(128);

create domain name_medium as VARCHAR(64);

create domain name_short as VARCHAR(32);

create domain primary_key as BIGINT;

create domain string_long as VARCHAR(256);

create domain string_medium as VARCHAR(128);

create domain string_short as VARCHAR(64);

create table "user" (
   pk_user              primary_key                 not null,
   name                 name_short           null,
   middle_name          name_short           null,
   last_name            name_short           null,
   email                email                null,
   address              address              null,
   constraint PK_USER primary key (pk_user)
);

create table user_additional (
   pk_user_additional   primary_key                 not null,
   pk_user              primary_key                 null,
   music                string_medium        null,
   cinema               string_medium        null,
   art                  string_medium        null,
   constraint PK_USER_ADDITIONAL primary key (pk_user_additional)
);

alter table user_additional
   add constraint FK_USER_ADD_REFERENCE_USER foreign key (pk_user)
      references "user" (pk_user);