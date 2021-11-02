export interface InitialStateInterface {
    selectedCategory: string,
    inputText: string
}
export interface MainReducerActionInterface {
    type: string,
    payload: string
}

export interface RequestedJokeInterface {
    categories: string[],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
}

export interface JokePropsInterface {
    value: string,
}
