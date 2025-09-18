import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();

    return <div className="flex justify-center">

        <section>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 items-center justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="p-4">
                        <img
                            className="h-auto rounded-lg shadow-md max-w-full"
                            src={"/ChessBoard.jpg"}
                            alt="Chess Board"
                        />
                    </div>

                    <div className="p-4 grid grid-cols-1 items-center justify-center">
                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl font-bold mb-2 text-white">Play Chess Online</h1>
                            <div>
                                <button
                                    onClick={() => navigate('/game')}
                                    className="bg-green-500 hover:bg-green-900 text-white px-4 py-2 rounded">
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}