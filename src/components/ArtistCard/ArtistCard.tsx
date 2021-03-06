import React, { Children } from "react"
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import { navigate } from "@reach/router"

import ArtistSaveButton from "./ArtistSaveButton/ArtistSaveButton"
import { formattedBio } from "./ArtistCardUtils/ArtistCardUtils"
import AnchorButton from "../AnchorButton/AnchorButton"

const styles = () =>
  createStyles({
    card: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      border: "black 1px solid",
    },
    image: {
      // LOL Artsy cropped it to 230
      height: 230,
      width: 230,
      margin: "auto",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  })

interface ArtistCardProps extends WithStyles<typeof styles> {
  imageUrl?: string
  displayLabel: string
  id: string
  href: string
  birthday?: string
  deathday?: string
  nationality?: string
}

const ArtistCard: React.FunctionComponent<ArtistCardProps> = ({
  imageUrl = "",
  displayLabel,
  id,
  href,
  classes,
  nationality,
  birthday,
  deathday,
}) => (
  <Card className={classes.card} elevation={2}>
    <CardHeader
      action={<ArtistSaveButton id={id} />}
      title={displayLabel}
      subheader={formattedBio(nationality, birthday, deathday)}
    />
    <CardActionArea
      onClick={() => {
        navigate(`/gallery/${id}`)
      }}
    >
      <CardMedia
        className={classes.image}
        image={imageUrl || `${process.env.PUBLIC_URL}/img/no-image.jpg`}
      />
    </CardActionArea>
    <CardActions>
      <AnchorButton href={`https://www.artsy.net${href}`}>Artsy</AnchorButton>
      <AnchorButton
        href={`https://en.wikipedia.org/wiki/${displayLabel.replace(
          / /g,
          "_"
        )}`}
      >
        Wikipedia
      </AnchorButton>
      <AnchorButton
        href={`https://www.google.com/search?tbm=isch&q=${displayLabel}`}
      >
        Google
      </AnchorButton>
    </CardActions>
  </Card>
)

export default withStyles(styles)(ArtistCard)
