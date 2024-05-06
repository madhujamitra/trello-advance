import React from "react";
import Link from "next/link";
import "../Header/Header.scss"

export default function Header() {
  return (
    <>
      <header>
        <nav className="Header__content Header__background">
            <h1>fake trello</h1>
         
        
          <button>new Board </button>
        </nav>
      </header>
    </>
  );
}
