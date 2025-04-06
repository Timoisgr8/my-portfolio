import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Feedback from ${name || 'Anonymous'}`;
    const body = `
Name/Alias: ${name}
Email: ${email}
Rating: ${rating} / 5
Feedback:

${feedback}
    `.trim();

    const mailtoLink = `mailto:tewtimothy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleRatingChange = (e) => {
    setRating(parseFloat(e.target.value));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = rating >= i;
      const isHalfFilled = rating >= i - 0.5 && rating < i;
      const starClass = isHalfFilled
        ? 'mask mask-star-2 mask-half-1 bg-green-500'
        : isFilled
        ? 'mask mask-star-2 bg-green-500'
        : 'mask mask-star-2 mask-half-1 bg-gray-300';

      stars.push(
        <input
          key={i}
          type="radio"
          name="rating-11"
          className={starClass}
          aria-label={`${i - 0.5} star`}
          value={i}
          onClick={() => setRating(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium">Name / Alias</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name or alias"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Feedback</label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="What would you like to say?"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Rating ({rating} / 5)</label>
          <div className="rating rating-lg rating-half mb-4">
            {renderStars()}
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Send Feedback
        </button>
      </form>
    </div>
  );
}

export default Contact;