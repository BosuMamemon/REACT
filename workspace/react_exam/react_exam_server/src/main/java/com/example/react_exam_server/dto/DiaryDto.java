package com.example.react_exam_server.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class DiaryDto {
    private long id;
    private String content;
    private LocalDateTime date;
    private int emotionId;
}
