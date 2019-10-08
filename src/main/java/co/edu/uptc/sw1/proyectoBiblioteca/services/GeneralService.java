/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.libraryDAO;
import javax.ejb.EJB;
import javax.ws.rs.Path;

/**
 *
 * @author USUARIO
 */
@Path("GeneralService")
public class GeneralService {
    @EJB
   private libraryDAO ld;
}
