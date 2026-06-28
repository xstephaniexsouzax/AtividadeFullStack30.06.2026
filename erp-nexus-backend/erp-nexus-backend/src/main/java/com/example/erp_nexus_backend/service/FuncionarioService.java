package com.example.erp_nexus_backend.service;

import com.example.erp_nexus_backend.dto.FuncionarioRequestDTO;
import com.example.erp_nexus_backend.dto.FuncionarioResponseDTO;
import com.example.erp_nexus_backend.model.FuncionarioModel;
import com.example.erp_nexus_backend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository repository;

    public List<FuncionarioResponseDTO> listarTodos() {
        return repository
                .findAll()
                .stream()
                .map(f -> new FuncionarioResponseDTO(
                        f.getId(),
                        f.getNome(),
                        f.getTelefone(),
                        f.getEmail(),
                        f.getCargo(),
                        f.getSetor()
                ))
                .toList();
    }

    public FuncionarioModel salvarFuncionario(FuncionarioRequestDTO dto) {
        if (repository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Já existe um funcionário cadastrado com este e-mail.");
        }

        FuncionarioModel novoFuncionario = new FuncionarioModel();
        novoFuncionario.setNome(dto.getNome());
        novoFuncionario.setTelefone(dto.getTelefone());
        novoFuncionario.setEmail(dto.getEmail());
        novoFuncionario.setCargo(dto.getCargo());
        novoFuncionario.setSetor(dto.getSetor());

        return repository.save(novoFuncionario);
    }
}