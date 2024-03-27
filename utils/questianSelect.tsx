import { Text } from "react-native-svg";
import QuestianFour from "../components/QuestianFour";
import QuestianOne from "../components/QuestianOne";
import QuestianThree from "../components/QuestianThree";
import QuestianTwo from "../components/QuestianTwo";
import Home from "../components/Home";
import OtpCheck from "../components/OtpCheck";

export const questianSelect = (n: number, firstName: string, correction: boolean): JSX.Element => {
    let res;
    console.log("qno:", n);
    switch (n) {
        case 1:
            res = <QuestianOne please={correction} />;
            break;
        case 2:
            res = <QuestianTwo name={firstName} please={correction} />;
            break;
        case 3:
            res = <QuestianThree please={correction} />;
            break;
        case 4:
            res = <QuestianFour please={correction} />;
            break;
        case 5:
            console.log("entered 5");
            res = <OtpCheck />
            break;

        default:
            res = <Home name={firstName} />
            break;
    }

    return res;
}
