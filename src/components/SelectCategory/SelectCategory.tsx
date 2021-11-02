import React, {FC} from 'react';
import {Select} from 'antd';
import useFetchCategories from "../../hooks/useFetchCategories";
import {style} from "./style";

const {Option} = Select;

const RandomJoke: FC = () => {
    const categories = useFetchCategories()

    return (
        <>
            <Select defaultValue="default" style={style} onChange={categories.onChangeValue}>
                {categories.c && categories.c.map((c, i) => <Option key={i} value={c}>{c}</Option>)}
            </Select>
        </>

    );
};

export default RandomJoke;


