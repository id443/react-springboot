package com.sma.reactspringboot.repository;

import com.sma.reactspringboot.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.ListCrudRepository;

public interface ClientRepository extends ListCrudRepository<Client, Long> {
}
