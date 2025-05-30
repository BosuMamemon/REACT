package com.example.react_exam_server.repository;

import com.example.react_exam_server.domain.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
