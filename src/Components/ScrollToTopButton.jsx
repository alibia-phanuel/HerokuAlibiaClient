function ScrollToTopButton() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={top}
      className="absolute right-14 mt-[5rem] p-[1rem] rounded-full text-white bg-[#F78E39] cursor-pointer animation z-10 "
    >
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
}

export default ScrollToTopButton;
