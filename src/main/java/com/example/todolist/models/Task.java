package com.example.todolist.models;

public class Task {
   private final String task_name;

   public Task (String task_name){
       this.task_name = task_name;
   }

    public String getTask() {
        return task_name;
    }
}
