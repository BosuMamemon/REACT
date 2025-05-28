package org.example.react13_project03_server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.example.react13_project03_server.entity.Diary;
import org.example.react13_project03_server.service.DiaryService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/diary")
@RequiredArgsConstructor
@Log4j2
public class DiaryController {
    private final DiaryService diaryService;

    @PostMapping("/insert")
    @ResponseBody
    public Diary postInsert(@RequestBody Diary diary) {
        return diaryService.insert(diary);
    }

    @GetMapping("list")
    @ResponseBody
    public List<Diary> getList() {
        return diaryService.list();
    }

    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public String delete(@PathVariable("id") long id) {
        diaryService.delete(id);
        return "OK";
    }

    @PutMapping("/update")
    public void putUpdate(@RequestBody Diary diary) {
        diaryService.update(diary);
    }
}
