import React, {FC} from 'react';
import {JokePropsInterface} from "../../interfaces/interfaces";
import {style} from "./style";

const Joke: FC<JokePropsInterface> = ({value}) => {
    return (
        <div style={style}>
            {value}
        </div>
    );
};

export default Joke;
