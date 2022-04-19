import { useEffect } from "react";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router";
import { signInQuery } from "../../utils/queries";

const SignInComponent = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      navigate("/connexion");
    }
  }, [user, navigate]);

  const onSubmit = (values) => {
    const params = {
      name: values.username,
      email: values.username + "@l3.fr",
      password: values.password,
    };
    signInQuery(params)
      .then((response) => {
        if (response.status === 200) navigate("/connexion");
      })
      .catch(() => {
        alert("Utilisateur déjà créé");
      });
  };

  return (
    <div className="row h-100 justify-content-center">
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Obligatoire";
          }
          if (!values.password) {
            errors.password = "Obligatoire";
          }
          if (!values.confirm) {
            errors.confirm = "Obligatoire";
          } else if (values.confirm !== values.password) {
            errors.confirm = "Veuillez renseigner le même mot de passe";
          }
          return errors;
        }}
        render={({ handleSubmit, errors }) => (
          <form className="col-md-4 my-4 auth-form" onSubmit={handleSubmit}>
            <h1 className="text-center">Inscription</h1>
            <div>
              <label className="form-label">Pseudo</label>
              <Field
                className={
                  "form-control mb-2 " + (errors?.username ? "is-invalid" : "")
                }
                name="username"
                component="input"
                placeholder="Pseudo"
                allowNull={false}
                required={true}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <Field
                className={
                  "form-control mb-2 " + (errors?.password ? "is-invalid" : "")
                }
                name="password"
                type="password"
                component="input"
                placeholder="Password"
                allowNull={false}
                required={true}
              />
              <Field
                className={
                  "form-control mb-2 " + (errors?.confirm ? "is-invalid" : "")
                }
                name="confirm"
                type="password"
                component="input"
                placeholder="Password"
                allowNull={false}
                required={true}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              S'inscrire
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default SignInComponent;
