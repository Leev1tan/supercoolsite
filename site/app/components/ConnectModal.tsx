// app/components/ConnectModal.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ConnectModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        // Handle success (e.g., show confirmation)
        console.log('Form submitted successfully:', data);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      {/* Modal trigger button */}
      <button onClick={() => setIsOpen(true)}>Connect</button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Connect with Us</h2>
            {/* Form inputs */}
            <form onSubmit={handleSubmit}>
              {/* Example: Input fields */}
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
