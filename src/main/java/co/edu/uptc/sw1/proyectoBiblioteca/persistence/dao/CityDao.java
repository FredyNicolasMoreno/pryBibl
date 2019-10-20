/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.City;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author USUARIO
 */
@Stateless
public class CityDao {
    @PersistenceContext
    private EntityManager em;
    
    public void createCity(City city){
        String query = "select max(c.id) from City c";
        if (Integer.parseInt(em.createQuery(query).getSingleResult().toString()) == 0) {
            city.setId(1);
        }else{
            city.setId(Integer.parseInt(em.createQuery(query).getSingleResult().toString()) + 1);
        }
        em.persist(city);
    }
    
   /* public void insertCity(int id, String name){
       em.createNativeQuery("INSERT INTO city (id, name) VALUES (?,?)")
      .setParameter(1, id)
      .setParameter(2, name)
      .executeUpdate();
    }*/
    
    public List<City> getCities() {
        String query = "Select c from City c";
        return em.createQuery(query).getResultList();
    }
}