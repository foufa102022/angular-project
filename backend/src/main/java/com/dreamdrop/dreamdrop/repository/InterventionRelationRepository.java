package com.dreamdrop.dreamdrop.repository;

import com.dreamdrop.dreamdrop.model.InterventionRelation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterventionRelationRepository extends JpaRepository<InterventionRelation, Long> {
}