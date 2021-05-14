package com.example.todolist;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@RestController

public class ListaController {
    private List<Tarea> listas;

    public ListaController(){
        listas = new ArrayList<>();
    }
    @GetMapping("/tareas")
    public List<Tarea> allTask(){
        return listas;
    }
    @PostMapping("/tareas")
    public RedirectView addNewTask(Tarea lista){
        listas.add(lista);
        return new RedirectView("/");
    }
}

