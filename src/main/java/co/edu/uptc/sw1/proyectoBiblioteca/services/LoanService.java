/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.ClientDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.LoanDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Client;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Loan;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 *
 * @author USUARIO
 */
@Path("LoanService")
public class LoanService {
    @EJB
    private LoanDao ld;
    
    @POST
    public void add(Object[] loan) {
        System.out.println("TAmaniio: " + loan.length);
        for (int i = 0; i < loan.length; i++) {
            System.out.println(loan[i]);
        }
        ld.createLoan(loan);
    }
    
    @GET
    public List<Loan> enviarLista() {
        return ld.getLoan();
    }
}
