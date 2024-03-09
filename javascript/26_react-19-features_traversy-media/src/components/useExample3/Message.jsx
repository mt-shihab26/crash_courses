import { use, useState, Suspense } from "react";
import Loading from "../Loading";

const MessageOutput = ({ messagePromise }) => {
    const message = use(messagePromise);
    return <div className="text-xl">Here is the message: {message}</div>;
};

const Message = () => {
    const [messagePromise, setMessagePromise] = useState(null);
    return (
        <>
            {messagePromise ? (
                <Suspense fallback={<Loading />}>
                    <MessageOutput messagePromise={messagePromise} />
                </Suspense>
            ) : (
                <button
                    onClick={() =>
                        setMessagePromise(
                            new Promise(resolve =>
                                setTimeout(() => resolve("Hello Message"), 1000),
                            ),
                        )
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Download message
                </button>
            )}
        </>
    );
};

export { Message as UseExample3 };
