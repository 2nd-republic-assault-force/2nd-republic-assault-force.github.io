import {LinkFooter} from '../components/LinkFooter/LinkFooter'
import outfitLogo from '../assets/images/2raflogo.png'
import { Typography } from '@material-ui/core'
import {useStyles} from './styles'


export const Homepage:React.FC = () => {
        const classes = useStyles();
        
        return (<header className="App-header">
          <img src={outfitLogo} className="App-logo" alt="logo" />
          <Typography color={'secondary'} className={classes.textBlock}>
            RAF is a Planetside 2 Outfit on Emerald specializing in combined arms play.{' '}
            Join us wednesdays and fridays form 7:45 - 10:00 EST for our weekly operations and on our social media: 
          </Typography>
          <LinkFooter/>
        </header>)
}