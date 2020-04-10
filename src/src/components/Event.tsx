import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import commonStyles from "./CommonStyles";
import OuterLink from "./OuterLink";

const Event: React.FC = () => {
    const classes = commonStyles();
    return (<Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom={true}>直近の日程</Typography>
        <Typography variant="body1">
            入学式含め，4月のイベントはすべて中止になりました．
            4/10 をめどに学生証と各種パスワードが発送される予定です．
            <OuterLink href="https://www.tus.ac.jp/matriculation_ceremony2020/index.html">入学式特別サイト</OuterLink>が設置されています．
            <br/>
            授業は 5 月から，オンライン授業が予定されています．
            ガイダンスや授業開始日等詳細については情報が開示され次第追記します．
            (<OuterLink href="https://www.tus.ac.jp/today/archive/20200409_8347.html">2020年5月1日以降の授業の開講について</OuterLink>)
            <br/>
            履修申告期間は， 5/1 〜 5/13 です(<OuterLink href="https://www.tus.ac.jp/today/20200325103.pdf">2020年度履修申告日程</OuterLink>)．
            <br/>
            教科書の販売については， 4/14 から予定されています．受け取り方法は宅配のみとなりました．
            詳細は <OuterLink href="https://www.tus.ac.jp/today/20200407_3847.pdf">2020 年度前期 教科書・参考書受け取り方法の変更について</OuterLink> を参照してください．
        </Typography>
    </Paper>)
};

export default Event;
