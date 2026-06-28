package com.example.erp_nexus_backend.dto;

import jakarta.validation.constraints.*;

public class FuncionarioRequestDTO {

    @NotBlank(message = "O nome é obrigatório.")
    @Size(min = 2, max = 120, message = "O nome deve ter entre 2 e 120 caracteres.")
    private String nome;

    @NotBlank(message = "O telefone é obrigatório.")
    private String telefone;

    @NotBlank(message = "O e-mail é obrigatório.")
    @Email(message = "Deve ser um e-mail válido.")
    private String email;

    @NotBlank(message = "O cargo é obrigatório.")
    @Size(min = 2, max = 80, message = "O cargo deve ter entre 2 e 80 caracteres.")
    private String cargo;

    @NotBlank(message = "O setor é obrigatório.")
    @Size(min = 2, max = 80, message = "O setor deve ter entre 2 e 80 caracteres.")
    private String setor;

    public FuncionarioRequestDTO() {
    }

    public FuncionarioRequestDTO(String nome, String telefone, String email, String cargo, String setor) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cargo = cargo;
        this.setor = setor;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCargo() { return cargo; }
    public void setCargo(String cargo) { this.cargo = cargo; }

    public String getSetor() { return setor; }
    public void setSetor(String setor) { this.setor = setor; }
}