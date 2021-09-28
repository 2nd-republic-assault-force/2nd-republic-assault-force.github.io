import React from "react"
import {LinkBox} from '../LinkBox/LinkBox'
import { useStyles } from "./styles"
import {YOUTUBE, DISCORD, TWITTER, INSTAGRAM} from '../../constants/SocialMediaLinks'


export const LinkFooter = () =>{
    
    const classes = useStyles()
    
    return (<div className={classes.container}>
        <LinkBox text="Youtube" destinationLink={YOUTUBE}/>
        <LinkBox text="Instagram" destinationLink={DISCORD}/>
        <LinkBox text="Discord" destinationLink={TWITTER}/>
        <LinkBox text="Twitter" destinationLink={INSTAGRAM}/>
    </div>
    )}
