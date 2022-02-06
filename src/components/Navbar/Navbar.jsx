import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem,  Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'

import logo from '../../assets/logo.jfif'

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="shop logo" height="25px" className={classes.image} />
                        E-shop App
                    </Typography>
                    <div  className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show Card Items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
