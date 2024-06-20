<div className="bg-yellow-200  w-[400px] overflow-hidden rounded-lg">
  {prevOne ? (
    <div className="w-full bg-red-300 rounded">
      <img src={prevOne} alt="image product" className="w-full" />
    </div>
  ) : (
    ""
  )}
</div>;
<div className="border p-2 rounded-lg  ">
  <input
    style={{ display: "none" }}
    type="file"
    onChange={loadImOne}
    name=""
    id="fileOne"
  />
  <label
    className="file cursor-pointer flex items-center gap-2"
    htmlFor="fileOne"
  >
    <i className="fa-solid fa-image"></i>
    <p>Uploade 01</p>
  </label>
</div>;
