import { useEffect, useState } from "react"
import axios from "axios"


interface scoreData {
    "createdAt": Date,
    "name": string,
    "times": number,
    "id": number
}

export default function useFetchScore() {

    const [data,setData] = useState<scoreData[]>([])
    const [error,setError] = useState<unknown>(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response  = await axios.get(`https://6641a7ff3d66a67b34347fb8.mockapi.io/api/flip-card/score`)
                    setData(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    return { data, error, loading }

}