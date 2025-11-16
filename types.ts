export interface UploadedFile {
  base64: string;
  mimeType: string;
}

// FIX: Add a shared 'Tool' type to be used across components.
export type Tool = 'ad-generator' | 'social-posts' | 'dashboard';