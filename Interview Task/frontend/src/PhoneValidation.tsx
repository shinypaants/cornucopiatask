import React, { useState } from 'react';
import axios from 'axios';

function PhoneValidation() {
    // Using useState('') so that the values can be set
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [validationResult, setValidationResult] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [internationalFormat, setInternationalFormat] = useState('');

    // I was a bit stuck on how to make it use phone type and international format but tried to implement it either way on how it would look.

    const validatePhoneNumber = async () => {
        // using try and catch to make sure that it uses axios to retrieve data from backend
        try {
            const response = await axios.get(`/phone/validate?phoneNumber=${phoneNumber}&countryCode=${countryCode}`);
            setValidationResult(response.data.isValid ? 'Valid' : 'Invalid');
            if (response){
                setPhoneType(response.data.phoneType ? 'Mobile' : 'Home Phone');
                setInternationalFormat(response.data.internationalFormat)
            }
        } catch (error) {
            setValidationResult('Error validating phone number');
        }
    };

    return (
        <div>
            <h2>Validate Phone Number</h2>
            <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
            <input type="text" value={countryCode} onChange={e => setCountryCode(e.target.value)} placeholder="Country Code" />
            <button onClick={validatePhoneNumber}>Validate</button>
            <h4>Results</h4>
            <p>Is Valid: {validationResult}</p>
            <p>Is Possible: {validationResult}</p>
            <p>Phone Type: {phoneType}</p>
            <p>International Format: {internationalFormat}</p>
        </div>
    );
}

export default PhoneValidation;
