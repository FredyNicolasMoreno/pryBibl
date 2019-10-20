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

    public List<Loan> getLoan() {
        String query = "Select l from Loan l";
        return em.createQuery(query).getResultList();
    }
}
