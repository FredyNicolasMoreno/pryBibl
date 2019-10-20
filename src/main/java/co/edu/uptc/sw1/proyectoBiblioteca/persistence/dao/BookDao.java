/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Book;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author USUARIO
 */
@Stateless
public class BookDao {
    @PersistenceContext
    private EntityManager em;
    
     public void createBook(Book book){
         String query = "select max(b.id) from Book b";
        if (Integer.parseInt(em.createQuery(query).getSingleResult().toString()) == 0) {
            book.setId(1);
        }else{
            book.setId(Integer.parseInt(em.createQuery(query).getSingleResult().toString()) + 1);
        }
        em.persist(book);
     }
    
    /*public void insertBook(int id, String title, String bookdescription, int quantity, int edition, int authorId){
       em.createNativeQuery("INSERT INTO book (title, bookdescription, quantity, edition, id, author_id) VALUES (?,?,?,?,?,?)")
      .setParameter(1, title)
      .setParameter(2, bookdescription)
      .setParameter(3, quantity)
      .setParameter(4, edition)
      .setParameter(5, id)
      .setParameter(6, authorId)
      .executeUpdate();
    }*/

    public List<Book> getBooks() {
        String query = "Select b from Book b";
        return em.createQuery(query).getResultList();
    }
}
