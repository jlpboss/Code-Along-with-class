export default function SearchResults(props){

    let results = props.data.map ((item, i )=> {
        return <li>{i} {item} (Click for more)...</li>
    })

    
    if (props.data.length > 0){
        return (
            <ol>
                { results }
            </ol>
        )
    } else{
        return(
            <div>
                <h3>No results found.</h3>
            </div>
        )
    }
}