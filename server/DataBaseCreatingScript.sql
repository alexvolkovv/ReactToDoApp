-- COLOR
create table color
(
    id  serial     not null,
    hex varchar(7) not null
);

ALTER TABLE color
    ADD CONSTRAINT color_pk PRIMARY KEY (id);


-- LIST
create table list
(
    id       serial       not null,
    name     varchar(255) not null,
    color_id int          not null
);

alter table list
    add constraint list_pk PRIMARY KEY (id);
alter table list
    add constraint list_fk foreign key (color_id) references color (id) on delete cascade;


-- TASK
create table task
(
    id        serial       not null,
    name      varchar(255) not null,
    list_id   int          not null,
    completed boolean      not null default false
);

alter table task
    add constraint task_pk primary key (id);
alter table task
    add constraint task_fk foreign key (list_id) references list (id) on delete cascade;


-- FIlling values
insert into color(hex)
values ('#000000'),
       ('#cccccc'),
       ('#00FF00'),
       ('#FFFF00'),
       ('#00FFFF');

insert into list(name, color_id)
values ('Homework', 2),
       ('Front-end', 3),
       ('Sport', 1),
       ('Reading', 4),
       ('To watch', 5);

insert into task(name, list_id)
values ('Высшая математика', 1),
       ('Сделать свой интернет магазин', 2),
       ('Пробежать 1 км', 3),
       ('Прочитать всю википедию', 4),
       ('Посмотреть человека паука!', 5);