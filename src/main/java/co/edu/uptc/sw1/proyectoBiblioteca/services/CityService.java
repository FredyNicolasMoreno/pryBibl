/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.logic.LogicCity;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.City;
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
     private LogicCity p;

     @POST
    public void add(City city) {
        //cd.createCity(city);
        p.insert(city);
    }
    
    @GET
    public List<City> enviarLista() {
        return p.enviarLista();
    }
}
