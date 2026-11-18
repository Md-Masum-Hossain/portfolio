'use client';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Upload, X, CheckCircle2, AlertCircle, Image as ImageIcon } from 'lucide-react';

function AddProjectPage() {
  const [isDev, setIsDev] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Full Stack',
    status: 'Completed',
    desc: '',
    techStack: '',
    liveLink: '',
    frontend: '',
    backend: '',
  });
  const [screenshot, setScreenshot] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Check if we're in development mode via the API
    fetch('/api/admin/projects')
      .then((res) => {
        if (res.status === 404) setIsDev(false);
      })
      .catch(() => setIsDev(false));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = useCallback((file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setResult({ type: 'error', message: 'Please upload an image file.' });
      return;
    }
    setScreenshot(file);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
    setResult(null);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const removeScreenshot = () => {
    setScreenshot(null);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!screenshot) {
      setResult({ type: 'error', message: 'Please upload a project screenshot.' });
      return;
    }
    setSubmitting(true);
    setResult(null);

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, val]) => body.append(key, val));
      body.append('screenshot', screenshot);

      const res = await fetch('/api/admin/projects', { method: 'POST', body });
      const data = await res.json();

      if (res.ok && data.success) {
        setResult({ type: 'success', message: `"${formData.title}" saved successfully!` });
        setFormData({
          title: '',
          category: 'Full Stack',
          status: 'Completed',
          desc: '',
          techStack: '',
          liveLink: '',
          frontend: '',
          backend: '',
        });
        removeScreenshot();
      } else {
        setResult({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setResult({ type: 'error', message: 'Network error. Make sure the dev server is running.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isDev) {
    return (
      <div className="w-[95%] max-w-2xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">404 — Not Found</h1>
        <p className="text-secondary">This page is only available in development mode.</p>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-subtle bg-surface text-primary text-sm placeholder:text-secondary/50 focus:outline-none focus:border-accent/60 transition-colors duration-200';
  const labelClass = 'block text-xs font-mono uppercase tracking-wider text-secondary mb-2';

  return (
    <div className="w-[95%] max-w-3xl mx-auto py-10 md:py-16">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full border border-subtle bg-surface text-secondary text-xs font-mono uppercase tracking-wider">
          <Upload className="w-3.5 h-3.5 text-accent" />
          <span>Dev Only</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-3">
          Add <span className="gradient-text">New Project</span>
        </h1>
        <p className="text-secondary text-sm leading-relaxed">
          This form is only accessible on localhost during development. It saves the project data and screenshot directly into the codebase.
        </p>
      </div>

      {result && (
        <div
          className={`mb-6 p-4 rounded-lg border flex items-center gap-3 text-sm ${
            result.type === 'success'
              ? 'border-status/40 bg-status/5 text-status'
              : 'border-accent/40 bg-accent/5 text-accent'
          }`}
        >
          {result.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <span>{result.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className={labelClass}>Project Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g. Dorpon E-commerce Store"
            className={inputClass}
          />
        </div>

        {/* Category + Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Full Stack">Full Stack</option>
              <option value="Frontend">Frontend</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label className={labelClass}>Short Description *</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Concise description of the project..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label className={labelClass}>Tech Stack (comma-separated)</label>
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            placeholder="Next.js, Node.js, MongoDB, Tailwind CSS"
            className={inputClass}
          />
        </div>

        {/* URLs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Live Demo URL</label>
            <input
              type="url"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://myproject.vercel.app"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Frontend GitHub URL</label>
            <input
              type="url"
              name="frontend"
              value={formData.frontend}
              onChange={handleChange}
              placeholder="https://github.com/user/repo"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Backend GitHub URL</label>
          <input
            type="url"
            name="backend"
            value={formData.backend}
            onChange={handleChange}
            placeholder="https://github.com/user/backend-repo"
            className={inputClass}
          />
        </div>

        {/* Screenshot Drag & Drop */}
        <div>
          <label className={labelClass}>Project Screenshot *</label>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`relative w-full rounded-lg border-2 border-dashed transition-all duration-200 cursor-pointer flex flex-col items-center justify-center min-h-[200px] ${
              isDragging
                ? 'border-accent bg-accent/5'
                : 'border-subtle bg-surface hover:border-accent/40'
            }`}
          >
            {preview ? (
              <div className="relative w-full p-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-auto max-h-[300px] object-contain rounded-md"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeScreenshot();
                  }}
                  className="absolute top-2 right-2 p-1.5 rounded-md bg-base/90 border border-subtle text-secondary hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-center text-xs font-mono text-secondary mt-3">
                  {screenshot?.name}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 py-8">
                <div className="w-14 h-14 rounded-lg border border-subtle bg-base flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-primary font-semibold">
                    Drop screenshot here or{' '}
                    <span className="text-accent">browse files</span>
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    PNG, JPG, or WebP — saved to public/projects/
                  </p>
                </div>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files?.[0])}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-subtle">
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                <span>Save Project</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProjectPage;
