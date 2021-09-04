import React from 'react'
import { ModalClose, ModalBody, Modals, ModalWrapper, ModalTitle, Name, Value, ModalForm } from './modalElement'

function Modal({ showModal, name, location, bloodGroup, hospital, openModal }) {
    return (
        <>
            {showModal ? <ModalWrapper>
                <Modals>
                    <ModalClose onClick={openModal}>+</ModalClose>
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
                        </ModalForm>
                    </ModalBody>
                </Modals>
            </ModalWrapper> : null}
        </>
    )
}

export default Modal
