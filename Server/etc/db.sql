CREATE TABLE public.users (
	id serial4 NOT NULL,
	firstname varchar(100) NOT NULL,
	middlename varchar(100) NULL,
	lastname varchar(100) NOT NULL,
	email varchar(255) NOT NULL,
	userid varchar(50) NOT NULL,
	profile_picture varchar(255) NULL,
	isfirstlogin bool DEFAULT true NULL,
	isdeleted bool DEFAULT false NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_userid_key UNIQUE (userid)
);