import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getQueryJokes} from "../services/requests";
import {AppDispatch, RootState} from "../redux/store";
import {RequestedJokeInterface} from "../interfaces/interfaces";

const useFetchJokesByQuery = () => {
    const dispatch = useDispatch<AppDispatch>()
    const inputText = useSelector((state: RootState) => state.mainReducer.inputText)
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const [queryJokes, setQueryJokes] = useState<null | RequestedJokeInterface[]>(null)
    const [isError, setIsError] = useState<boolean>(false)
    const [noJokes, setNoJokes] = useState<boolean>(false)


    const onInput = (e: any) => {
        dispatch({type: 'set_input_text', payload: e.target.value})
    }
    const onClick = async () => {
        if(inputText.length < 3) {
            setIsLoad(true)
            setIsError(true)
            setNoJokes(false)
            return
        }
        setIsError(false)
        setIsLoad(false)
        setNoJokes(false)
        setQueryJokes([])
        const jokes = await getQueryJokes(inputText)
        if (!jokes.length) {
            setIsLoad(true)
            setNoJokes(true)
            return
        }
        setQueryJokes(jokes)
        setIsLoad(true)
    }

    return {queryJokes, onInput, onClick, isLoad, isError, noJokes}
};

export default useFetchJokesByQuery;


