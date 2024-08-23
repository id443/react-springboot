package com.herreriasjose.reactspringboot;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Setter
@Getter
@AllArgsConstructor
@Table(name = "Client")
public class Client {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;

}
