import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const OtpCheck: React.FC = () => {
    const [otp, setOTP] = useState<string>('');

    const handleOTPVerification = () => {
        // Send OTP to server for verification
        if (otp === '1234') {
            // OTP is correct, navigate to next screen or perform action
            Alert.alert('Success', 'OTP verification successful');
        } else {
            // OTP is incorrect, display error message
            Alert.alert('Error', 'Invalid OTP. Please try again.');
        }
    };

    return (
        <View>
            {/* Render OTP input fields */}
            <TextInput
                value={otp}
                onChangeText={setOTP}
                keyboardType="numeric"
                maxLength={6}
                placeholder="Enter OTP"
            />
            {/* Button to verify OTP */}
            <Button title="Verify OTP" onPress={handleOTPVerification} />
        </View>
    );
};

export default OtpCheck;
