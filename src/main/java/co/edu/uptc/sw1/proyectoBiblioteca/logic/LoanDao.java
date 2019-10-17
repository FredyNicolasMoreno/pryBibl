/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.logic;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Loan;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.LoanState;
import java.time.LocalDate;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author USUARIO
 */
@Stateless
public class LoanDao {

    @PersistenceContext
    private EntityManager em;

    public void createLoan(Object[] list) {
        insertLoan(Integer.parseInt(String.valueOf(list[0])), LocalDate.parse(list[1].toString()), Integer.parseInt(list[2].toString()), list[3].toString(), list[4].toString(), Integer.parseInt(list[5].toString()),Integer.parseInt(list[6].toString()));
    }

    public void insertLoan(int id, LocalDate date, int days, String loanstate, String observation, int bookId, int clientId) {
        em.createNativeQuery("INSERT INTO loan (id, date, days, fine, loanstate, observation, book_id, client_id) VALUES (?,?,?,?,?,?,?,?)")
                .setParameter(1, id)
                .setParameter(2, date)
                .setParameter(3, days)
                .setParameter(4, 0)
                .setParameter(5, LoanState.valueOf(loanstate))
                .setParameter(6, observation)
                .setParameter(7, bookId)
                .setParameter(8, clientId)
                .executeUpdate();
    }

    public List<Loan> getLoan() {
        String query = "Select l from Loan l";
        return em.createQuery(query).getResultList();
    }
}
