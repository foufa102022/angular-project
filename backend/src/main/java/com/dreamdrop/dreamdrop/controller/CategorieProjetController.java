package com.dreamdrop.dreamdrop.controller;

import com.dreamdrop.dreamdrop.model.CategorieProjet;
import com.dreamdrop.dreamdrop.service.CategorieProjetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api/categories")
public class CategorieProjetController {

    private final CategorieProjetService categorieProjetService;

    @Autowired
    public CategorieProjetController(CategorieProjetService categorieProjetService) {
        this.categorieProjetService = categorieProjetService;
    }

    @GetMapping
    public List<CategorieProjet> getAllCategories() {
        return categorieProjetService.getAllCategories();
    }

    @GetMapping("/{id}")
    public CategorieProjet getCategoryById(@PathVariable Long id) {
        return categorieProjetService.getCategoryById(id);
    }

    @PostMapping
    public CategorieProjet createCategory(@RequestBody CategorieProjet category) {
        return categorieProjetService.createCategory(category);
    }

    @PutMapping("/{id}")
    public CategorieProjet updateCategory(@PathVariable Long id, @RequestBody CategorieProjet updatedCategory) {
        return categorieProjetService.updateCategory(id, updatedCategory);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        categorieProjetService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }
}