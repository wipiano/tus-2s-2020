import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import commonStyles from "./CommonStyles";
import {List, ListItem, ListItemText} from "@material-ui/core";

const Dashboard: React.FC = () => {
    const classes = commonStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom={true}>このサイトについて</Typography>
                    <Typography variant="body1">
                        新型コロナウイルスの影響により，東京理科大学の新入生向け情報が散逸しています．
                        そのため，第2部数学科の新1年生向けに，情報を1箇所にまとめた非公式サイトを開設しました．
                        今後学生生活に役立つさまざまな情報を載せていく予定です．
                        管理者も新1年のため，誤った情報や不足している点がたくさんあると思いますので，つねに最新の公式発表も確認するようにしましょう．
                        情報提供や改善の提案は <a href="https://docs.google.com/forms/d/1LwwUYLwPktWRQDjhVva-1r8abPOQnuBFBb3e_b2quVk">情報提供フォーム</a>または，
                        <a href="https://twitter.com/wipianoooo">管理人 twitter</a>にお願いします．
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom={true}>最近の更新</Typography>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <a href="/event">直近の日程</a> (2020.04.10)
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <a href="/syllabus">時間割，シラバス，履修科目について</a> (2020.04.10)
                            </ListItemText>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom={true}>大学への問い合わせについて</Typography>
                    <Typography variant="body1">
                        緊急事態宣言が解除されるまでの期間，大学の窓口は閉鎖しています．
                        問い合わせはメールで受け付けているようですが，通常よりも対応に時間がかかるようです．
                        (<a href="https://www.tus.ac.jp/today/20200409_3256.pdf">窓口の取り扱いについて</a>)
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Dashboard;