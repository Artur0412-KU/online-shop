import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();
  return (
    <nav>
        <Link to='catalog'>Hello</Link>
    </nav>
  )
}
