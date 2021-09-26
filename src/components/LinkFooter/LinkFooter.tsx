import React from "react"
import {LinkBox} from '../LinkBox/LinkBox'
import { useStyles } from "./styles"


export const LinkFooter = () =>{
    
    const classes = useStyles()
    
    return (<div className={classes.container}>
        <LinkBox text="Youtube" destinationLink="https://www.youtube.com/channel/UCbDNjUlUYJSn1T9itj2_Ynw"/>
        <LinkBox text="Instagram" destinationLink="https://twitter.com/2RAF_Official/"/>
        <LinkBox text="Discord" destinationLink="https://discord.gg/ShumpApH"/>
        <LinkBox text="Twitter" destinationLink="https://twitter.com/2RAF_Official/"/>
    </div>
    )}
