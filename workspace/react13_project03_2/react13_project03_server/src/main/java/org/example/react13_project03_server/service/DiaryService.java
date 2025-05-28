package org.example.react13_project03_server.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.example.react13_project03_server.entity.Diary;
import org.example.react13_project03_server.repository.DiaryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class DiaryService {
    private final DiaryRepository diaryRepository;

    public Diary insert(Diary diary) {
        return diaryRepository.save(diary);
    }
    public List<Diary> list() {
        return diaryRepository.findAll();
    }
    public void delete(long id) {
        diaryRepository.delete(diaryRepository.findById(id).orElse(null));
    }
    @Transactional
    public void update(Diary diary) {
//        더티 체킹
//        영속성 컨텍스트에 있는, 수정할 객체를 가지고 옴
        Diary originalDiary = diaryRepository.findById(diary.getId()).orElse(null);
        originalDiary.setContent(diary.getContent());
        originalDiary.setDate(diary.getDate());
        originalDiary.setEmotionId(diary.getEmotionId());
//        Transactional 어노테이션이 수정된 객체에 대해 flush 함수를 호출함
    }
}
