package com.example.react_exam_server.controller;

import com.example.react_exam_server.dto.DiaryDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import com.example.react_exam_server.service.DiaryService;

import java.util.List;

@RestController
@RequestMapping("/diary")
@RequiredArgsConstructor
@Log4j2
public class DiaryController {
    private final DiaryService diaryService;

    @GetMapping("/list")
    @ResponseBody
    public List<DiaryDto> getList() {
        return diaryService.list();
    }

    @PostMapping("/new")
    @ResponseBody
    public String postNew(@RequestBody DiaryDto diaryDto) {
        diaryService.newDiary(diaryDto);
        return "ok";
    }

    @PutMapping("/edit/{id}")
    @ResponseBody
    public String putEdit(@PathVariable("id") Long id, @RequestBody DiaryDto diaryDto) {
        return diaryService.editDiary(id, diaryDto);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public String delete(@PathVariable("id") Long id) {
        return diaryService.delete(id);
    }
}
