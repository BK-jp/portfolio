import React from "react";

import java from 'images/icons/java.png';
import jsp from 'images/icons/jsp.png';
import css from 'images/icons/css.png';
import js from 'images/icons/js.png';
import clang from 'images/icons/c.png';
import cplus from 'images/icons/c++.png';
import php from 'images/icons/php.png';
import go from 'images/icons/go.png';

import spring from 'images/icons/spring.png';
import mybatis from 'images/icons/mybatis.jpg';
import fiber from 'images/icons/fiber.png';

import mysql from 'images/icons/mysql.png';
import oracle from 'images/icons/oracle.png';

import jquery from 'images/icons/jquery.png';
import logback from 'images/icons/logback.jpg';
import react from 'images/icons/react.png';

import aws from 'images/icons/aws.png';
import gcp from 'images/icons/gcp.png';

import linux from 'images/icons/linux.png';
import windows from 'images/icons/windows.jpg';
import macos from 'images/icons/macos.jpg';

import eclipse from 'images/icons/eclipse.jpg';
import vscode from 'images/icons/vscode.png';

const Skill = ()=>{
    const detailClickEvent = function(e){
        e.target.closest('.environment').classList.toggle('active')
        if(e.target.closest('.environment').classList.contains('active')){
            e.target.innerText = '閉じる';
        }else{
            e.target.innerText = '詳細を見る';
        }
    };

    return (
        <div id="page-profile-skill">
            <div className="environment">
                <div className="title">
                    言語
                    <a onClick={detailClickEvent}>詳細を見る</a>
                </div>
                <div className="list-wrap">
                    <ul>
                        <li>
                            <div className="image-wrap">
                                <img src={java} alt="java"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Java</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                Java 1.8 / Java 12
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使う言語です。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={jsp} alt="jsp"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">JSP</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使う言語です。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={css} alt="css"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">CSS</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使う言語です。<br/>
                                                現在のサイトで使う言語です。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={js} alt="jsp"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Javascript</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使う言語です。<br/>
                                                現在のサイトで使う言語です。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={clang} alt="c"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">C</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                大学で勉強してた言語です。<br/>
                                                最近は使っていません。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={cplus} alt="c++"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">C++</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                大学で勉強してた言語です。<br/>
                                                最近は使っていません。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={php} alt="PHP"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">PHP</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                PHP7.4
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使う言語です。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={go} alt="go"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Go</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                go1.20.4
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在勉強してる言語です。<br/>
                                                現在のサイトで使う言語です。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="environment">
                <div className="title">
                    フレームワーク
                    <a onClick={detailClickEvent}>詳細を見る</a>
                </div>
                <div className="list-wrap">
                    <ul>
                        <li>
                            <div className="image-wrap">
                                <img src={spring} alt="Spring"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Spring Framework</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                4.2.4 RELEASE / 6.0.3
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使うフレームワークです。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={mybatis} alt="Mybatis"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Mybatis</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使うフレームワークです。<br/>
                                                <ul>
                                                    <li>ResultMap作成</li>
                                                    <li>useGenerateKey使用</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={fiber} alt="Fiber"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Fiber</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                v2
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                個人で勉強した時使ってみました。<br/>
                                                現在のサイトで使うフレームワークです。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="environment">
                <div className="title">
                    データベース
                    <a onClick={detailClickEvent}>詳細を見る</a>
                </div>
                <div className="list-wrap">
                    <ul>
                        <li>
                            <div className="image-wrap">
                                <img src={mysql} alt="Mysql"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Mysql</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                Mysql : 8.0.26<br/>
                                                MariaDB : 10.1.13
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務、個人で使うデータベースです。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={oracle} alt="Oracle"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Oracle</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                Web開発教育で使ったデータベースです。<br/>
                                                現在は使っていません。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="environment">
                <div className="title">
                    ライブラリ
                    <a onClick={detailClickEvent}>詳細を見る</a>
                </div>
                <div className="list-wrap">
                    <ul>
                        <li>
                            <div className="image-wrap">
                                <img src={jquery} alt="JQuery"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">JQuery</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                latest
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                現在業務で使うライブラリです。<br/>
                                                最近の開発では使っていません。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={logback} alt="Log Back"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Log Back</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                Spring Framework開発でLog管理で使っています。<br/>
                                                <ul>
                                                    <li>JSON type logger</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={react} alt="React"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">React</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">バージョン</div>
                                            <div className="d-text">
                                                v18.2.0
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                個人で勉強した時使ってみました。<br/>
                                                現在のサイトで使うライブラリです。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="environment">
                <div className="title">
                    インフラ
                    <a onClick={detailClickEvent}>詳細を見る</a>
                </div>
                <div className="list-wrap">
                    <ul>
                        <li>
                            <div className="image-wrap">
                                <img src={aws} alt="aws"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Amazon Web Service</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                個人で勉強した時使ってみました。<br/>
                                                <ul>
                                                    <li>
                                                        EC instance 作成
                                                        <ul>
                                                            <li>Public Key ログイン→ID/PW ログイン変更</li>
                                                            <li>ユーザー作成</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Mysqlインストール
                                                        <ul>
                                                            <li>ユーザー作成、権限管理</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Apacheインストール
                                                    </li>
                                                    <li>
                                                        Nginxインストール
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={gcp} alt="Google Cloud Platform"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Google Cloud Platform</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以下</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">なし</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                個人で勉強した時使ってみました。<br/>
                                                現在のサイトで使うインフラです。
                                                <ul>
                                                    <li>
                                                        EC instance 作成
                                                    </li>
                                                    <li>
                                                        Mysql Server 作成
                                                    </li>
                                                    <li>
                                                        Dockerインストール
                                                        <ul>
                                                            <li>Go バックエンド展開、運用、保守</li>
                                                            <li>Nginx、React フロントエンド展開、運用、保守</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="environment">
                <div className="title">
                    OS
                    <a onClick={detailClickEvent}>詳細を見る</a>
                </div>
                <div className="list-wrap">
                    <ul>
                        <li>
                            <div className="image-wrap">
                                <img src={linux} alt="Linux"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Linux</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                業務、個人のサーバーで使うOSです。<br/>
                                                <ul>
                                                    <li>CentOS</li>
                                                    <li>Ubuntu</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={windows} alt="Windows"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Windows</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">3年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                業務、個人開発パソコンのOSです。<br/>
                                                現在業務用には使っていません。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={macos} alt="Mac OS"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Mac OS</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">1年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                業務、個人開発パソコンのOSです。
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="environment">
                <div className="title">
                    IDE
                    <a onClick={detailClickEvent}>詳細を見る</a>
                </div>
                <div className="list-wrap">
                    <ul>
                        <li>
                            <div className="image-wrap">
                                <img src={eclipse} alt="Eclipse"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Eclipse</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">2年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                業務、個人のJava開発で使うIDEです。<br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="image-wrap">
                                <img src={vscode} alt="Visual Studio Code"/>
                            </div>
                            <div className="description">
                                <div className="table">
                                    <div className="tbody">
                                        <div className="row">
                                            <div className="thead">名前</div>
                                            <div className="d-text">Windows</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">使用期間</div>
                                            <div className="d-text">3年以上</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">実務経験</div>
                                            <div className="d-text">あり</div>
                                        </div>
                                        <div className="row">
                                            <div className="thead">その他</div>
                                            <div className="d-text">
                                                業務、個人のJava以外の開発で使うIDEです。<br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill;