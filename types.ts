export interface UploadedFile {
  base64: string;
  mimeType: string;
}

// FIX: Add a shared 'Tool' type to be used across components.
export type Tool = 'ad-generator' | 'social-posts' | 'dashboard';

// FIX: Centralize AIStudio interface and global window declaration to avoid conflicts.
declare global {
  // FIX: Moved AIStudio interface into declare global to resolve a conflict between
  // a module-scoped type and a potential global type with the same name.
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  // FIX: Changed window interface augmentation to a global variable declaration
  // to resolve "All declarations of 'aistudio' must have identical modifiers" error.
  // This suggests another part of the codebase might be declaring `var aistudio`.
  var aistudio: AIStudio;
}
