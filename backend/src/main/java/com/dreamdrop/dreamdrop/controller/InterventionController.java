package com.dreamdrop.dreamdrop.controller;
import com.dreamdrop.dreamdrop.model.Intervention;
import com.dreamdrop.dreamdrop.service.InterventionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api/interventions")
public class InterventionController {

    private final InterventionService interventionService;

    @Autowired
    public InterventionController(InterventionService interventionService) {
        this.interventionService = interventionService;
    }

    @GetMapping
    public List<Intervention> getAllInterventions() {
        return interventionService.getAllInterventions();
    }

    @GetMapping("/{id}")
    public Intervention getInterventionById(@PathVariable Long id) {
        return interventionService.getInterventionById(id);
    }

    @PostMapping
    public Intervention createIntervention(@RequestBody Intervention intervention) {
        return interventionService.createIntervention(intervention);
    }

    @PutMapping("/{id}")
    public Intervention updateIntervention(@PathVariable Long id, @RequestBody Intervention updatedIntervention) {
        return interventionService.updateIntervention(id, updatedIntervention);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIntervention(@PathVariable Long id) {
        interventionService.deleteIntervention(id);
        return ResponseEntity.noContent().build();
    }
}
