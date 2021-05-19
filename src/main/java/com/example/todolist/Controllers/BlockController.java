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

    public List<Task> blocks = new ArrayList<>();

    @GetMapping("/blocks")
    public List<Task> addBlock() {return blocks;}


    @PostMapping("/blocks")
    public void addBlock(Task task) {
        blocks.add(task);
    }

/*System.out.println(blocks)*/
}

