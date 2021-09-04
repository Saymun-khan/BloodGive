import { Applys, Announce, FormDiv, InputHeader, InputBox, Input, InputSubmitButton, AnnounceMsg } from './ApplyElement'
import { useState, useEffect } from 'react'
import db from '../../firebase'
import firebase from 'firebase'


function Apply() {

    /*{const Initialfieldvalues = {
        name: '',
        mobile: '',
        hospitalName: '',
        bloodGroup: '',
        location: ''
    }
    const [values, setValues] = useState(Initialfieldvalues)
    const handleInputChange = (e) => {
        var { names, values } = e.target
        setValues({
            ...values,
            [names]: values

        })

    }

    const onSubmiteds = (e) => {
        e.preventDefault()
        setValues(Initialfieldvalues)
    }

    const onClickHandler = () => {
        console.log(values.bloodGroup)
        try {
            db.collection('Donate').add({

            })
        }
        catch (err) {
            console.log(err)
        }
    }}*/

    const [name, setname] = useState('')
    const [hospital, sethospital] = useState('')
    const [mobile, setmobile] = useState('')
    const [location, setlocation] = useState('')
    const [bloodgroup, setbloodgroup] = useState('')
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')

    const onSubmiteds = (e) => {
        e.preventDefault()
    }
    const clickHandler = () => {

        if (name && hospital && mobile && location && bloodgroup) {
            const res = db.collection('Donate').add({
                Name: name,
                Hospital: hospital,
                Mobile: mobile,
                Location: location,
                BloodGroup: bloodgroup,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setname('')
            sethospital('')
            setmobile('')
            setlocation('')
            setbloodgroup('')
            setsuccess('The form submitted successfully')
            seterror('')

        } else {
            seterror('any field cannot be empty')
        }


    }
    return (
        <Applys>
            <Announce>
                <AnnounceMsg>
                    <blockquote>
                        It's not a blood <br></br>It's liquid life<br></br>Donate Today,Save a life
                    </blockquote>
                </AnnounceMsg>
            </Announce>
            <FormDiv>
                <form onSubmit={onSubmiteds}>
                    <InputHeader style={{ color: '#18de8c', textAlign: 'center', marginTop: '15px' }}>{success}</InputHeader>
                    <InputBox>
                        <InputHeader>রোগীর নামঃ</InputHeader>
                        <Input value={name} placeholder="রোগীর নাম" onChange={(e) => { setname(e.target.value) }} />
                        <InputHeader style={{ color: 'red' }}>{error}</InputHeader>
                    </InputBox>
                    <InputBox>
                        <InputHeader>হাসপাতালের নামঃ</InputHeader>
                        <Input value={hospital} onChange={(e) => { sethospital(e.target.value) }} />
                        <InputHeader style={{ color: 'red' }}>{error}</InputHeader>
                    </InputBox>
                    <InputBox>
                        <InputHeader>মোবাইল নাম্বারঃ</InputHeader>
                        <Input value={mobile} onChange={(e) => { setmobile(e.target.value) }} />
                        <InputHeader style={{ color: 'red' }}>{error}</InputHeader>
                    </InputBox>
                    <InputBox>
                        <InputHeader>উপজেলা অথবা ইউনিয়ন:</InputHeader>
                        <Input value={location} onChange={(e) => { setlocation(e.target.value) }} />
                        <InputHeader style={{ color: 'red' }}>{error}</InputHeader>
                    </InputBox>
                    <InputBox>
                        <InputHeader>রক্তের গ্রুপ নিরবাচন করুনঃ</InputHeader>
                        <Input value={bloodgroup} onChange={(e) => { setbloodgroup(e.target.value) }} />
                        <InputHeader style={{ color: 'red' }}>{error}</InputHeader>
                    </InputBox>
                    <InputSubmitButton onClick={clickHandler}>Submit</InputSubmitButton>
                </form>
            </FormDiv>
        </Applys>
    )
}

export default Apply
