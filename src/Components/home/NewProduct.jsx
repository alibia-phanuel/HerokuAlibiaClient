import CardHome from "../CardHome";
function NewProduct() {
  return (
    <div className="flex  justify-center items-center flex-col ">
      <div className="container  flex justify-between items-center  my-10 text-[20px] rounded-lg">
        <div className="font-bold">Produits récents</div>
      </div>
      <div className="container px-2 bg-white  ShowProduct shadow-lg flex justify-between items-center  text-[20px] rounded-lg flex-col">
        <CardHome></CardHome>
      </div>
    </div>
  );
}

export default NewProduct;
