import React, { useState } from "react";

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-content fade-in-down">
          <h2 className="form-title fade-in">Get 15% Off Your First Order</h2>

          {submitted ? (
            <div className="success-message fade-in">
              Thanks for signing up! Check your email for your discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-form">
              <div className="form-group slide-up">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group slide-up delay-100">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="button-wrapper slide-up delay-200">
                <button type="submit">Claim My 15% Off</button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .form-container {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 2rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-wrapper {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .form-content {
          background: #2a2a2a;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        @media (min-width: 768px) {
          .form-content {
            padding: 3rem;
          }
        }

        .form-title {
          color: #ffffff;
          text-align: center;
          font-size: 1.75rem;
          margin-bottom: 2rem;
          font-weight: bold;
        }

        @media (min-width: 480px) {
          .form-title {
            font-size: 2rem;
          }
        }

        @media (min-width: 768px) {
          .form-title {
            font-size: 2.5rem;
          }
        }

        .lead-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          color: #cccccc;
          font-size: 0.875rem;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 0.875rem 1rem;
          border-radius: 8px;
          border: 1px solid #404040;
          background: #333333;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        input::placeholder {
          color: #666666;
        }

        .button-wrapper {
          margin-top: 1rem;
        }

        button {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border: none;
          background: #3b82f6;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        button:hover {
          background: #2563eb;
          transform: scale(1.02);
        }

        button:active {
          transform: scale(0.98);
        }

        .success-message {
          background: #059669;
          color: #ffffff;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .slide-up {
          animation: slideUp 0.6s ease-out;
        }

        .fade-in-down {
          animation: fadeInDown 0.6s ease-out;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        /* Media Queries for smaller screens */
        @media (max-width: 320px) {
          .form-content {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.5rem;
          }

          input {
            padding: 0.75rem;
          }

          button {
            padding: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LeadCaptureForm;
