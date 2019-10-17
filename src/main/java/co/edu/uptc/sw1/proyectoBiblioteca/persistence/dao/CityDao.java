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
    
    public void createCity(City list){
        //insertCity(Integer.parseInt(String.valueOf(list[0])), list[1].toString());
        em.persist(list);
    }
    
    public void insertCity(int id, String name){
       em.createNativeQuery("INSERT INTO city (id, name) VALUES (?,?)")
      .setParameter(1, id)
      .setParameter(2, name)
      .executeUpdate();
    }
    
    public List<City> getCities() {
        String query = "Select c from City c";
        return em.createQuery(query).getResultList();
    }
}
