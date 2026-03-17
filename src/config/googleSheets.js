// Google Sheets Configuration
// Replace this URL with your Google Apps Script Web App URL
export const GOOGLE_SHEETS_CONFIG = {
    appointmentsUrl: 'https://script.google.com/macros/s/AKfycbxXOYNPXPIW51o1gN6jz_ehCEq-Sne6AbOzMNfmnvJd-BHWki0b4F_bpjM4rCKECtdVnA/exec',
    partnersUrl: 'https://script.google.com/macros/s/AKfycbzJD_Czbpm9vwZgJEx0JJUKCCyU58n-E4OnT9QjLdX6HNP8MCcYeU2aLvwiLUIaYiz7YA/exec',
    consultationsUrl: 'https://script.google.com/macros/s/AKfycbxxH_oAVSsc-Cv0AJo5YyctFcAILRRBmKqsFRM_268DjdnsEebDvrnQZGSvfHccctUQ/exec'
};

// Function to submit appointment data to Google Sheets
export const submitAppointment = async (formData) => {
    try {
        await fetch(GOOGLE_SHEETS_CONFIG.appointmentsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Note: no-cors mode doesn't allow reading the response
        // We assume success if no error is thrown
        return { success: true };
    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);
        throw error;
    }
};

// Function to submit consultation data to Google Sheets
export const submitConsultation = async (formData) => {
    try {
        await fetch(GOOGLE_SHEETS_CONFIG.consultationsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        return { success: true };
    } catch (error) {
        console.error('Error submitting consultation to Google Sheets:', error);
        throw error;
    }
};

// Function to submit partner application to Google Sheets
export const submitPartner = async (formData) => {
    try {
        await fetch(GOOGLE_SHEETS_CONFIG.partnersUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        return { success: true };
    } catch (error) {
        console.error('Error submitting partner application to Google Sheets:', error);
        throw error;
    }
};
