package org.example;

import org.example.article.controller.ArticleController;
import org.example.member.controller.MemberController;
import org.example.system.SystemController;

import java.util.Scanner;

public class App {
    ArticleController articleController = new ArticleController();
    MemberController memberController = new MemberController();
    SystemController systemController = new SystemController();
    public void run() {
        Scanner sc = new Scanner(System.in);
        System.out.println("⭐⭐⭐ 텍스트 게시판 ⭐⭐⭐");

        while (true) {
            System.out.print("명령 >> ");
            String command = sc.nextLine().trim();

            switch (command) {
                case "종료" :
                    systemController.exit();
                    return;
                case "로그인" :
                    memberController.login();
                    break;
                case "회원가입" :
                    memberController.sign();
                    break;
                case "로그아웃" :
                    memberController.logout();
                    break;
                case "등록" :
                    articleController.write();
                    break;
                case "목록" :
                    articleController.list();
                    break;
                case "삭제" :
                    articleController.remove();
                    break;
                case "수정" :
                    articleController.modify();
                    break;
            }
        }
    }
}