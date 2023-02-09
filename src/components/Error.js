import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    const msg = err?.error?.message;
    return (
        <div>
            <h1>Oops!! Something went wrong!! </h1>
              <h2>{msg}</h2>
        </div>
    )
};
export default Error;