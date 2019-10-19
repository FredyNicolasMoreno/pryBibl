/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw1.proyectoBiblioteca.services;

import co.edu.uptc.sw1.proyectoBiblioteca.logic.LogicClient;
import co.edu.uptc.sw1.proyectoBiblioteca.persistence.entities.Client;
import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

/**
 *
 * @author USUARIO
 */
@Path("ClientService")
public class ClientService {
    
    @EJB
    private LogicClient clients;
    
    @POST
    public void add(Client client) {
        this.clients.insert(client);
    }
    
    @GET
    public List<Client> enviarLista() {
        return clients.enviarLista();
    }
}
