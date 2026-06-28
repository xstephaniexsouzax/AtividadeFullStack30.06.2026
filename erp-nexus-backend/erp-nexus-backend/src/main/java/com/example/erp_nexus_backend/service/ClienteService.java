package com.example.erp_nexus_backend.service;
import com.example.erp_nexus_backend.dto.ClienteRequestDTO;
import com.example.erp_nexus_backend.dto.ClienteResponseDTO;
import com.example.erp_nexus_backend.model.ClienteModel;
import com.example.erp_nexus_backend.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    public List<ClienteResponseDTO> listarTodos() {
        return repository
                .findAll()
                .stream()
                .map(c -> new ClienteResponseDTO(
                        c.getId(),
                        c.getNome(),
                        c.getEmail(),
                        c.getTelefone()
                ))
                .toList();
    }

    public ClienteModel salvarCliente(ClienteRequestDTO dto) {
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Já existe um cliente cadastrado com este e-mail.");
        }
        if (repository.findByCpf(dto.getCpf()).isPresent()) {
            throw new RuntimeException("Já existe um cliente cadastrado com este CPF.");
        }

        ClienteModel novoCliente = new ClienteModel();
        novoCliente.setNome(dto.getNome());
        novoCliente.setEmail(dto.getEmail());
        novoCliente.setTelefone(dto.getTelefone());
        novoCliente.setCpf(dto.getCpf());

        return repository.save(novoCliente);
    }
}