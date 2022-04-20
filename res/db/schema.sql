drop table if exists club;

create table club
(
    id        serial primary key not null,
    name      varchar(50),
    genre     varchar(20),
    city      varchar(50),
    capacity  integer,
    threshold integer
)
