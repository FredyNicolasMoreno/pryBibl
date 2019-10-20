/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.logic;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.AutorDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.LoanDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Author;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Loan;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;

/**
 *
 * @author USUARIO
 */
@Stateless
public class LogicLoan {
    
    @EJB
    private LoanDao dao;
    
    public void insert (Loan author){
        dao.createLoan(author);
    }
    
    public List<Loan> enviarLista() {
        return dao.getLoan();
    }
}
