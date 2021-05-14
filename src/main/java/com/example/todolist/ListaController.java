package com.example.todolist;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController

public class ListaController {
    private List<Lista> listas;

    public ListaController(){
        listas = new ArrayList<>();
    }
    @GetMapping("/tareas")
    public List<Lista> allTask(){
        return listas;
    }
    @PostMapping("/tareas")
    public RedirectView addNewTask(Lista lista){
        lista.add(lista);
        return new RedirectView("/");
    }
}

