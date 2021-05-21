package com.example.todolist.Controllers;

import com.example.todolist.models.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;


import java.util.ArrayList;
import java.util.List;

@RestController
public class BlockController {

    private List<Task> blocks;

    public BlockController() {blocks = new ArrayList<>();}

    @GetMapping("/blocks")
    public List<Task> allBlocks() {return blocks;}


    @PostMapping("/blocks")
    public RedirectView addBlock(Task added_task){
        blocks.add(added_task);
        return  new RedirectView("/");

    }


}

