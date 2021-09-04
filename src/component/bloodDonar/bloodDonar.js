import {
    BloodDonarCard,
    BloodDonarGroup,
    BloodDonarCardImage,
    BloodDonarCardText,
    BloodDonarCardExpandText,
    BloodDonarCardBox,
    BloodDonarProfile
} from './bloodDonarElement'
import { MdPerson } from 'react-icons/md'
function bloodDonar({ name, bloodGroup, hospital, location, mobile }) {
    const img = {
        color: "black",
        width: "100%",
        height: "100%",
    }
    return (
        <BloodDonarCard>
            <BloodDonarGroup>
                <BloodDonarCardText style={{ marginTop: 20, textTransform: "uppercase", fontSize: "40px", marginLeft: "px" }}>{bloodGroup}</BloodDonarCardText>
            </BloodDonarGroup>
            <BloodDonarProfile>
                <BloodDonarCardImage>
                    <MdPerson style={img} />
                </BloodDonarCardImage>
                <BloodDonarCardText>
                    {name}
                </BloodDonarCardText>
            </BloodDonarProfile>
            <BloodDonarCardExpandText>
                উপজেলা অথবা ইউনিয়নের নামঃ{location}
            </BloodDonarCardExpandText>
            <div style={{ display: "flex" }}>
                <BloodDonarCardBox>
                    {mobile}
                </BloodDonarCardBox>
                <BloodDonarCardBox>
                    সম্পুরন তথ্য দেখুন
                </BloodDonarCardBox>
            </div>
        </BloodDonarCard>
    )
}
export default bloodDonar