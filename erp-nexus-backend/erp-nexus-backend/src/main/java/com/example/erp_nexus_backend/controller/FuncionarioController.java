package com.example.erp_nexus_backend.controller;

import com.example.erp_nexus_backend.dto.FuncionarioRequestDTO;
import com.example.erp_nexus_backend.dto.FuncionarioResponseDTO;
import com.example.erp_nexus_backend.service.FuncionarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/funcionarios")
@CrossOrigin("*")
public class FuncionarioController {

    @Autowired
    private FuncionarioService service;

    @GetMapping
    public ResponseEntity<List<FuncionarioResponseDTO>> listar() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(service.listarTodos());
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(
            @Valid @RequestBody FuncionarioRequestDTO dto) {
        service.salvarFuncionario(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("mensagem", "Funcionário cadastrado com sucesso."));
    }
}