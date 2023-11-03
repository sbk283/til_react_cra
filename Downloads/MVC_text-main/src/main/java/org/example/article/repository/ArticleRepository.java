package org.example.article.repository;

import org.example.article.entity.Article;

import java.util.ArrayList;
import java.util.List;

public class ArticleRepository {
    List<Article> articleList = new ArrayList<>();
    long lastId = 0;

    public long create(String title, String content) {
        lastId++;
        Article article = new Article(lastId, title, content);
        articleList.add(article);

        return lastId;
    }

    public List<Article> getArticleListAll() {
        return articleList;
    }

    public void remove(Article article) {
        articleList.remove(article);
    }

    public void modify(Article article, String title, String content) {
        article.setTitle(title);
        article.setContent(content);
    }

    public Article getArticleFindById(long id) {
        for (int i = 0; i < articleList.size(); i++) {
            Article article = articleList.get(i);
            if (article.getId() == id) {
                return article;
            }
        }
        return null;
    }
}
