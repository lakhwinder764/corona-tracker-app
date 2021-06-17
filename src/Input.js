import React from 'react'
import {Card,CardContent,Typography} from "@material-ui/core";

const Input=(props)=> {
    return (
        <Card className="infobox">
            <CardContent>
<Typography color="textSecondary" className="infobox_title">

{props.title}
</Typography>
<h2 className="infobox_cases">{props.cases}</h2>
<Typography color="textSecondary" className="infobox_total">

    {props.total}
</Typography >
                </CardContent>
                        </Card>
    )
}

export default Input
