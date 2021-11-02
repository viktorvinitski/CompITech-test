import {RequestedJokeInterface} from "../interfaces/interfaces";

export const getRandomJoke = async (): Promise<RequestedJokeInterface> => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const randomJoke = await res.json()
    return randomJoke
}

export const getCategories = async (): Promise<string[]> => {
    const res = await fetch('https://api.chucknorris.io/jokes/categories')
    const categories = await res.json()
    return categories
}

export const getCategoryJoke = async (category: string): Promise<RequestedJokeInterface> => {
    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    const joke = await res.json()
    return joke
}

export const getQueryJokes = async (value: string): Promise<RequestedJokeInterface[]> => {
    const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${value}`)
    const jokes = await res.json()
    return jokes.result?.slice(0, 5)
}

