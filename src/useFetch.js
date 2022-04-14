import { useEffect, useState } from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                setisLoading(false);
            })
            .catch(error => console.log(error.message))
    }, [url])
    
return { data, isLoading };
}

 export default useFetch;







