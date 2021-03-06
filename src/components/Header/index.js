import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from './index.module.less';
import UserAvatar from '../Avatar';

class Header extends Component {
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.content}>
                    <div className={styles.up}>
                        <div className={styles.icon}>
                            MUGGLE  CINEME
                        </div>
                        <div className={styles.right}>
                            <UserAvatar src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
                        </div>
                    </div>
                    <div className={styles.down}>
                        <nav className={styles.nav}>
                            <NavLink
                                className={styles["nav-item"]}
                                exact  // 加一个exact关键字防止主页下面的白条一直都是active
                                to={"/"}
                                activeClassName={styles["nav-active"]}
                            >
                                主  页
                                <div className={styles.underline} />
                            </NavLink>
                            <NavLink
                                className={styles["nav-item"]}
                                to={"/allmovies"}
                                activeClassName={styles["nav-active"]}
                            >
                                全部影片
                                <div className={styles.underline} />
                            </NavLink>
                            <NavLink
                                className={styles["nav-item"]}
                                to={"/discount"}
                                activeClassName={styles["nav-active"]}
                            >
                                优  惠
                                <div className={styles.underline} />
                            </NavLink>
                            <NavLink
                                className={styles["nav-item"]}
                                to={"/privateCinema"}
                                activeClassName={styles["nav-active"]}
                            >
                                私人影院
                                <div className={styles.underline} />
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
