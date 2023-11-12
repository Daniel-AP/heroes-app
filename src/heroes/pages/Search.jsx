import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';
import { useForm } from '../hooks/useForm'
import { getHeroesBySearch } from '../helpers/getHeroesBySearch';
import { HeroCard } from '../components/HeroCard';

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q='' } = queryString.parse(location.search);
    console.log(queryString.parse(location.search))
    const heroes = useMemo(() => getHeroesBySearch(q), [q]);

    const { search, onInputChange } = useForm({
      search: q
    })

    const handleSearch = (e) => {

        e.preventDefault();

        if(search.trim().length === 0) return;

        navigate(`?q=${search}`);

    }

    return (
      <>
          <h1>Search</h1>
          <hr />
          <div className="row">
            <div className="col-5">
              <form onSubmit={ handleSearch }>
                <input autoFocus autoComplete='off' name='search' type="text" placeholder="Search a hero..." onChange={ onInputChange } value={ search } className="form-control"/>
                <button className="btn btn-secondary mt-2" type="submit">Search</button>
              </form>
            </div>
            <div className="col-7">
              <h3>Results</h3>
              <hr />
              <div className="d-flex flex-column gap-3">
                {
                  heroes.length
                  ? (
                    heroes.map(hero => <HeroCard key={hero.id} {...hero}/>)
                  )
                  : (
                    <p className="text-muted text-center bg-light rounded py-1 animate__animated animate__fadeIn">No heroes found</p>
                  )
                }
              </div>
            </div>
          </div>
      </>
    )
}
