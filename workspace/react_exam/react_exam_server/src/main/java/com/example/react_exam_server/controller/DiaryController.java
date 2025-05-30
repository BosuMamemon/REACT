package com.example.react_exam_server.controller;

import com.example.react_exam_server.dto.DiaryDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
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
}
