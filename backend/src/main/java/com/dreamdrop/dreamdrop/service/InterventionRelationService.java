package com.dreamdrop.dreamdrop.service;

import com.dreamdrop.dreamdrop.model.InterventionRelation;
import com.dreamdrop.dreamdrop.repository.InterventionRelationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterventionRelationService {

    private final InterventionRelationRepository interventionRelationRepository;

    @Autowired
    public InterventionRelationService(InterventionRelationRepository interventionRelationRepository) {
        this.interventionRelationRepository = interventionRelationRepository;
    }

    public List<InterventionRelation> getAllInterventionRelations() {
        return interventionRelationRepository.findAll();
    }

    public InterventionRelation getInterventionRelationById(Long id) {
        return interventionRelationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("InterventionRelation not found with id: " + id));
    }

    public InterventionRelation createInterventionRelation(InterventionRelation interventionRelation) {
        // Add any business logic/validation if needed
        return interventionRelationRepository.save(interventionRelation);
    }

    public InterventionRelation updateInterventionRelation(Long id, InterventionRelation updatedInterventionRelation) {
        InterventionRelation existingInterventionRelation = getInterventionRelationById(id);
        // Update fields of existingInterventionRelation with those from updatedInterventionRelation
        // Add any business logic/validation if needed
        return interventionRelationRepository.save(existingInterventionRelation);
    }

    public void deleteInterventionRelation(Long id) {
        interventionRelationRepository.deleteById(id);
    }
}
