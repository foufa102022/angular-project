package com.dreamdrop.dreamdrop.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "utilisateur")
@Data
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "utilisateur_id_seq")
    @SequenceGenerator(name = "utilisateur_id_seq", sequenceName = "utilisateur_id_seq", allocationSize = 1)
    private int id;




    private String nom;

    private String prenom;

    private String role;

    @Column(unique = true)
    private String email;

    private String password;

    private boolean isblocked;

    private boolean isarchived;

    @CreationTimestamp
    private Date created_date;
}