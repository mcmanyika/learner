import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';

export function Register() {
  const [formData, setFormData] = useState({
    schoolName: '',
    email: '',
    phoneNumber: '',
    address: '',
    contactPerson: '',
    numberOfStudents: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Add API call to register school
      console.log('Form submitted:', formData);
      
      // Show success toast
      toast.success('Registration submitted successfully! We will contact you soon.');
      
      // Optional: Clear form
      setFormData({
        schoolName: '',
        email: '',
        phoneNumber: '',
        address: '',
        contactPerson: '',
        numberOfStudents: '',
      });
    } catch (error) {
      // Show error toast
      toast.error('Failed to submit registration. Please try again.');
      console.error('Registration error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto pt-52 p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">School Registration</h1>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-gray-700 mb-3">
            Our comprehensive school management system helps educational institutions streamline their operations by providing:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
            <li>Student information management</li>
            <li>Attendance tracking</li>
            <li>Grade management</li>
            <li>Communication tools for teachers and parents</li>
            <li>Financial management features</li>
          </ul>
          <p className="mt-3 text-gray-700">
            Fill out the form below to register your school's interest, and our team will contact you with more information.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="schoolName" className="block mb-1">School Name</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-1">School Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="contactPerson" className="block mb-1">Contact Person Name</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="numberOfStudents" className="block mb-1">Approximate Number of Students</label>
            <input
              type="number"
              id="numberOfStudents"
              name="numberOfStudents"
              value={formData.numberOfStudents}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register School
        </button>
      </form>
    </div>
  );
}
