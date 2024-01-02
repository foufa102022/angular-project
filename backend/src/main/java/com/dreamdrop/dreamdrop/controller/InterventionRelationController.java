package com.dreamdrop.dreamdrop.controller;

import com.dreamdrop.dreamdrop.model.InterventionRelation;
import com.dreamdrop.dreamdrop.service.InterventionRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api/interventionrelations")
public class InterventionRelationController {

    private final InterventionRelationService interventionRelationService;

    @Autowired
    public InterventionRelationController(InterventionRelationService interventionRelationService) {
        this.interventionRelationService = interventionRelationService;
    }

    @GetMapping
    public List<InterventionRelation> getAllInterventionRelations() {
        return interventionRelationService.getAllInterventionRelations();
    }

    @GetMapping("/{id}")
    public InterventionRelation getInterventionRelationById(@PathVariable Long id) {
        return interventionRelationService.getInterventionRelationById(id);
    }

    @PostMapping
    public InterventionRelation createInterventionRelation(@RequestBody InterventionRelation interventionRelation) {
        return interventionRelationService.createInterventionRelation(interventionRelation);
    }

    @PutMapping("/{id}")
    public InterventionRelation updateInterventionRelation(@PathVariable Long id, @RequestBody InterventionRelation updatedInterventionRelation) {
        return interventionRelationService.updateInterventionRelation(id, updatedInterventionRelation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInterventionRelation(@PathVariable Long id) {
        interventionRelationService.deleteInterventionRelation(id);
        return ResponseEntity.noContent().build();
    }
}