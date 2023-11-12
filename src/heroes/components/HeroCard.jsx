import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({

  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters

 }) => {

    const img_url = `/src/assets/heroes_img/${ id }.jpg`;

    return (

        <div className="col animate__animated animate__fadeIn">
            <div className="card position-relative">
                <div className="row">
                    <div className="col-4">
                      <img className="img-fluid rounded-start" src={img_url} alt={ superhero } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <div className="card-title">
                                <h5>{ superhero }</h5>
                            </div>
                            <p className='card-text fs-6 fw-semibold'>
                                { alter_ego }
                            </p>
                            {

                                alter_ego !== characters && (
                                  <p className='text-muted'>
                                      { characters }
                                  </p>
                                )

                            }
                        </div>
                    </div>
                </div>
                <Link className='stretched-link' to={`/hero/${id}`}/>
            </div>
        </div>

    ) 
}
