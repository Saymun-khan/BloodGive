import { Cards, CardContent, CardImage, BloodGroup, CardText, CardIcon, CardIconElement, CardIconText, CardExpandText, CardBox } from './CardElements'
import { MdArchive, MdTerrain, MdPerson } from 'react-icons/md'
import Modal from '../modal/modal'
import { useState } from 'react'
function Card({ name, bloodGroup, hospital, location, mobile }) {
    const img = {
        color: "black",
        width: "100%",
        height: "100%",
    }

    const [show, setshow] = useState(false)
    const openModal = () => {
        setshow(prev => !prev)
    }

    return (

        <>
            <Cards>
                <CardContent>
                    <BloodGroup>
                        <CardText style={{ marginTop: 20, textTransform: "uppercase", fontSize: "40px" }}>{bloodGroup} </CardText>
                    </BloodGroup>
                    <CardImage>
                        <MdPerson style={img} />
                    </CardImage>

                    <CardText>{name}</CardText>
                </CardContent>
                <CardIcon>
                    <CardIconElement>
                        <MdArchive />
                        <CardIconText>{hospital}</CardIconText>
                    </CardIconElement>
                    <CardIconElement>
                        <MdTerrain />
                        <CardIconText>{location}</CardIconText>
                    </CardIconElement>
                </CardIcon>
                <CardBox>{mobile}</CardBox>
                <CardBox onClick={openModal}>সম্পুরন তথ্য<br></br> দেখুন</CardBox>
                <Modal showModal={show} setShowModal={setshow} openModal={openModal}
                    name={name} bloodGroup={bloodGroup} location={location} mobile={mobile} />
            </Cards>
            {/* <ModalWrapper style={open}>
                <Modals>
                    <ModalClose onClick={closeModaL}>+</ModalClose>
                    <ModalTitle>রক্তের জন্য আবেদনকারীর পরিপুরন তথ্য</ModalTitle>
                    <ModalBody>
                        <ModalForm>
                            <Name>রোগীর সমস্যা</Name>
                            <Value>রক্ত শূন্যতা</Value>
                            <Name>রোগীর নাম</Name>
                            <Value>{name}</Value>
                            <Name>হসপিটালের নাম</Name>
                            <Value>{hospital}</Value>
                            <Name>উপজেলা বা ইয়নিয়ন</Name>
                            <Value>{location}</Value>
                            <Name>রক্তের গ্রুপ</Name>
                            <Value>{bloodGroup}</Value>
                            <Name>রক্তের পরিমান</Name>
                            <Value>২বেগ</Value>
                            <Name>রোগীর সমস্যা</Name>
                            <Value>রক্তশ্যনুতা</Value>
                            <Name>আবেদনের তারিখ</Name>
                            <Value>২-৮-২০২১</Value>
                            <Name>সময়</Name>
                            <Value>বুধবার</Value>
                            <CardBox style={{ alignItems: 'center' }}>Be donar</CardBox>
                        </ModalForm>
                    </ModalBody>
                </Modals>
            </ModalWrapper> */}
        </>
    )
}

export default Card
