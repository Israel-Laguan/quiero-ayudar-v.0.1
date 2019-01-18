import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    margin: 10,
  },
  media: {
    height: 140,
  },
};

const EventCard = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nombre de la actividad
          </Typography>
          <Typography component="p">
          <strong>Descripcion:</strong>Descripcion de la actividad.....lorem ipsum dolor san salbutamaol ixidonsion
          </Typography>
          <Typography component="p">
            <strong>Direccion:</strong> Echeverria 1002, Piringuin, Sacultan
          </Typography>
          <Typography component="p">
            <strong>Horario:</strong> 14hs a 19hs
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Inscribirse
        </Button>
        <Button size="small" color="primary">
          Ver mas
        </Button>
      </CardActions>
    </Card>
  );
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);