import React, {FC} from 'react';
import { Input, Button, Spin, Typography } from 'antd';
import useFetchJokesByQuery from "../../hooks/useFetchJokesByQuery";
import Joke from "../Joke/Joke";
import {style} from "./style";
const { Text } = Typography;

const FindedJokesArea: FC = () => {
    const {onInput, onClick, queryJokes, isLoad, isError, noJokes} = useFetchJokesByQuery()

    return (
        <div style={style}>
            <Input style={style.input} onChange={onInput} placeholder="Search text..." />
            {isError && <Text type="danger">Minimum size is 3 characters</Text>}

            <Button disabled={!isLoad} style={style.button} onClick={onClick}>Search jokes</Button>

            {!isLoad && <Spin />}

            {!isError && queryJokes && !noJokes
                && queryJokes.map(j => <Joke key={j.id} value={j.value}/>)}

            {noJokes && <Text type="danger">There is no joke with this text.</Text>}

        </div>
    );
};

export default FindedJokesArea;
