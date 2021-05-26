package com.example.todolist.Controllers;

import com.example.todolist.models.Task;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;


import java.util.HashMap;
import java.util.Map;

@RestController
public class BlockController {

    private Map<Integer,Task> blocks;
    private Integer counter = 0;


    public BlockController() {blocks = new HashMap<>();}


    @GetMapping("/blocks")
    public Map<Integer,Task> allBlocks() {return blocks;}


    @PostMapping("/blocks")
    public RedirectView addBlock(Task added_task){
        blocks.put(counter++,added_task);
        return  new RedirectView("/");

    }
    @DeleteMapping("/blocks/{index}")
    void deleteBlock(@PathVariable int index) {
        blocks.remove(index);
    }

}

