function Page404() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>OOPS ! RIEN N'A ÉTÉ TROUVÉ</h2>
        <p>
          La page que vous recherchez a peut-être été supprimée, a changé de nom
          ou est temporairement indisponible.{" "}
          <a href="/">Retour à la page d'accueil</a>
        </p>
      </div>
    </div>
  );
}

export default Page404;
