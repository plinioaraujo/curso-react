import { useEffect, useState } from "react"
const useFetch = (url, method = 'get') => {
    const [response, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setState({
                data: json,
                loading: false
            }))
    }, [url, method])


    return (response );
}
 
export default useFetch;