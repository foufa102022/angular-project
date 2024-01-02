package com.dreamdrop.dreamdrop.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "intervention")
@Data
public class Intervention {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "intervention_id_seq" )
    @SequenceGenerator(name = "intervention_id_seq", sequenceName = "intervention_id_seq", allocationSize = 1)
    private int id;

    @JsonIgnore
    @OneToMany(mappedBy = "intervention")
    private List<InterventionRelation> interventionRelations;


    @ManyToOne
    @JoinColumn(name = "idcategorie")
    private CategorieProjet categorieProjet;



    private String titre;
    private String description;
    private boolean isarchived;
    private int etat;
    private Date date_created ;


}
