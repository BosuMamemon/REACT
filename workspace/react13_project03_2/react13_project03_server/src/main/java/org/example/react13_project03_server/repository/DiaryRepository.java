package org.example.react13_project03_server.repository;

import org.example.react13_project03_server.entity.Diary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryRepository extends JpaRepository<Diary, Long> {
}
