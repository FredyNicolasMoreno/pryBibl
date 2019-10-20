/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Loan;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.LoanState;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TemporalType;

/**
 *
 * @author USUARIO
 */
@Stateless
public class LoanDao {

    @PersistenceContext
    private EntityManager em;

    public void createLoan(Loan loan) {
        String query = "select max(l.id) from Loan l";
        if(Integer.parseInt(em.createQuery(query).getSingleResult().toString()) == 0){
            loan.setId(1);
        }else{
            loan.setId(Integer.parseInt(em.createQuery(query).getSingleResult().toString()) + 1);
        }
        em.persist(loan);
    }

    public void insertLoan(int id, String date, int days, String loanstate, String observation, int bookId, int clientId) {
        String newd= date.substring(5, 7) + "/"+ date.substring(8, 10)+ "/" + date.substring(0,4);
        Date date1 = null;
		try {
			date1 = new SimpleDateFormat("MM/dd/yyyy").parse(newd);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
        em.createNativeQuery("INSERT INTO loan (id, date, days, fine, loanstate, observation, book_id, client_id) VALUES (?,?,?,?,?,?,?,?)")
                .setParameter(1, id)
                .setParameter(2, new Date(), TemporalType.DATE)
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
