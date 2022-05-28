import { useQuery } from "react-query";
import Tool from './Tool';


const Tools = () => {
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
        fetch("http://localhost:5000/tools").then((res) => res.json()));
    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div className="mb-16">
            <h1 className='my-16 text-center text-4xl font-medium'>OUR AVAILABLE TOOLS</h1>
            <div className='grid gap-y-8 px-2 grid-cols-1 pl-16 pr-0 mr-0 lg:grid-cols-3'>

                {
                    data.slice(0, 6).map(product => <Tool key={product._id} product={product}></Tool>)
                }
            </div>
        </div>
    )
};

export default Tools;