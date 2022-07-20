import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment } from '../../app/counterSlice';

export default function User() {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <>
            <h1>User</h1>
            <p></p>
        </>
    )
}
