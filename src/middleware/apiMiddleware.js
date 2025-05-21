
/**
 * API Middleware for handling backend service communication
 * This middleware can be expanded for future backend integration
 */

// Base API URL - replace with your actual backend URL when implemented
const API_BASE_URL = 'https://api.mansarovarschool.com';

// API request handler with common configuration
export const apiRequest = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Default headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    
    // If we have authentication in the future, add token
    const token = localStorage.getItem('auth_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Merge options with defaults
    const requestOptions = {
      ...options,
      headers,
    };
    
    const response = await fetch(url, requestOptions);
    
    // Handle common response patterns
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        message: errorData.message || 'An error occurred with the request',
        data: errorData,
      };
    }
    
    // Parse JSON if present
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Helper methods for common API operations
export const api = {
  get: (endpoint, options = {}) => 
    apiRequest(endpoint, { ...options, method: 'GET' }),
    
  post: (endpoint, data, options = {}) => 
    apiRequest(endpoint, { 
      ...options, 
      method: 'POST',
      body: JSON.stringify(data),
    }),
    
  put: (endpoint, data, options = {}) => 
    apiRequest(endpoint, { 
      ...options, 
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    
  delete: (endpoint, options = {}) => 
    apiRequest(endpoint, { ...options, method: 'DELETE' }),
};
