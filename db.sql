create database rsa;
use rsa;
create table Mechanics(
	mechid int auto_increment,
    username varchar(225) not null,
    password varchar(225) not null,
    location varchar(225) not null,
    shop_name varchar(225),
    base_cost int,
    phone_num varchar(225) not null,
    email varchar(225) not null,
    primary key(mechid)
);
insert into mechanics values (1,'testmech','pass','chennai','test shop',200,'9876543210','test@email.com'),
(2,'testmech1','pass1','mumbai','test shop 1',300,'9876543214','test1@email.com'),
(3,'testmech3','pass2','delhi','test shop 2',400,'9876633214','test2@email.com');
select * from mechanics;
create table user(
	userid int auto_increment,
    username varchar(225) not null,
    password varchar(225) not null,
    vehicle_type varchar(225) not null,
    vehicle_model varchar(225) not null,
    location varchar(225),
    phone_num varchar(225) not null,
    email varchar(225) not null,
    problem varchar(225),
    primary key(userid)
);
insert into user values(1,'testuser','pass','car','Audi R8','chennai','987654637','user@email.com','not starting'); 
insert into user values(2,'testuser2','pass2','bike','Revolt RV400','Mumbai','9837465321','user2@email.com','Slow Speed'); 
select * from user;
create table request(
	reqid int auto_increment,
    request_content varchar(225),
    userid int not null,
    mechid int not null,
    primary key(reqid)
);
insert into request values (1,"Kicker not working",1,1);
select * from request;
create table feedback(
	feedid int auto_increment,
    feedback_content varchar(225),
    userid int not null,
    mechid int not null,
    primary key(feedid)
);
insert into feedback values (1,"Very Good Service",1,1);
select * from feedback;