/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities;

/**
 *
 * @author fnico
 */

import javax.persistence.Entity;
import javax.persistence.Id;

import javax.persistence.Entity;

@Entity
public class City {

    @Id
    private int id;
    private String name;

 
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    
    
/*
    @Override
    public String toString() {
        return "id: "+ id + ", nombre: " + name; //To change body of generated methods, choose Tools | Templates.
    }*/

    public void setName(String name) {
        this.name = name;
    }
 
    
}
