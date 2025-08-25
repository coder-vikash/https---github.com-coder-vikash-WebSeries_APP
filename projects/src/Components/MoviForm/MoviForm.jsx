import React, { useState } from "react";
import axios from "axios";

const MovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    genre: "",
    language: "",
    releaseDate: "",
  });
  const [poster, setPoster] = useState(null);
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    if (poster) data.append("poster", poster);
    if (video) data.append("video", video);

    try {
      const res = await axios.post("http://localhost:5000/api/movies", data);
      setMessage("Movie uploaded successfully!");
      setFormData({
        title: "",
        subtitle: "",
        genre: "",
        language: "",
        releaseDate: "",
      });
      setPoster(null);
      setVideo(null);
    } catch (err) {
      setMessage("Failed to upload movie.");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">🎬 Upload New Movie</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Movie Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="subtitle"
            className="form-control"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="genre"
            className="form-control"
            placeholder="Genres (comma-separated)"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="language"
            className="form-control"
            placeholder="Language"
            value={formData.language}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="releaseDate"
            className="form-control"
            value={formData.releaseDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Poster Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={(e) => setPoster(e.target.files[0])}
            required
          />
        </div>
        <div className="mb-3">
          <label>Movie Video (MP4)</label>
          <input
            type="file"
            accept="video/*"
            className="form-control"
            onChange={(e) => setVideo(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload Movie
        </button>
        {message && <div className="mt-3 alert alert-info">{message}</div>}
      </form>
    </div>
  );
};

export default MovieForm;
