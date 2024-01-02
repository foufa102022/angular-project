package com.dreamdrop.dreamdrop.service;

import com.dreamdrop.dreamdrop.model.Intervention;
import com.dreamdrop.dreamdrop.repository.InterventionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterventionService {

    private final InterventionRepository interventionRepository;

    @Autowired
    public InterventionService(InterventionRepository interventionRepository) {
        this.interventionRepository = interventionRepository;
    }

    public List<Intervention> getAllInterventions() {
        return interventionRepository.findAll();
    }

    public Intervention getInterventionById(Long id) {
        return interventionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Intervention not found with id: " + id));
    }

    public Intervention createIntervention(Intervention intervention) {
        // Add any business logic/validation if needed
        return interventionRepository.save(intervention);
    }

    public Intervention updateIntervention(Long id, Intervention updatedIntervention) {
        Intervention existingIntervention = getInterventionById(id);
        // Update fields of existingIntervention with those from updatedIntervention
        // Add any business logic/validation if needed
        return interventionRepository.save(existingIntervention);
    }

    public void deleteIntervention(Long id) {
        interventionRepository.deleteById(id);
    }
}