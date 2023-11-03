package org.example.article.service;

import org.example.article.entity.Article;
import org.example.article.repository.ArticleRepository;

import java.util.ArrayList;
import java.util.List;

public class ArticleService {
    ArticleRepository articleRepository = new ArticleRepository();
    List<Article> articleList = new ArrayList<>();
    long lastId = 0;

    public long create(String title, String content) {
        return articleRepository.create(title, content);
    }

    public List<Article> getArticleListAll() {
        return articleRepository.getArticleListAll();
    }

    public void remove(Article article) {
        this.articleRepository.remove(article);
    }

    public void modify(Article article, String title, String content) {
        this.articleRepository.modify(article, title, content);
    }

    public Article getArticleFindById(long id) {
        return this.articleRepository.getArticleFindById(id);
    }
}