import { Applys, Announce, FormDiv, InputHeader, InputBox, Input, InputSubmitButton, AnnounceMsg } from './RegisterElement'
import { useState, useEffect } from 'react'
import db from '../../firebase'


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
    const [mobile, setmobile] = useState('')
    const [location, setlocation] = useState('')
    const [bloodgroup, setbloodgroup] = useState('')

    const onSubmiteds = (e) => {
        e.preventDefault()
    }
    const clickHandler = () => {
        try {
            db.collection('Donar').add({
                Name: name,
                Mobile: mobile,
                Location: location,
                BloodGroup: bloodgroup
            })
            setname('')
            setmobile('')
            setlocation('')
            setbloodgroup('')
            alert("Your registration form submitted successfully")

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <Applys>
            <Announce>
                <AnnounceMsg>
                    Blood donation is a<br></br>Great act of<br></br>Kindness
                </AnnounceMsg>
            </Announce>
            <FormDiv>
                <form onSubmit={onSubmiteds}>
                    <InputBox>
                        <InputHeader>রোগীর নামঃ</InputHeader>
                        <Input value={name} placeholder="নাম" onChange={(e) => { setname(e.target.value) }} />
                    </InputBox>
                    <InputBox>
                        <InputHeader>মোবাইল নাম্বারঃ</InputHeader>
                        <Input value={mobile} onChange={(e) => { setmobile(e.target.value) }} />
                    </InputBox>
                    <InputBox>
                        <InputHeader>উপজেলা অথবা ইউনিয়ন:</InputHeader>
                        <Input value={location} onChange={(e) => { setlocation(e.target.value) }} />
                    </InputBox>
                    <InputBox>
                        <InputHeader>রক্তের গ্রুপ নিরবাচন করুনঃ</InputHeader>
                        <Input value={bloodgroup} onChange={(e) => { setbloodgroup(e.target.value) }} />
                    </InputBox>
                    <InputSubmitButton onClick={clickHandler}>Sign up</InputSubmitButton>
                </form>
            </FormDiv>
        </Applys>
    )
}

export default Apply
