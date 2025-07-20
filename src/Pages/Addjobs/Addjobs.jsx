import React, { useState } from 'react';
import './Addjobs.css';

const initialEducation = [{ degree: '', college: '', year: '' }];

const Addjobs = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    constituency: '',
    party: '',
    position: '',
    dob: '',
    gender: 'male',
    vision: '',
    photo: null,
    education: initialEducation,
  });
  const [eduDraft, setEduDraft] = useState({ degree: '', college: '', year: '' });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleEduChange = (e) => {
    setEduDraft({ ...eduDraft, [e.target.name]: e.target.value });
  };

  const addEducation = () => {
    setForm({ ...form, education: [...form.education, eduDraft] });
    setEduDraft({ degree: '', college: '', year: '' });
  };

  const removeEducation = (idx) => {
    setForm({ ...form, education: form.education.filter((_, i) => i !== idx) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="addjobs-container" style={{ maxWidth: 800, margin: '40px auto', borderRadius: 16, boxShadow: '0 2px 24px rgba(0,0,0,0.08)', background: '#fff', padding: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Sign up</h1>
        <span>Already a Member? <a href="#" style={{ color: '#ff9800' }}>Sign In</a></span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
        {[1,2,3].map(n => (
          <div key={n} style={{ textAlign: 'center', margin: '0 24px' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: step === n ? '#ff9800' : '#eee', color: step === n ? '#fff' : '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontWeight: 700 }}>{n}</div>
            <div style={{ fontSize: 12, marginTop: 4 }}>{n === 1 ? 'Basic Details' : n === 2 ? 'Contact Details' : 'Verification'}</div>
          </div>
        ))}
      </div>
      {step === 1 && (
        <form className="addjobs-form" onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 32 }}>
            <div style={{ flex: 1 }}>
              <label>Full Name<input type="text" name="name" value={form.name} onChange={handleChange} required /></label>
              <label>Constituency<input type="text" name="constituency" value={form.constituency} onChange={handleChange} /></label>
              <label>Select Party You Work For
                <select name="party" value={form.party} onChange={handleChange} required>
                  <option value="">- Select Party -</option>
                  <option value="Party A">Party A</option>
                  <option value="Party B">Party B</option>
                </select>
              </label>
              <label>Position
                <select name="position" value={form.position} onChange={handleChange} required>
                  <option value="">- Select -</option>
                  <option value="Leader">Leader</option>
                  <option value="Member">Member</option>
                </select>
              </label>
              <label>Date Of Birth<input type="date" name="dob" value={form.dob} onChange={handleChange} /></label>
              <div style={{ margin: '12px 0' }}>
                Gender:
                <label style={{ marginLeft: 12 }}><input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange} /> Male</label>
                <label style={{ marginLeft: 12 }}><input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} /> Female</label>
              </div>
            </div>
            <div style={{ flex: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <label htmlFor="photo-upload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ff9800', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <span role="img" aria-label="camera" style={{ fontSize: 32, color: '#fff' }}>📷</span>
                </div>
                <input id="photo-upload" type="file" name="photo" accept="image/*" style={{ display: 'none' }} onChange={handleChange} />
                <span style={{ color: '#888', fontSize: 14 }}>Add Photo</span>
              </label>
              {form.photo && <span style={{ fontSize: 12, color: '#4caf50' }}>Photo selected</span>}
            </div>
          </div>
          <label>Vision & Mission<textarea name="vision" value={form.vision} onChange={handleChange} style={{ minHeight: 60 }} /></label>
          <div style={{ margin: '24px 0 0 0' }}>
            <b>Education</b>
            <div style={{ background: '#f6f8fa', borderRadius: 8, padding: 16, marginTop: 8 }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                <input type="text" name="degree" placeholder="Degree" value={eduDraft.degree} onChange={handleEduChange} style={{ flex: 1 }} />
                <input type="text" name="college" placeholder="College / University" value={eduDraft.college} onChange={handleEduChange} style={{ flex: 1 }} />
                <input type="text" name="year" placeholder="Graduation Year" value={eduDraft.year} onChange={handleEduChange} style={{ flex: 1 }} />
                <button type="button" onClick={addEducation} style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: 6, padding: '0 16px', fontWeight: 600 }}>Save</button>
              </div>
              {form.education.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 6, padding: 8, marginBottom: 4 }}>
                  <span style={{ flex: 1 }}>{edu.degree || 'Degree Name'}</span>
                  <span style={{ flex: 1 }}>{edu.college || 'College name appears here'}</span>
                  <span style={{ flex: 1 }}>{edu.year || 'Year'}</span>
                  <button type="button" onClick={() => removeEducation(idx)} style={{ background: 'none', border: 'none', color: '#ff9800', fontSize: 18, cursor: 'pointer' }}>🗑️</button>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
            <button type="button" onClick={() => setStep(2)} style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 600, fontSize: 16 }}>Save & Continue</button>
          </div>
        </form>
      )}
      {step === 2 && (
        <div style={{ textAlign: 'center', padding: 40 }}>
          <h2>Contact Details (Step 2)</h2>
          <button type="button" onClick={() => setStep(3)} style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 600, fontSize: 16 }}>Continue</button>
        </div>
      )}
      {step === 3 && (
        <div style={{ textAlign: 'center', padding: 40 }}>
          <h2>Verification (Step 3)</h2>
          <button type="button" onClick={() => setStep(1)} style={{ background: '#ff9800', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 600, fontSize: 16 }}>Back to Start</button>
        </div>
      )}
    </div>
  );
};

export default Addjobs;
