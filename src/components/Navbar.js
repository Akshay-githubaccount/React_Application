import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
{/* NAVBAR */}

<nav class="nav">
      <Link to="/" class="nav-link">Home</Link>
      <Link to="/Services" class="nav-link">Services</Link>
      <Link to="/career" class="nav-link">Career</Link>
      <Link to="/tools" class="nav-link">Tools</Link>
    </nav>


{/* Corousel */}


{/* <div class="container">
  <div class="carousel">
    <div class="carousel__face"><span>This is IT Company</span></div>
    <div class="carousel__face"><span>We are Here</span></div>
    <div class="carousel__face"><span>To work</span></div>
    <div class="carousel__face"><span>For you</span></div>
    <div class="carousel__face"><span>Just give it</span></div>
    <div class="carousel__face"><span>A try</span></div>
    <div class="carousel__face"><span>And see</span></div>
    <div class="carousel__face"><span>How IT Works</span></div>
    <div class="carousel__face"><span>Woow</span></div>
  </div>
</div>



{/*  Services */}



{/* <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 7-17&#160;years old
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.7.2023
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          UX/UI Web-Design&#160;+ Mobile Design
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.7.2023
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Annual package "Product+UX/UI+Graph designer&#160;2023"
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.7.2023
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Graphic Design
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.7.2023
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          App Development
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            30.7.2023
          </span>
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Front-end development&#160;+ jQuery&#160;+ Wordpress
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
          Digital Marketing
        </div>
      </Link>
    </div>

    <div class="ag-courses_item">
      <Link to="/" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Full-Stack Development
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            31.10.2023
          </span>
        </div>
      </Link>
    </div>

  </div>
</div>

<hr />


{/* Career */}


{/* <h1>WHY JOIN US</h1>



<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src="https://picsum.photos/id/1011/800/450" alt="" />
      </figure>
      <div class="article-body">
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <Link to="/" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="https://picsum.photos/id/1005/800/450" alt="" />
      </figure>
      <div class="article-body">
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <Link to="/" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="https://picsum.photos/id/103/800/450" alt="" />
      </figure>
      <div class="article-body">
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <Link to="/" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
</section>  */}


    </div>
  )
}

export default Navbar
