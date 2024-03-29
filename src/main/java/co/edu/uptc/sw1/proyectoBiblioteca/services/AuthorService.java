/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.logic.LogicAuthor;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Author;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 *
 * @author USUARIO
 */
@Path("AuthorService")
public class AuthorService {
    @EJB
    private LogicAuthor la;
    
    @POST
    public void add(Author author) {
       la.insert(author);
    }
    
    @GET
    public List<Author> enviarLista() {
        return la.enviarLista();
    }
    
}