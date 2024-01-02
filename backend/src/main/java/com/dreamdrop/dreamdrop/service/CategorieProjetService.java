package com.dreamdrop.dreamdrop.service;

import com.dreamdrop.dreamdrop.model.CategorieProjet;
import com.dreamdrop.dreamdrop.repository.CategorieProjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieProjetService {

    private final CategorieProjetRepository categorieProjetRepository;

    @Autowired
    public CategorieProjetService(CategorieProjetRepository categorieProjetRepository) {
        this.categorieProjetRepository = categorieProjetRepository;
    }

    public List<CategorieProjet> getAllCategories() {
        return categorieProjetRepository.findAll();
    }

    public CategorieProjet getCategoryById(Long id) {
        return categorieProjetRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found with id: " + id));
    }

    public CategorieProjet createCategory(CategorieProjet category) {
        // Add any business logic/validation if needed
        return categorieProjetRepository.save(category);
    }

    public CategorieProjet updateCategory(Long id, CategorieProjet updatedCategory) {
        CategorieProjet existingCategory = getCategoryById(id);
        // Update fields of existingCategory with those from updatedCategory
        // Add any business logic/validation if needed
        return categorieProjetRepository.save(existingCategory);
    }

    public void deleteCategory(Long id) {
        categorieProjetRepository.deleteById(id);
    }
}