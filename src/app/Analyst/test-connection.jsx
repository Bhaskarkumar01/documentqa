'use client';

import { useState } from 'react';
import axios from 'axios';

export default function TestConnection() {
  const [status, setStatus] = useState('Not tested');
  
  const testConnection = async () => {
    setStatus('Testing...');
    try {
      // Try to connect directly to the Flask backend
      const response = await axios.get('http://localhost:5000/');
      setStatus(`Connected! Response: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setStatus(`Error: ${error.message}`);
      console.error('Connection test error:', error);
    }
  };
  
  return (
    <div className="p-4 border rounded-md mb-4">
      <h2 className="text-lg font-bold mb-2">Backend Connection Test</h2>
      <button 
        onClick={testConnection}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Test Connection
      </button>
      <div className="mt-2">
        <p>Status: {status}</p>
      </div>
    </div>
  );
}