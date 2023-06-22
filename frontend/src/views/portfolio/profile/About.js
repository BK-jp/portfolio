import React from "react";
import profileImage from 'images/profile.jpg';

const About = ()=>{
    return (
        <div id="page-profile-about">
            <div className="profile-wrap">
                <div className="image-wrap">
                    <img src={profileImage} alt="証明写真"/>
                </div>
                <div className="info-wrap">
                    <div className="block">
                        <div className="title">
                            基本情報
                        </div>
                        <div className="table basic-table">
                            <div className="tbody">
                                <div className="row">
                                    <div className="thead">名前</div>
                                    <div className="info">金　丙根（キム　ビョングン）</div>
                                </div>
                                <div className="row">
                                    <div className="thead">誕生日</div>
                                    <div className="info">1993年06月30日</div>
                                </div>
                                <div className="row">
                                    <div className="thead">性別</div>
                                    <div className="info">男性</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="title">
                            免許・資格
                        </div>
                        <div className="table license-table">
                            <div className="thead">
                                <div className="row">
                                    <div className="year">
                                        年
                                    </div>
                                    <div className="month">
                                        月
                                    </div>
                                    <div className="description">
                                        説明
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="row">
                                    <div className="year">
                                        2016
                                    </div>
                                    <div className="month">
                                        08
                                    </div>
                                    <div className="description">
                                        普通自動車第一種運転免許
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2019
                                    </div>
                                    <div className="month">
                                        12
                                    </div>
                                    <div className="description">
                                        ワードプロセッサー
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2020
                                    </div>
                                    <div className="month">
                                        02
                                    </div>
                                    <div className="description">
                                        TOEIC 635(LC 415/RC 220) 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2020
                                    </div>
                                    <div className="month">
                                        10
                                    </div>
                                    <div className="description">
                                        SQL 開発者（SQLD）
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2021
                                    </div>
                                    <div className="month">
                                        08
                                    </div>
                                    <div className="description">
                                        日本語能力試験（JLPT）N2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="title">
                            高等学校〜現在
                        </div>
                        <div className="table study-table">
                            <div className="thead">
                                <div className="row">
                                    <div className="year">
                                        年
                                    </div>
                                    <div className="month">
                                        月
                                    </div>
                                    <div className="description">
                                        説明
                                    </div>
                                </div>
                            </div>
                            <div className="tbody">
                                <div className="row">
                                    <div className="year">
                                        2009
                                    </div>
                                    <div className="month">
                                        03
                                    </div>
                                    <div className="description">
                                        亀尾高等学校　入学
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2012
                                    </div>
                                    <div className="month">
                                        02
                                    </div>
                                    <div className="description">
                                        亀尾高等学校　卒業
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2012
                                    </div>
                                    <div className="month">
                                        03
                                    </div>
                                    <div className="description">
                                        高麗大学　入学
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2013
                                    </div>
                                    <div className="month">
                                        03
                                    </div>
                                    <div className="description">
                                        軍隊（陸軍）入隊
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2015
                                    </div>
                                    <div className="month">
                                        12
                                    </div>
                                    <div className="description">
                                        軍隊　除隊
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2019
                                    </div>
                                    <div className="month">
                                        11
                                    </div>
                                    <div className="description">
                                        高麗大学コンピューター情報学科　中退
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2020
                                    </div>
                                    <div className="month">
                                        03
                                    </div>
                                    <div className="description">
                                        Web開発国費支援教育プログラム　参加
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2020
                                    </div>
                                    <div className="month">
                                        10
                                    </div>
                                    <div className="description">
                                        Web開発国費支援教育プログラム　卒業
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="year">
                                        2020
                                    </div>
                                    <div className="month">
                                        11
                                    </div>
                                    <div className="description">
                                        MAKEGENIUS　入社
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;