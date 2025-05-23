const API_BASE_URL = 'https://appointment-scheduler-2-backend.onrender.com'; // Replace with your backend URL when deployed

// Fetch businesses
async function getBusinesses() {
  try {
    const response = await fetch(`${API_BASE_URL}/businesses`);
    if (!response.ok) throw new Error('Failed to fetch businesses');
    return await response.json();
  } catch (error) {
    console.error('Error fetching businesses:', error);
    throw error;
  }
}

// Fetch a specific business
async function getBusiness(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/businesses/${id}`);
    if (!response.ok) throw new Error('Failed to fetch business');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching business ${id}:`, error);
    throw error;
  }
}

// Fetch services for a business
async function getServices(businessId) {
  try {
    const response = await fetch(`${API_BASE_URL}/businesses/${businessId}/services`);
    if (!response.ok) throw new Error('Failed to fetch services');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching services for business ${businessId}:`, error);
    throw error;
  }
}

// Fetch available slots for a service on a specific date
async function getAvailableSlots(serviceId, date) {
  try {
    const response = await fetch(`${API_BASE_URL}/services/${serviceId}/slots?date=${date}`);
    if (!response.ok) throw new Error('Failed to fetch available slots');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching slots for service ${serviceId}:`, error);
    throw error;
  }
}

// Create a new appointment
async function createAppointment(appointmentData) {
  try {
    const response = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });
    if (!response.ok) throw new Error('Failed to create appointment');
    return await response.json();
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
}

// Fetch all clients
async function getClients() {
  try {
    const response = await fetch(`${API_BASE_URL}/clients`);
    if (!response.ok) throw new Error('Failed to fetch clients');
    return await response.json();
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
}

// Get client by ID
async function getClient(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/clients/${id}`);
    if (!response.ok) throw new Error('Failed to fetch client');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching client ${id}:`, error);
    throw error;
  }
}

// Create a new client
async function createClient(clientData) {
  try {
    const response = await fetch(`${API_BASE_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientData),
    });
    if (!response.ok) throw new Error('Failed to create client');
    return await response.json();
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
}