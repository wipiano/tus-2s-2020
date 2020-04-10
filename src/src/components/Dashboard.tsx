import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const Dashboard: React.FC = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom={true}>直近の日程</Typography>
                    <Typography variant="body1">
                        入学式含め，4月のイベントはすべて中止になりました．
                        4/10 をめどに学生証と各種パスワードが発送される予定です．
                        <a href="https://www.tus.ac.jp/matriculation_ceremony2020/index.html">入学式特別サイト</a>が設置されています．
                        <br/>
                        授業は 5 月から，オンライン授業が予定されています．
                        ガイダンスや授業開始日等詳細については情報が開示され次第追記します．
                        (<a href="https://www.tus.ac.jp/today/archive/20200409_8347.html">2020年5月1日以降の授業の開講について</a>)
                        <br />
                        教科書の販売については， 4/14 から予定されています．受け取り方法は宅配のみとなりました．
                        詳細は <a href="https://www.tus.ac.jp/today/20200407_3847.pdf">2020 年度前期 教科書・参考書受け取り方法の変更について</a> を参照してください．
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" gutterBottom={true}>時間割，シラバス，履修科目について</Typography>
                    <Typography variant="body1" gutterBottom={true}>
                        時間割は <a href="https://www.rs.tus.ac.jp/math2/math2/">2部数学科のページ</a> からダウンロードできます．
                        4/17 までの間，セブンイレブンのネットプリントで予約番号 11671979 で時間割を印刷できます．
                        (参考: <a href="http://tuspress.jp/2020/03/09/%E5%85%88%E8%BC%A9%E3%81%AE%E6%99%82%E9%96%93%E5%89%B2%E2%91%A0%E3%80%80%E3%80%9C%E7%90%86%E5%AD%A6%E9%83%A8%E7%AC%AC%E2%85%B1%E9%83%A8%E6%95%B0%E5%AD%A6%E7%A7%91%E7%B7%A8%E3%80%9C/">先輩の時間割</a>)
                    </Typography>
                    <Typography variant="body1" gutterBottom={true}>
                        シラバスは <a href="https://class.admin.tus.ac.jp/up/faces/login/Com00501A.jsp">CLASS</a> で確認できます．
                        CLASS パスワードがわからなくても，ゲストユーザとしてログインすればシラバスの検索はできます．
                        学年での絞り込みがうまく効かないようなので，時間割等をもとに，科目名で検索をかけると良いと思います．
                    </Typography>
                    <Typography variant="body1" gutterBottom={true}>
                        履修科目について，時間割に記載されているものはほとんど必修のようです．
                        空きコマで教養科目を選択する形になると思います．
                        専門教科のカリキュラムは <a href="https://www.tus.ac.jp/fac_grad/fac/ri2/math.html">こちら</a> で確認できます．
                        <br/>
                        教養科目の詳細は <a href="https://www.tus.ac.jp/fac_grad/fac/liberal/ri2.html">こちら</a> で確認できます．
                        1年次から履修できるものと，そうでないものがあるようです．
                        <br />
                        教職課程について，1年次での必修は，「教職概論」，「特別支援教育論」，「総合的な学習の時間の指導法」 の 3 科目です．
                        その他に，いずれかの年次で「日本国憲法」，「体育」，「外国語コミュニケーション」，「情報機器の操作」を履修するようです．
                        （<a href="https://www.tus.ac.jp/fac_grad/fac/ri2/pdf/model_ks_ri2.pdf">教職課程履修者の履修モデル</a> を参照）
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Dashboard;