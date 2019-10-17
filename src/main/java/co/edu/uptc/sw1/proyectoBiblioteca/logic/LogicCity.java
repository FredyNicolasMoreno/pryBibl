/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.logic;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.CityDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.City;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author USUARIO
 */
@Stateless
public class LogicCity {
    
    @EJB
    private CityDao cityDao;
    
    public void insert (City city){
        cityDao.createCity(city);
    }
    
    public List<City> enviarLista() {
        return cityDao.getCities();
    }
}
