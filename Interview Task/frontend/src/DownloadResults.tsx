import React from 'react';
import { Button } from '@mui/material';
import { saveAs } from 'file-saver';

// I couldn't figure out how to correctly download the validation results.

// Trying to get the data in from when user clicks Validate
interface PhoneNumberDetails {
    isValid: boolean;
    isPossible: boolean;
    phoneType: string;
    internationalFormat: string;
}
// Sort of now just trying to hardcode the data so that I can format CSV
interface DownloadResultsProps {
    phoneDetails: PhoneNumberDetails | null;
}

const DownloadResults: React.FC<DownloadResultsProps> = ({ phoneDetails }) => {

    const downloadCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";

        // Headers for the CSV File
        const headers = "IsValid, IsPossible, PhoneType, InternationalFormat\n";
        csvContent += headers;

        // Check if phone number details are available
        if (phoneDetails) {
            const csvRow = [
                phoneDetails.isValid,
                phoneDetails.isPossible,
                phoneDetails.phoneType,
                phoneDetails.internationalFormat
            ].join(",");
            csvContent += csvRow + "\n";
        }
        // Making blob to save csv file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, "fileValidationDetails.csv");
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={downloadCSV} disabled={!phoneDetails}>
                Download CSV
            </Button>
        </div>
    );
}

export default DownloadResults;
