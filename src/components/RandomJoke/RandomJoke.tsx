import React, {FC} from 'react';
import useFetchRandomJoke from "../../hooks/useFetchRandomJoke";
import { Button, Spin } from 'antd'
import { style } from './style'
import SelectCategory from '../SelectCategory/SelectCategory';
import Joke from "../Joke/Joke";


const RandomJoke: FC = () => {
    const {isLoad, joke, getNewJoke} = useFetchRandomJoke()

    const getNew = () => getNewJoke()

    return (
        <>
            <div style={style.area}>
                <div style={style.joke}>
                    {isLoad ? <Joke value={joke}/> : <Spin />}
                </div>

                <SelectCategory />

                <Button disabled={!isLoad} type="primary" style={style.button} onClick={getNew}>Get joke</Button>
            </div>
        </>

    );
};

export default RandomJoke;
