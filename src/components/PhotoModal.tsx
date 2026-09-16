import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  RotateCcw,
  CheckCircle2,
  Camera,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { useAvatar, DEFAULT_AVATAR } from '../utils/avatar';
import { PROFILE_DATA } from '../data/academicData';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose }) => {
  const [avatarUrl, setCustomAvatar, resetAvatar] = useAvatar();
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WebP, etc.).');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomAvatar(reader.result);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const isCustom = avatarUrl !== DEFAULT_AVATAR;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950/60">
          <div className="flex items-center gap-2.5">
            <Camera className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-base text-white">
              Official Academic Portrait
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Portrait Preview Frame */}
          <div className="flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-2xl bg-stone-950 ring-4 ring-amber-500/15 relative">
                <img
                  src={avatarUrl}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1.5 cursor-pointer backdrop-blur-xs"
              >
                <Camera className="w-6 h-6 text-amber-400" />
                <span className="text-xs font-semibold">Click to Replace</span>
              </button>
            </div>

            <div className="mt-4">
              <h4 className="font-serif font-bold text-lg text-white">
                {PROFILE_DATA.name}
              </h4>
              <p className="text-xs text-amber-400 font-medium">
                {PROFILE_DATA.title}
              </p>
              <p className="text-xs text-stone-400 mt-0.5">
                {PROFILE_DATA.institution}
              </p>
            </div>
          </div>

          {/* Success Banner */}
          {uploadSuccess && (
            <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-xl flex items-center gap-2.5 text-xs text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Profile photo updated successfully across the entire site!</span>
            </div>
          )}

          {/* Upload Dropzone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
              isDragOver
                ? 'border-amber-400 bg-amber-950/20 text-amber-200'
                : 'border-stone-700 hover:border-stone-500 bg-stone-950/40 text-stone-400'
            }`}
          >
            <Upload className="w-6 h-6 mx-auto mb-2 text-stone-400 group-hover:text-amber-400" />
            <p className="text-xs font-semibold text-stone-200">
              Upload a new photo file
            </p>
            <p className="text-[11px] text-stone-500 mt-0.5">
              Drag & drop or click to browse (PNG, JPG, WebP)
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileChange(e.target.files[0]);
                }
              }}
            />
          </div>

          {/* Controls Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-xs">
            {isCustom ? (
              <button
                onClick={resetAvatar}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-stone-400 hover:text-amber-300 hover:bg-stone-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default Photo</span>
              </button>
            ) : (
              <span className="text-[11px] text-stone-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Default authentic profile photo active
              </span>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
