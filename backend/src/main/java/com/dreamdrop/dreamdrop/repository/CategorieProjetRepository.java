package com.dreamdrop.dreamdrop.repository;

import com.dreamdrop.dreamdrop.model.CategorieProjet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieProjetRepository extends JpaRepository<CategorieProjet, Long> {
}