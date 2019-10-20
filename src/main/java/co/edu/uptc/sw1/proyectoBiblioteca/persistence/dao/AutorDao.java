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

    public void createAutor(Author author){
        String query = "select max(a.id) from Author a";
        if(Integer.parseInt(em.createQuery(query).getSingleResult().toString()) == 0){
            author.setId(1);
        }else{
            author.setId(Integer.parseInt(em.createQuery(query).getSingleResult().toString()) + 1);
        }
        em.persist(author);
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