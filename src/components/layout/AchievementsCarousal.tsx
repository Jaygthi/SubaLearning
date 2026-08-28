import {
  useEffect,
  useMemo,
  useState,
} from "react";

import StudentAchievementCard from "../common/AchievementCard";
import type { StudentAchievement } from "../../data/data_Achievements";

import "../../styles/AchievementsCarousal.css";

interface StudentAchievementsCarouselProps {
  achievements: StudentAchievement[];
  autoPlayInterval?: number;
}

export default function StudentAchievementsCarousel({
  achievements,
  autoPlayInterval = 5000,
}: StudentAchievementsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] =
    useState(true);

  const [isStopped, setIsStopped] =
    useState(false);

  /*
   * Desktop = 3
   * Tablet = 2
   * Mobile = 1
   *
   * We use 1 card as the logical movement unit.
   * CSS controls how many cards are visible.
   */
  const totalSlides = achievements.length;

  const maxIndex = Math.max(
    totalSlides - 1,
    0
  );

  const goNext = () => {
    setCurrentIndex((previous) =>
      previous >= maxIndex
        ? 0
        : previous + 1
    );
  };

  const goPrevious = () => {
    setCurrentIndex((previous) =>
      previous <= 0
        ? maxIndex
        : previous - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  /*
   * Auto play
   */
  useEffect(() => {
    if (!isPlaying || isStopped) {
      return;
    }

    const timer = window.setInterval(
      goNext,
      autoPlayInterval
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [
    isPlaying,
    isStopped,
    autoPlayInterval,
    maxIndex,
  ]);

  /*
   * Pause
   */
  const handlePause = () => {
    setIsPlaying(false);
  };

  /*
   * Play
   */
  const handlePlay = () => {
    setIsStopped(false);
    setIsPlaying(true);
  };

  /*
   * Stop
   *
   * Stop autoplay and return to
   * the first achievement.
   */
  const handleStop = () => {
    setIsPlaying(false);
    setIsStopped(true);
    setCurrentIndex(0);
  };

  /*
   * Calculate transform.
   *
   * CSS defines the width of each card:
   *
   * Desktop = 33.333%
   * Tablet  = 50%
   * Mobile  = 100%
   */
  const carouselStyle = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * 100}%)`,
    }),
    [currentIndex]
  );

  if (!achievements.length) {
    return null;
  }

  return (
    <section
      className="student-achievements"
      aria-labelledby="student-achievements-heading"
    >
      <div className="container">

        {/* Section heading */}
        <header className="text-center mb-4 mb-md-5">

          <h2
            id="student-achievements-heading"
            className="student-achievements-title"
          >
            Students Achievements
          </h2>

          {/* <p className="student-achievements-subtitle">
            Success stories from our students
          </p> */}

        </header>

        {/* Carousel */}
        <div
          className="student-carousel"
          aria-roledescription="carousel"
          aria-label="Student achievements"
        >

          {/* Viewport */}
          <div className="student-carousel-viewport">

            {/* Track */}
            <div
              className="student-carousel-track"
              style={carouselStyle}
            >

              {achievements.map(
                (achievement) => (
                  <div
                    className="student-carousel-slide"
                    key={achievement.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${achievement.studentName} achievement`}
                  >
                    <StudentAchievementCard
                      achievement={achievement}
                    />
                  </div>
                )
              )}

            </div>
          </div>

          {/* Previous / Next */}
          <button
            type="button"
            className="carousel-control-button carousel-control-prev-custom"
            onClick={goPrevious}
            aria-label="Previous student achievement"
          >
            <span aria-hidden="true" className="pb-2">
              ‹
            </span>
          </button>

          <button
            type="button"
            className="carousel-control-button carousel-control-next-custom"
            onClick={goNext}
            aria-label="Next student achievement"
          >
            <span aria-hidden="true" className="pb-2">
              ›
            </span>
          </button>

        </div>

        {/* Indicators */}
        <div
          className="student-carousel-indicators"
          aria-label="Choose student achievement"
        >
          {achievements.map(
            (achievement, index) => (
              <button
                key={achievement.id}
                type="button"
                className={`carousel-indicator ${
                  index === currentIndex
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  goToSlide(index)
                }
                aria-label={`Show achievement ${index + 1}`}
                aria-current={
                  index === currentIndex
                    ? "true"
                    : undefined
                }
              />
            )
          )}
        </div>

        {/* Controls */}
        <div className="student-carousel-controls">

          <button
            type="button"
            className="btn btn-outline-success"
            onClick={goPrevious}
          >
            <span aria-hidden="true">←</span>
            <span>Previous</span>
          </button>

          <button
            type="button"
            className="btn btn-outline-success"
            onClick={goNext}
          >
            <span>Next</span>
            <span aria-hidden="true">→</span>
          </button>

          {!isPlaying ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={handlePlay}
            >
              <span aria-hidden="true">▶</span>
              <span>Play</span>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={handlePause}
            >
              <span aria-hidden="true">Ⅱ</span>
              <span>Pause</span>
            </button>
          )}

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleStop}
          >
            <span aria-hidden="true">■</span>
            <span>Stop</span>
          </button>

        </div>

      </div>
    </section>
  );
}