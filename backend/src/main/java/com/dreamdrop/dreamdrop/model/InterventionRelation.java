package com.dreamdrop.dreamdrop.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "interventionrelation")
@Data
public class InterventionRelation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator ="interventionrelation_id_seq")
    @SequenceGenerator(name = "interventionrelation_id_seq", sequenceName ="interventionrelation_id_seq", allocationSize = 1)
    private int id;
    private String role;
    private String description;

    @ManyToOne
    @JoinColumn(name = "idintervention", nullable = false)
    private Intervention intervention;


}
