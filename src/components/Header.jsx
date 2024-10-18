import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../slice/recipeSlice'

const Header = ({insideHome}) => {
    const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  fixed-top" style={{background:' rgb(112, 151, 34)'}}>
        <div className="container">
            <Link className="navbar-brand text-white fw-bold" to={'/'}>
            <i className="fas fa-utensils me-2"></i> Receipes
            </Link>
            {insideHome &&(
                <form className="d-flex ms-auto">
                <input 
                onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))}
                 className="form-control me-2"
                 type="text"
                 placeholder='Search Receipe'
                 aria-label='Search' 
                 />
            </form>
            )}
        </div>
      </nav>

    </div>
  )
}

export default Header
