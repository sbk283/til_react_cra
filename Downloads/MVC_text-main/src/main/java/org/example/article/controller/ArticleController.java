package org.example.article.controller;

import org.example.Container;
import org.example.article.entity.Article;
import org.example.article.service.ArticleService;
import org.example.member.entity.Member;
import org.example.member.service.MemberService;

import java.util.ArrayList;
import java.util.List;

public class ArticleController{
    ArticleService articleService = new ArticleService();

    public void write() {
        System.out.print("제목 : ");
        String title = Container.getSc().nextLine().trim();
        System.out.print("내용 : ");
        String content = Container.getSc().nextLine().trim();

        long id = articleService.create(title, content);

        System.out.println(id + "번 게시글이 등록 되었습니다.");
    }

    public void list() {
        List<Article> articleList = articleService.getArticleListAll();
        if (articleList.isEmpty()) {
            System.out.println("등록된 게시글이 없습니다.");
            return;
        }
        System.out.println("번호 / 제목 / 내용");
        System.out.println("-".repeat(30));
        for (Article article : articleList) {
            System.out.printf("%d, %s, %s, %s\n", article.getId(), article.getTitle(), article.getContent());
        }
    }

    public void remove() {
        System.out.print("삭제하실 번호를 입력해주세요. >> ");
        long removeId = Long.parseLong(Container.getSc().nextLine().trim());

        Article article = this.articleService.getArticleFindById(removeId);

        if (article == null) {
            System.out.println("등록된 게시글이 없습니다.");
            return;
        }

        articleService.remove(article);

        System.out.println(removeId + "번 게시글이 삭제되었습니다.");
    }

    public void modify() {
        System.out.print("수정하실 번호를 입력해주세요. >> ");
        long modifyId = Long.parseLong(Container.getSc().nextLine().trim());

        Article article = this.articleService.getArticleFindById(modifyId);

        if (article == null) {
            System.out.println("등록된 게시글이 없습니다.");
            return;
        }

        System.out.println("기존 제목 : " + article.getTitle());
        System.out.print("수정할 제목 : ");
        String title = Container.getSc().nextLine().trim();

        System.out.println("기존 내용 : " + article.getContent());
        System.out.print("수정할 내용 : ");
        String content = Container.getSc().nextLine().trim();

        this.articleService.modify(article, title, content);

        System.out.println(modifyId + "번 게시글이 수정되었습니다.");
    }
}
