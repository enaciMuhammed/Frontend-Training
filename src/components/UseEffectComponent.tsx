import {useEffect, useState} from "react";

export default function DataFetcher() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const json = await response.json();
          setData(json);
        }
        fetchData();
    }, [])

console.log(data)
    return(
        <div>
            <h2>useEffect</h2>
            <p><strong> useEffect: </strong>The useEffect hook allows you to perform side effects
                in function components, such as data fetching, subscriptions,
                or manually changing the DOM. It runs after the component
                renders.</p>
            <h3>Example: Fetching Data from an API</h3>
            <h3>Posts</h3>
            <ul>
                {data.slice(0, 10).map((post: any) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}


/*
The useEffect hook allows you to perform side effects
 in function components, such as data fetching, subscriptions,
  or manually changing the DOM. It runs after the component
   renders.

 */