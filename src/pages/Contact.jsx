import React, { useState } from 'react';

function Contact() {
  const [isFormCardHovered, setIsFormCardHovered] = useState(false);
  const [isDirectCardHovered, setIsDirectCardHovered] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const getInputStyle = (fieldName) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '14px 16px',
    backgroundColor: 'rgba(20, 20, 25, 0.7)',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    border: `1px solid ${focusedField === fieldName ? '#00eaff' : 'rgba(255, 255, 255, 0.15)'}`,
    borderRadius: '12px',
    outline: 'none',
    boxShadow: focusedField === fieldName ? '0 0 12px rgba(0, 234, 255, 0.25)' : 'none',
    transition: 'all 0.3s ease'
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#050508',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #121026 0%, #050508 70%)',
        color: '#ffffff',
        padding: '100px 24px 80px 24px',
        fontFamily: '"Inter", "Segoe UI", sans-serif'
      }}
    >
      <div style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: '900',
            margin: '0 0 12px 0',
            letterSpacing: '-1.5px',
            background: 'linear-gradient(135deg, #ffffff 40%, #a3a3a3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Get In Touch
        </h2>
        <div style={{ 
          width: '70px', 
          height: '4px', 
          background: 'linear-gradient(90deg, #00eaff, #925fff)', 
          borderRadius: '2px',
          margin: '0 auto',
          boxShadow: '0 0 10px rgba(0, 234, 255, 0.3)'
        }} />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: '1000px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div
          onMouseEnter={() => setIsFormCardHovered(true)}
          onMouseLeave={() => setIsFormCardHovered(false)}
          style={{
            flex: '1 1 450px',
            boxSizing: 'border-box',
            padding: '45px 35px',
            background: isFormCardHovered ? 'rgba(15, 12, 38, 0.5)' : 'rgba(10, 10, 15, 0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1px solid transparent',
            backgroundImage: isFormCardHovered
              ? 'linear-gradient(rgba(15, 12, 38, 1), rgba(15, 12, 38, 1)), linear-gradient(135deg, #00eaff 0%, #925fff 100%)'
              : 'linear-gradient(rgba(10, 10, 15, 1), rgba(10, 10, 15, 1)), linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: isFormCardHovered ? '0 20px 45px rgba(0, 234, 255, 0.12)' : '0 15px 35px rgba(0, 0, 0, 0.5)',
            transform: isFormCardHovered ? 'translateY(-6px)' : 'translateY(0)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <h3 style={{ margin: '0 0 25px 0', fontSize: '1.4rem', fontWeight: '800' }}>Drop a Message</h3>
          
          <form
            action="https://formsubmit.co/animukherjee2006@gmail.com"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              style={getInputStyle('name')}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={getInputStyle('email')}
            />

            <textarea
              name="message"
              placeholder="Tell me about your project, idea, or role..."
              required
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              style={{ ...getInputStyle('message'), height: '150px', resize: 'vertical' }}
            ></textarea>

            <button
              type="submit"
              onMouseEnter={() => setIsSubmitHovered(true)}
              onMouseLeave={() => setIsSubmitHovered(false)}
              style={{
                background: isSubmitHovered ? 'linear-gradient(90deg, #925fff 0%, #00eaff 100%)' : 'linear-gradient(90deg, #00eaff 0%, #925fff 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '14px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '800',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                boxShadow: isSubmitHovered ? '0 8px 25px rgba(146, 95, 255, 0.35)' : 'none',
                transform: isSubmitHovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div
          onMouseEnter={() => setIsDirectCardHovered(true)}
          onMouseLeave={() => setIsDirectCardHovered(false)}
          style={{
            flex: '1 1 320px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            padding: '45px 35px',
            background: isDirectCardHovered ? 'rgba(15, 12, 38, 0.5)' : 'rgba(10, 10, 15, 0.3)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '24px',
            textAlign: 'center',
            border: '1px solid transparent',
            backgroundImage: isDirectCardHovered
              ? 'linear-gradient(rgba(15, 12, 38, 1), rgba(15, 12, 38, 1)), linear-gradient(135deg, #925fff 0%, #00eaff 100%)'
              : 'linear-gradient(rgba(10, 10, 15, 1), rgba(10, 10, 15, 1)), linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: isDirectCardHovered ? '0 20px 45px rgba(146, 95, 255, 0.12)' : '0 15px 35px rgba(0, 0, 0, 0.5)',
            transform: isDirectCardHovered ? 'translateY(-6px)' : 'translateY(0)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div style={{
            fontSize: '0.8rem',
            fontWeight: '900',
            color: '#63637e',
            letterSpacing: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            padding: '6px 18px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '28px'
          }}>
            OR
          </div>
          
          <h4 style={{ margin: '0 0 12px 0', fontSize: '1.3rem', fontWeight: '800' }}>
            Reach Out Directly
          </h4>
          
          <p style={{ color: '#a1a1aa', margin: '0 0 28px 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Prefer your native mail client? Skip the form entirely and shoot over an email with one click.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=animukherjee2006@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsLinkHovered(true)}
            onMouseLeave={() => setIsLinkHovered(false)}
            style={{
              fontSize: '1.05rem',
              fontWeight: '700',
              textDecoration: 'none',
              background: 'linear-gradient(90deg, #00eaff, #925fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              borderBottom: isLinkHovered ? '2px solid #00eaff' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'all 0.2s ease'
            }}
          >
            animukherjee2006@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;