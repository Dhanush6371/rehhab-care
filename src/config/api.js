// Backend API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// API endpoints
export const API_ENDPOINTS = {
    appointments: `${API_BASE_URL}/appointments`,
    consultations: `${API_BASE_URL}/consultations`,
    partners: `${API_BASE_URL}/partners`,
    health: `${API_BASE_URL}/health`
};

// Generic API call function
const apiCall = async (url, options = {}) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// Appointment API functions
export const appointmentAPI = {
    // Create new appointment
    create: async (formData) => {
        return apiCall(API_ENDPOINTS.appointments, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
    },

    // Get all appointments
    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${API_ENDPOINTS.appointments}?${queryString}` : API_ENDPOINTS.appointments;
        return apiCall(url);
    },

    // Get single appointment
    getById: async (id) => {
        return apiCall(`${API_ENDPOINTS.appointments}/${id}`);
    },

    // Update appointment
    update: async (id, data) => {
        return apiCall(`${API_ENDPOINTS.appointments}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },

    // Delete appointment
    delete: async (id) => {
        return apiCall(`${API_ENDPOINTS.appointments}/${id}`, {
            method: 'DELETE'
        });
    }
};

// Consultation API functions
export const consultationAPI = {
    create: async (formData) => {
        return apiCall(API_ENDPOINTS.consultations, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
    },

    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${API_ENDPOINTS.consultations}?${queryString}` : API_ENDPOINTS.consultations;
        return apiCall(url);
    },

    getById: async (id) => {
        return apiCall(`${API_ENDPOINTS.consultations}/${id}`);
    },

    update: async (id, data) => {
        return apiCall(`${API_ENDPOINTS.consultations}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },

    delete: async (id) => {
        return apiCall(`${API_ENDPOINTS.consultations}/${id}`, {
            method: 'DELETE'
        });
    }
};

// Partner API functions
export const partnerAPI = {
    create: async (formData) => {
        return apiCall(API_ENDPOINTS.partners, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
    },

    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${API_ENDPOINTS.partners}?${queryString}` : API_ENDPOINTS.partners;
        return apiCall(url);
    },

    getById: async (id) => {
        return apiCall(`${API_ENDPOINTS.partners}/${id}`);
    },

    update: async (id, data) => {
        return apiCall(`${API_ENDPOINTS.partners}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },

    delete: async (id) => {
        return apiCall(`${API_ENDPOINTS.partners}/${id}`, {
            method: 'DELETE'
        });
    }
};

// Health check
export const checkAPIHealth = async () => {
    return apiCall(API_ENDPOINTS.health);
};

// Legacy support - keep old function names for backward compatibility
export const submitAppointment = appointmentAPI.create;
export const submitConsultation = consultationAPI.create;
export const submitPartner = partnerAPI.create;
