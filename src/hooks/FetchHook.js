import { useState, useEffect } from 'react'

export function useFetch(url) {

    const [fetchedData, setFetchedData] = useState()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        if (!url) return

        async function fetchData() {

            const response = await fetch(url)
            const data = await response.json()
            setFetchedData(data)
            setLoading(false) 

        }
            
        setLoading(true)
        fetchData()

    }, [url])

return { isLoading, fetchedData }

}