import {useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import {RequestedJokeInterface} from "../interfaces/interfaces";
import {getCategoryJoke, getRandomJoke} from "../services/requests";
import {RootState} from "../redux/store";

const useFetchRandomJoke = () => {
    const [randomJoke, setRandomJoke] = useState<null | RequestedJokeInterface>(null)
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const selectedCategory = useSelector((state: RootState) => state.mainReducer.selectedCategory)

    useEffect(() => {
        const newJoke = async () => {
            const joke = await getRandomJoke()
            setRandomJoke(joke)
            setIsLoad(true)
        }
        newJoke().then()
    }, [])


    const getNewJoke = async () => {
        setIsLoad(false)
        if(selectedCategory === "default"){
            const joke = await getRandomJoke()
            setRandomJoke(joke)
            setIsLoad(true)
        }
        else{
            const joke = await getCategoryJoke(selectedCategory)
            setRandomJoke(joke)
            setIsLoad(true)
        }

    }

    return {
        joke: randomJoke ? randomJoke.value : '',
        getNewJoke,
        isLoad
    }
};

export default useFetchRandomJoke;


