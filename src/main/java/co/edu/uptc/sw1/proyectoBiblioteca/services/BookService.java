/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.logic.LogicBook;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Book;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 *
 * @author USUARIO
 */
@Path("BookService")
public class BookService {
    
    @EJB
    private LogicBook lb;
    
    @POST
    public void add(Book book) {
       lb.insert(book);
    }
    
    @GET
    public List<Book> enviarLista() {
        return lb.enviarLista();
    }
}
