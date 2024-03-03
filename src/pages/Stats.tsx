import { useEffect, useState } from "react"
import axios from "../axios";
import Button from "../components/common/Button";
import { TransitionLink } from "../contexts/PageLoaderContext";

function Stats()
{

    const [stats, setStats] = useState<any>()

    useEffect(()=>{
        async function fetchStats()
        {
            try
            {
                let response = await axios.get("/stats");
                console.log(response);
                if(response.status == 200)
                {
                    setStats(response.data);
                }
            }
            catch(e)
            {
                console.error(e);
            }
        }
        fetchStats();
    },[]);

    return (
        <div>
            <h1>Stats</h1>
            <p>Unique Visits: {stats?.uniqueVisits}</p>
            <p>Daily Visits: {stats?.dailyVisits}</p>
            <TransitionLink to={""}><Button color={"primary"}>HOME</Button></TransitionLink>
        </div>
    )
}

export default Stats