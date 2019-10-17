/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Author;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author USUARIO
 */
@Stateless
public class AutorDao {

    @PersistenceContext
    private EntityManager em;

    public void createAutor(Object[] list) {
        insertAutor(Integer.parseInt(String.valueOf(list[0])), list[1].toString(), list[2].toString());
    }

    public void insertAutor(int id, String name, String nationality) {
        em.createNativeQuery("INSERT INTO author (id, name, nationality) VALUES (?,?,?)")
                .setParameter(1, id)
                .setParameter(2, name)
                .setParameter(3, nationality)
                .executeUpdate();
    }

    public List<Author> getAutor() {
        String query = "Select a from Author a";
        return em.createQuery(query).getResultList();
    }
}