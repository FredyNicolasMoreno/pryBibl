/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.logic;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.BookDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Book;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author USUARIO
 */
@Stateless
public class LogicBook {
    @EJB
    private BookDao bd;
    
    public void insert (Book book){
        bd.createBook(book);
    }
    
    public List<Book> enviarLista() {
        return bd.getBooks();
    }
}
