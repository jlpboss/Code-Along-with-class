import MyButton from "../Atoms/button";

export default function SearchInput(props){

    return(
        <>
        <h2>{props.title}</h2>

        <input
            type="text"
            id="search-input-field"
            className="search-input-molocule"
        />

        <MyButton
            text={props.btnText}
            onClick={props.onClick}
        />
        </>
    )
}