import React from 'react'
import styled from 'styled-components'

function ModalBox({ showModal, setShowModal }) {
    return (
        <>
            {showModal ? <div>this is modal</div> : null}
        </>
    )
}

export default ModalBox
