import React from 'react';
import "./input.css";

import {Card,CardContent,Typography} from "@material-ui/core";

const Input=({title,total,cases,onClick})=> {
    return (
        <Card className="infobox" onClick={onClick}>
            <CardContent>
<Typography color="textSecondary" className="infobox_title">

{title}
</Typography>
<h2 className="infobox_cases">{cases}</h2>
<Typography color="textSecondary" className="infobox_total">

    {total}
</Typography >
                </CardContent>
                        </Card>
    )
}

export default Input
