
// Dropzone.js
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { getSignature, saveToDatabase } from './_actions';
import styles from '../styles/Componentes/Dropzone.module.css';

const Dropzone = ({ className }) => {
    const [files, setFiles] = useState([])
    const [rejected, setRejected] = useState([])
  
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
      if (acceptedFiles?.length) {
        setFiles(previousFiles => [
          // If allowing multiple files
          // ...previousFiles,
          ...acceptedFiles.map(file =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        ])
      }
  
      if (rejectedFiles?.length) {
        setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
      }
    }, [])
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: {
        'image/*': []
      },
      maxSize: 1024 * 1000,
      maxFiles: 1,
      onDrop
    })
  
    useEffect(() => {
      // Revoke the data uris to avoid memory leaks
      return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [files])
  
    const removeFile = name => {
      setFiles(files => files.filter(file => file.name !== name))
    }
  
    const removeAll = () => {
      setFiles([])
      setRejected([])
    }
  
    const removeRejected = name => {
      setRejected(files => files.filter(({ file }) => file.name !== name))
    }
  
    async function action() {
      const file = files[0]
      if (!file) return
  
      // get a signature using server action
      const { timestamp, signature } = await getSignature()
  
      // upload to cloudinary using the signature
      const formData = new FormData()
  
      formData.append('file', file)
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY)
      formData.append('signature', signature)
      formData.append('timestamp', timestamp)
      formData.append('folder', 'next')
  
      const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
      const data = await fetch(endpoint, {
        method: 'POST',
        body: formData
      }).then(res => res.json())
  
      // write to database using server actions
      await saveToDatabase({
        version: data?.version,
        signature: data?.signature,
        public_id: data?.public_id
      })
    }


  return (
    <form action={action}>
      <div
        {...getRootProps({
          className: styles.dropzoneContainer
        })}
      >
        <input {...getInputProps({ name: 'file', className: styles.fileInput })} />
        <div className={styles.dropzoneContainer}>
          <ArrowUpTrayIcon className={styles.uploadIcon} />
          {isDragActive ? (
            <p className={styles.instructionsActive}>Déposez les fichiers ici ...</p>
          ) : (
            <p className={styles.instructions}>Glissez et déposez des fichiers ici, ou cliquez pour sélectionner des fichiers</p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className={styles.previewSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>Aperçu</h2>
          <button
            type='button'
            onClick={removeAll}
            className={styles.removeButton}
          >
            Supprimer tous les fichiers
          </button>
          <button
            type='submit'
            className={styles.uploadButton}
          >
            Télécharger sur Cloudinary
          </button>
        </div>

        {/* Accepted files */}
        <h3 className={styles.acceptedFilesTitle}>Fichiers acceptés</h3>
        <ul className={styles.fileList}>
          {files.map(file => (
            <li key={file.name} className={styles.fileItem}>
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview)
                }}
                className={styles.filePreviewImage}
              />
              <button
                type='button'
                className={styles.fileRemoveButton}
                onClick={() => removeFile(file.name)}
              >
                <XMarkIcon className={styles.fileRemoveIcon} />
              </button>
              <p className={styles.fileName}>{file.name}</p>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h3 className={styles.rejectedFilesTitle}>Fichiers rejetés</h3>
        <ul className={styles.rejectedFileList}>
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className={styles.rejectedFileItem}>
              <div className={styles.rejectedFileDetails}>
                <p className={styles.rejectedFileName}>{file.name}</p>
                <ul className={styles.rejectedFileErrors}>
                  {errors.map(error => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type='button'
                className={styles.rejectedFileRemoveButton}
                onClick={() => removeRejected(file.name)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  )
}

export default Dropzone;



















