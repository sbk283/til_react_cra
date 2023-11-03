package org.example.article.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class Article {
    private long id;
    private String title;
    private String content;
    public void article (long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
