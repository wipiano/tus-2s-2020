import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import commonStyles from "./CommonStyles";
import {List, ListItem, ListItemText} from "@material-ui/core";
import OuterLink from "./OuterLink";

const Links: React.FC = () => {
    const classes = commonStyles();
    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom={true}>リンク集</Typography>
            <List>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://tusuas1.tus.ac.jp/is/pw.htm">パスワード変更画面</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://class.admin.tus.ac.jp/up/faces/login/Com00501A.jsp">CLASS (PC版)</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://class.admin.tus.ac.jp/up/up/co/smartphone/login.jsp">CLASS (スマートフォン版)</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://login.microsoftonline.com/">Office</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://letus.ed.tus.ac.jp/">LETUS</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://account.box.com/login">BOX</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText href="https://class.admin.tus.ac.jp/up/faces/up/po/pPoa0202A.jsp?fieldId=form1:Poa00201A:htmlParentTable:3:htmlDetailTbl:1:linkEx1">クラス分け</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://www.tus.ac.jp/today/archive/20200409_8347.html">(重要)2020年5月1日以降の授業の開講について</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://www.tus.ac.jp/today/archive/20200325002.html">(重要)2020年度授業日程等のお知らせ【2020年度新入学生(転学部・転学科、編入学、再入学生を含む)の方へ】</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://www.rs.tus.ac.jp/math2/math2/">数学科オリジナルホームページ</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://class.admin.tus.ac.jp/up/faces/login/Com00501A.jsp">CLASS</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://www.tus.ac.jp/fac_grad/fac/liberal/ri2.html">理学部第二部　一般教養科目</OuterLink>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        <OuterLink href="https://www.tus.ac.jp/fac_grad/fac/ri2/math.html">数学科 (カリキュラム等)</OuterLink>
                    </ListItemText>
                </ListItem>
            </List>
        </Paper>
    )
};

export default Links;
