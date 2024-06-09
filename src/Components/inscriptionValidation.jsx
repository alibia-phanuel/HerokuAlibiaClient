import * as Yup from "yup";

export const inscriptionValidation = Yup.object({
  name: Yup.string()
    .min(3, "le nom doit comporter au moins 3 caractères")
    .required("Le nom est obligatoire"),
  lastName: Yup.string()
    .min(3, "le prénom doit comporter au moins 3 caractères")
    .required("Le prénom est obligatoire"),
  phoneNumber: Yup.number()
    .required("Required")

    .min(0, "Not negative number"),
  email: Yup.string()
    .email("S'il vous plaît entré une adresse mail valide")
    .required("Votre adresse mail est obligatoire"),
  password: Yup.string()
    .min(5, "le mot de passe doit comporter au moins 5 caractères")
    .required("Mot de passe obligatoire"),
  cpassword: Yup.string()
    .required("Les mots de passe doivent être identiques")
    .oneOf([Yup.ref("password")], "Les mots de passe doivent être identiques"),
});
