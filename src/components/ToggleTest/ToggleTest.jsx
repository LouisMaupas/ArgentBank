import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {isToggleOn} from "../../utils/selectors"
import {toggleThing} from "../../features/auth"

export default function ToggleTest() {
    // useDispatch retrieve redux's dispatch() for send the actions "tets" from the componenet (//React setState)
    const dispatch = useDispatch();
    const isTheToggleOn = useSelector(isToggleOn);
    return (
        <>
                <button onClick={() => {
            // on click dispatch function is executed with the action from test feature
            dispatch(toggleThing.toggle())
        }}>
        </button>
        <p>
        Le toggl est sur {isTheToggleOn ? 'on' : 'off'} !
        </p>
        </>

    )
}