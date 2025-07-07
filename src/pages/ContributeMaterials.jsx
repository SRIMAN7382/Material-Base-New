import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload, FileText, User, Calendar, Hash, BookOpen, Send, CheckCircle,
  AlertCircle, X, CloudUpload, Sparkles, Award, Target, Shield, Heart
} from 'lucide-react';

const ContributeMaterials = () => {
  const [formData, setFormData] = useState({
    name: '', year: '', regNumber: '', department: '',
    semester: '', subject: '', materialType: '', description: '', email: ''
  });
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const departments = ['AEROSPACE', 'BIOTECHNOLOGY', 'CSE', 'CIVIL', 'CSBS', 'IOT', 'IT', 'ICT', 'ECE', 'EEE', 'EIE', 'MECHANICAL', 'MECHATRONICS'];
  const materialTypes = ['Lecture Notes', 'Lab Manual', 'Previous Year Papers', 'Assignment Solutions', 'Project Reports', 'Study Materials', 'Reference Books', 'Presentation Slides', 'Other'];

  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === "dragenter" || e.type === "dragover"); };
  const handleDrop = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (e.dataTransfer.files[0]) handleFiles(e.dataTransfer.files); };
  const handleFileInput = (e) => { if (e.target.files) handleFiles(e.target.files); };
  const handleFiles = (fileList) => setFiles(prev => [...prev, ...Array.from(fileList).map(file => ({ id: Date.now() + Math.random(), file, name: file.name, size: file.size, type: file.type }))]);
  const removeFile = (id) => setFiles(prev => prev.filter(f => f.id !== id));
  const formatFileSize = (bytes) => bytes === 0 ? '0 Bytes' : `${parseFloat((bytes / Math.pow(1024, Math.floor(Math.log(bytes) / Math.log(1024)))).toFixed(2))} ${['Bytes', 'KB', 'MB', 'GB'][Math.floor(Math.log(bytes) / Math.log(1024))]}`;
  const isFormValid = formData.name && formData.year && formData.regNumber && formData.department && formData.semester && formData.subject && formData.materialType && files.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessToken = await requestGoogleDriveAccessToken();
      if (!accessToken) throw new Error("Failed to get Google Drive access token");

      const formPayload = new FormData();
      for (const key in formData) formPayload.append(key, formData[key]);
      formPayload.append("accessToken", accessToken);
      files.forEach(f => formPayload.append("files", f.file));

      const res = await fetch("https://material-base-backend-upload-production.up.railway.app/api/upload-materials", { method: "POST", body: formPayload });
      if (!res.ok) throw new Error("Upload failed");

      setSubmitStatus("success");
      setTimeout(() => { resetForm(); }, 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', year: '', regNumber: '', department: '', semester: '', subject: '', materialType: '', description: '', email: '' });
    setFiles([]);
    setSubmitStatus(null);
  };

  const requestGoogleDriveAccessToken = () => new Promise((resolve, reject) => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: "232829986455-fediihgklmi1d27lki2obhq8gqmm47n8.apps.googleusercontent.com",
      scope: "openid email profile https://www.googleapis.com/auth/drive.file",
      callback: (response) => {
        if (response.error) return reject(response.error);
        resolve(response.access_token);
      },
    });
    client.requestAccessToken();
  });

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="flex items-center justify-center space-x-4 mb-8">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"><CloudUpload className="w-8 h-8 text-white" /></motion.div>
            <div><h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Contribute Materials</h1></div>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">Help your fellow Sastraites by sharing your study materials, notes, and resources</motion.p>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 lg:p-8"><h2 className="text-2xl lg:text-3xl font-bold text-white">Material Submission Form</h2></div>
          <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-8">
            {/* Your existing personal + academic + file sections go here unchanged */}
            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button type="submit" disabled={!isFormValid || isSubmitting} whileTap={{ scale: 0.98 }} className={`flex-1 flex items-center justify-center space-x-3 py-4 px-8 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 ${isFormValid && !isSubmitting ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transform hover:scale-105' : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}>
                {isSubmitting ? (<><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" /><span>Submitting...</span></>) : (<><Send className="w-6 h-6" /><span>Submit Materials</span></>)}
              </motion.button>
              <motion.button type="button" onClick={resetForm} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-2xl font-medium transition-all duration-200">Reset Form</motion.button>
            </motion.div>
          </form>
        </motion.div>

        <AnimatePresence>{submitStatus && (<motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} className="fixed bottom-8 right-8 z-50"><div className={`p-6 rounded-2xl shadow-2xl border-2 ${submitStatus === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}><div className="flex items-center space-x-3">{submitStatus === 'success' ? (<CheckCircle className="w-6 h-6 text-green-600" />) : (<AlertCircle className="w-6 h-6 text-red-600" />)}<div><h4 className="font-bold">{submitStatus === 'success' ? 'Success!' : 'Error!'}</h4><p className="text-sm">{submitStatus === 'success' ? 'Your materials have been submitted successfully!' : 'Failed to submit materials. Please try again.'}</p></div></div></div></motion.div>)}</AnimatePresence>
      </div>
    </div>
  );
};

export default ContributeMaterials;
