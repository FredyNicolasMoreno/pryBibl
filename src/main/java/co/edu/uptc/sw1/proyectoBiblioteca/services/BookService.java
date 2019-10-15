/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Book;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Client;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 *
 * @author USUARIO
 */
@Path("BookService")
public class BookService {
    ArrayList<Book> list = new ArrayList();
    @POST
    public void add(Object[] book) {
       
    }
    
    @GET
    public List<Book> enviarLista() {
        System.out.println("HOls");
        return list;
    }
}
