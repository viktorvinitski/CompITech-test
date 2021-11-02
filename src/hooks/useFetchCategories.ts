import {useEffect, useState} from "react";
import { getCategories } from "../services/requests";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";

const useFetchCategories = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [categories, setCategories] = useState<null | string[]>(null)

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories()
            setCategories(categories)
        }
        fetchCategories().then()
    }, [])

    const onChangeValue = (value: string) => {
        dispatch({type: 'set_category', payload: value})
    }

    return {
        c: !categories ? null : ['default' , ...categories],
        onChangeValue
    }
};

export default useFetchCategories;

