package com.dreamdrop.dreamdrop.service;

import com.dreamdrop.dreamdrop.model.Utilisateur;
import com.dreamdrop.dreamdrop.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;

    @Autowired
    public UtilisateurService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    public Utilisateur getUtilisateurById(Long id) {
        return utilisateurRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Utilisateur not found with id: " + id));
    }

    public Utilisateur createUtilisateur(Utilisateur utilisateur) {
        // Add any business logic/validation if needed
        return utilisateurRepository.save(utilisateur);
    }

    public Utilisateur updateUtilisateur(Long id, Utilisateur updatedUtilisateur) {
        Utilisateur existingUtilisateur = getUtilisateurById(id);
        // Update fields of existingUtilisateur with those from updatedUtilisateur
        // Add any business logic/validation if needed
        return utilisateurRepository.save(existingUtilisateur);
    }

    public void deleteUtilisateur(Long id) {
        utilisateurRepository.deleteById(id);
    }
}
