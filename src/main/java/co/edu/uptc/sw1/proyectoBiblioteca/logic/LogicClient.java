/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.logic;

import co.edu.uptc.sw1.proyectoBiblioteca.persistence.dao.ClientDao;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Client;
import java.util.List;
import javax.ejb.EJB;

/**
 *
 * @author USUARIO
 */
public class LogicClient {
    @EJB
    private ClientDao cd;
    
    public void insert (Client client){
        cd.createClient(client);
    }
    
    public List<Client> enviarLista() {
        return cd.getClients();
    }
}
