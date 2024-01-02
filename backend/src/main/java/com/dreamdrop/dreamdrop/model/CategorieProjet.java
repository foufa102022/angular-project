package com.dreamdrop.dreamdrop.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.List;


@Entity
@Table(name = "categorieprojet")
@Data
public class CategorieProjet {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="categorieprojet_id_seq" )
    @SequenceGenerator(name = "categorieprojet_id_seq", sequenceName = "categorieprojet_id_seq", allocationSize = 1)
    private int id;

    @ManyToOne
    @JoinColumn(name = "createdby")
    private Utilisateur createdby;


    private String titre;

    private boolean isarchived;

    @CreationTimestamp
    private Date date_created;

}