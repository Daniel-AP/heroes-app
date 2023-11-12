import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const Hero = () => {

     const navigate = useNavigate()

    const { id } = useParams();

    const hero = useMemo(() => getHeroById(id), [ id ]);

    const handleBack = () => {

      navigate(-1)
      
    }

    if(!hero) return <Navigate to="/marvel"/>

    return (
        <div className="row justify-content-center">
            <div className="col-1 animate__animated animate__fadeIn animate__delay-1s">
              <button className="btn border-0" onClick={ handleBack }>
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 384 512">
                      <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                  </svg>
              </button>
            </div>
            <div className="col-3 animate__animated animate__fadeInLeft animate__fast">
                <img className="col img-fluid img-thumbnail" src={`/src/assets/heroes_img/${ hero.id }.jpg`} alt="" />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
              <h3>
                { hero.superhero }
              </h3>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                      <span className="fw-semibold">Alter ego: </span>{ hero.alter_ego }
                  </li>
                  <li className="list-group-item">
                      <span className="fw-semibold">Publisher: </span>{ hero.publisher }
                  </li>
                  <li className="list-group-item">
                      <span className="fw-semibold">First appearance: </span>{ hero.first_appearance }
                  </li>
              </ul>
              <h3 className="mt-2">
                Characters
              </h3>
              <ul className="list-group list-group-flush">
                <p className="list-group-item">
                  { hero.characters }
                </p>
              </ul>
            </div>
        </div>
    )
}
