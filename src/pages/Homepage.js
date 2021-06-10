import React from 'react'
import Hero from '../Component/Hero'
import Showing from '../Component/Showing'
import NewItems from '../Component/NewItems'
import Bestselling from '../Component/BestSelling'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    toolbar: theme.mixins.toolbar
}))
export default function Homepage() {
    const classes = useStyles()
    return (
        <div>
            <Hero />
            <Showing />
            <NewItems />
            <Bestselling />
        </div>
    )
}
