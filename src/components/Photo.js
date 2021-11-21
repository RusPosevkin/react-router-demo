import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Photo.css';

function Photo({ photos }) {
  const getPhotoById = (photos, id) => photos.find(photo => photo.id === id);

  const { id } = useParams();
  const photo = getPhotoById(photos, id);
  console.log(photos, photo); // посмотрим что внутри - id фотографий

  return (
    <div className="Photo">
      <Link className="Photo-goback" to="/">⟵ Go back</Link>
      {
        photo ?
          <>
            <img className="Photo-image" src={photo.src} alt={photo.alt} />
            <p className="Photo-title">{photo.title}</p>
            <p className="Photo-subtitle">{photo.subtitle}</p>
          </>
          : <p className="Photo-note">No photo with such id</p>
      }
    </div>
  );
}

export default Photo;