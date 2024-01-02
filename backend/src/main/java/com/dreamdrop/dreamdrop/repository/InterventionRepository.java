package com.dreamdrop.dreamdrop.repository;

import com.dreamdrop.dreamdrop.model.Intervention;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterventionRepository extends JpaRepository<Intervention, Long> {
}