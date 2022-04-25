drop procedure if exists reload_club_data();
drop procedure if exists remove_club_data();
drop procedure if exists insert_club_data();


create procedure reload_club_data()
    language plpgsql as
$$
begin
    call remove_club_data();
    call insert_club_data();
end
$$;

create procedure remove_club_data()
    language plpgsql as
$$
begin
    -- noinspection SqlWithoutWhere
    delete from club;
end
$$;

create procedure insert_club_data()
    language plpgsql as
$$
begin
    insert into club (name, genre, city, capacity, threshold) values ('Club Arcane', 'Pop', 'Toronto', 100, 70);
    insert into club (name, genre, city, capacity, threshold) values ('Club Underground', 'Hip Hop', 'Buffalo', 50, 30);
    insert into club (name, genre, city, capacity, threshold) values ('Club Soda', 'Jazz', 'Worcester', 20, 12);
    insert into club (name, genre, city, capacity, threshold) values ('Studio 52', 'Rock', 'Washington D.C.', 52, 32);
end
$$;