/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.logic;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Client;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author USUARIO
 */
@Stateless
public class ClientDao {
    
    @PersistenceContext
    private EntityManager em;
    
    public void createClient(Object[] list){
        insertClient(Integer.parseInt(String.valueOf(list[0])), list[1].toString(), list[2].toString(), list[3].toString(), Integer.parseInt(String.valueOf(list[4])));
    }
    
    public void insertClient(int id, String name, String adress, String phonenumber, int cityId){
       em.createNativeQuery("INSERT INTO client (id, adress, name, phonenumber, city_id) VALUES (?,?,?,?,?)")
      .setParameter(1, id)
      .setParameter(2, adress)
      .setParameter(3, name)
      .setParameter(4, phonenumber)
      .setParameter(5, cityId)
      .executeUpdate();
    }

    public List<Client> getClients() {
        String query = "Select c from Client c";
        return em.createQuery(query).getResultList();
    }
}
