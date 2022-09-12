import { Friends } from "./Friends/Friends"
import Navbar from "./Navbar/Navbar"
import { Posts } from "./posts/Post"
import Profile from "./profile/profile"
import "./home.css"
export const Home = () => {
    return (
    <div className="homewrapper">
        <Navbar />
        <div class="text-center mx-12 py-8">
            <div className="grid grid-cols-4 ">
                <div className=""><Profile /></div>
                <div className="col-start-2 col-end-4"><Posts /></div>
                <div className=""><Friends /></div>
            </div>
        </div>
    </div>
    )
}