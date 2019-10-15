/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author USUARIO
 */
@Stateless
public class libraryPersistence {
    @PersistenceContext
    private EntityManager em;
    
    public void insertClient(int id, String name, String adress, String phonenumber, int cityId){
        System.out.println("siiiiiiiiii");
        String query = "select * from client";
        em.createQuery(query).getResultList();
       em.createNativeQuery("INSERT INTO client (ID, adress, name, phonenumber, city) VALUES (?,?,?,?,?)")
      .setParameter(1, id)
      .setParameter(2,adress)
      .setParameter(3, name)
      .setParameter(3, phonenumber)
      .setParameter(3, cityId)
      .executeUpdate();
    }
}
