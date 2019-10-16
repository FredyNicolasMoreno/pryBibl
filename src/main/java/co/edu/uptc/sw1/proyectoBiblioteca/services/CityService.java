/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.logic.CityDao;
import co.edu.uptc.sw1.proyectoBiblioteca.logic.ClientDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.City;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Client;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 *
 * @author USUARIO
 */
@Path("CityService")
public class CityService {
     @EJB
    private CityDao cd;

     @POST
    public void add(Object[] city) {
        cd.createCity(city);
    }
    
    @GET
    public List<City> enviarLista() {
        return cd.getCities();
    }
}
