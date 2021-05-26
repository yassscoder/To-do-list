package com.example.todolist.models;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class TaskRepository {
    private Map<Integer,Task> blocks = new HashMap<>();
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private static Integer index = 0;

    public void TaskRepository(){

    }
    public void addTask(Task task){
        blocks.put(nextIndex(), task);
    }
    public Map<Integer, Task> getTasks() {
        return blocks;
    }
    public void deleteTask(Integer id){
        Task deletedTask = blocks.remove(id);
        if (deletedTask == null){
            logger.warn("Unable to remove task with id "+ id);
        }
    }
    private Integer nextIndex() {
        return index++;
    }
//    public void updateTask(Integer id, boolean markAsCompleted) {
//        Task task = blocks.get(id);
//        task.setComplete(markAsCompleted);
//        blocks.put(id, task);
//    }
}
