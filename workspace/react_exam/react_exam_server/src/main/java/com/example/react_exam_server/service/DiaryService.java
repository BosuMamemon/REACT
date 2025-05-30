package com.example.react_exam_server.service;

import com.example.react_exam_server.domain.Diary;
import com.example.react_exam_server.dto.DiaryDto;
import com.example.react_exam_server.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class DiaryService {
    private final DiaryRepository diaryRepository;

    public List<DiaryDto> list() {
        return diaryRepository.findAll().stream().map(it -> entityToDto(it)).toList();
    }

    private Diary dtoToEntity(DiaryDto diaryDto) {
        return Diary.builder()
                .id(diaryDto.getId())
                .content(diaryDto.getContent())
                .date(diaryDto.getDate())
                .emotionId(diaryDto.getEmotionId())
                .build();
    }
    private DiaryDto entityToDto(Diary diary) {
        return DiaryDto.builder()
                .content(diary.getContent())
                .date(diary.getDate())
                .emotionId(diary.getEmotionId())
                .id(diary.getId())
                .build();
    }
}
