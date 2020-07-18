import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/pokeFilter.scss';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PokeFilter = ({id, name, username, email}) => {

  const classes = useStyles();

  return (

      
    <div className="PokeCard">
      <div className="PokeCardIn">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Abilities: ${id}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Experience: ${id}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Attack: ${username}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Defense: ${email}`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              More information
            </Button>
          </CardActions>
        </Card>

      </div>
    </div>
  )
} 

export default PokeFilter;