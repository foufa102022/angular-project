-- Define the utilisateur table
create table utilisateur
(
    id serial primary key,
    nom varchar,
    prenom varchar,
    role varchar,
    email varchar unique,
    password varchar,
    isblocked boolean,
    isarchived boolean,
    created_date date
);

-- Define the categorieProjet table
create table categorieProjet
(
    id serial primary key,
    titre varchar,
    createdby integer references utilisateur(id),
    isarchived boolean,
    date_created date,
    foreign key (createdby) references utilisateur(id)
);

-- Define the intervention table
create table intervention
(
    id serial primary key,
    titre varchar,
    description text,
    isarchived boolean,
    idcategorie integer references categorieProjet(id),
    etat integer,
    date_created date,
    foreign key (idcategorie) references categorieProjet(id)
);

-- Define the interventionRelation table
create table interventionRelation
(
    id serial primary key,
    role varchar,
    description text,
    idintervention integer references intervention(id),
    foreign key (idintervention) references intervention(id)
);
-- insertion des données
INSERT INTO utilisateur (id, nom, prenom, role, email, password, isblocked, isarchived, created_date)
VALUES
  (1, 'Doe', 'John', 'Admin', 'john.doe@example.com', 'password123', false, false, '2023-01-01'),
  (2, 'Smith', 'Alice', 'User', 'alice.smith@example.com', 'pass456', false, false, '2023-01-02');
  
  INSERT INTO categorieprojet (id, titre, createdby, isarchived, date_created)
VALUES
  (1, 'Category A', 1, false, '2023-01-05'),
  (2, 'Category B', 2, false, '2023-01-06');
  
  INSERT INTO intervention (id, titre, description, isarchived, idcategorie, etat, date_created)
VALUES
  (1, 'Intervention 1', 'Description for Intervention 1', false, 1, 1, '2023-01-10'),
  (2, 'Intervention 2', 'Description for Intervention 2', false, 2, 2, '2023-01-12');

INSERT INTO interventionrelation (id, role, description, idintervention)
VALUES
  (1, 'Role A', 'Relation description for Intervention 1', 1),
  (2, 'Role B', 'Relation description for Intervention 2', 2);
