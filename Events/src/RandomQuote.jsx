import { useEffect, useState,useRef } from "react"
const QUOTE_API="https://inspo-quotes-api.herokuapp.com/quotes/random"
function RandomQuote(){
    const [quote,setQuote]=useState({text:"Quote",author:"author"})
    const hasFetched = useRef(false);
    useEffect(() => {
        if (!hasFetched.current) {
            fetchQuote();
            hasFetched.current = true;
        }
    }, []);

    async function fetchQuote(){
        const response=await fetch(QUOTE_API)
        const jsonResponse = await response.json()
        const randomQ=jsonResponse.quote
        setQuote(randomQ)
    }    
    return (
        <>
        <h2>{quote.text}</h2>
        <h4>-{quote.author}</h4>
        <button onClick={fetchQuote}>click</button>
        </>
    )
}
export default RandomQuote