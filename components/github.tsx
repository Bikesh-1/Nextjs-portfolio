import { GitHubCalendar } from "react-github-calendar";

export default function Github() {
    return (
        <div className="w-full h-auto p-8 bg-black relative z-50 flex items-center flex-col justify-center text-white">
            <h1 className="uppercase oswald text-white text-center p-4 font-black text-4xl underline">Github Contribution</h1>
            <GitHubCalendar
                username="Bikesh-1"
                blockSize={20}
                blockMargin={5}
                theme={{
                    dark: [
                        "#0F172A",
                        "#312E81",
                        "#4E46E4",
                        "#6366F1",
                        "#A5B4FC",
                    ],
                }}
            />
        </div>
    )
}