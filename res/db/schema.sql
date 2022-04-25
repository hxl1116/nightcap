drop table if exists club;

create table club
(
    id        int primary key generated always as identity,
    name      varchar(50)     not null,
    genre     varchar(20)     not null,
    city      varchar(50)     not null,
    volume    int default 0   not null,
    capacity  int default 100 not null,
    threshold int default 80  not null
);
