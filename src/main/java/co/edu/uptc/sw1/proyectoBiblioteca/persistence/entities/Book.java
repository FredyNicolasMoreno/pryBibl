/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author fnico
 */
@Entity
public class Book {

    private String title;
    private String desc;
    private int quantity;
    private int edition;
    @Id
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
}
