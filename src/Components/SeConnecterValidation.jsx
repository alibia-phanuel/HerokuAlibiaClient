import * as Yup from "yup";
export const SeConnecterValidation = Yup.object({
  email: Yup.string()
    .email("S'il vous plaît entré une adresse mail valide")
    .required("Votre adresse mail est obligatoire"),
  password: Yup.string()
    .min(5, "le mot de passe doit comporter au moins 5 caractères")
    .required("Mot de passe obligatoire"),
});
