import { Div, Text } from "@vkontakte/vkui";
import FrameImage from "../assets/frames.svg";
import CollageImage from "../assets/collage.svg";
import ButtonMenu from "../assets/buttonMenu.svg";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";

type HomeCollageProps = {
    title: string
    url: boolean

}

const HomeCollage = ({title, url}: HomeCollageProps) => (
    <Div className="home">
        <Div className="button-menu-container">
            <a data-to="">
                <img onClick={() => setActivePanel(PANELS.ARCHIVE)} className="button-menu" src={ButtonMenu} />
            </a>
        </Div>
        <Div className="oval-container">
            <Text className="title">{title}</Text>
        </Div>
        <Div className="home-panel">
            <Div className="image-container">
                <img onClick={() => setActivePanel(PANELS.BORDERS)} className="image" src={FrameImage} alt="Frame" />
                <Text className="image-text">Рамки</Text>
            </Div>
            <Div className="image-container">
                <img onClick={() => setActivePanel(PANELS.COLLAGE)} className="image" src={CollageImage} alt="Collage" />
                <Text className="image-text">Коллажи</Text>
            </Div>
        </Div>
    </Div>
)
export default HomeCollage;