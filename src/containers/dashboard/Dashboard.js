import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { getAllMovies } from '../../actions/movie';
import { Row, Col, Card, Icon, Carousel, Button } from 'react-materialize';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import InlineFindForm from './InlineFindForm';
import FindMovie from '../../containers/movie/FindMovie';
const Dashboard = ({ auth: { role, user }, getAllMovies, movie: { movies } }) => {
  useEffect(() => {
    getAllMovies();
  }, []);
  const [redirect, setRedirect] = useState({
    redirectToNewPage: false,
  });

  if (redirect.redirectToNewPage) {
    return <Redirect to='/movies' />;
  }
  const click = () => {
    setRedirect({ ...redirect, redirectToNewPage: true });
  };
  if (role === 'user') {
    return (
      <Fragment>
        <div>
          <FindMovie></FindMovie>
        </div>
        {movies.length > 0 && (
          <div>
            <h2 className='banner'> Feautred Movies</h2>
            <Carousel
              carouselId='Carousel-2'
              options={{
                dist: -100,
                duration: 200,
                fullWidth: true,
                indicators: true,
                noWrap: true,
                numVisible: 5,
                onCycleTo: null,
                padding: 30,
                shift: 10,
              }}
              center
            >
              <div className='myDiv center-align card-panel hoverable'>
                <div className='bg2 '></div>
                <div className=' carasouel-container'>
                  <h3>{movies[0].name}</h3>
                  <Link to={`/movies/${movies[0]._id}`}>
                    <Button> View Movie</Button>
                  </Link>
                </div>
              </div>
              <div className='myDiv card-panel hoverable'>
                <div className='bg2'></div>
                <div className='carasouel-container '>
                  <h3>{movies[1].name}</h3>
                  <Link to={`/movies/${movies[1]._id}`}>
                    <Button> View Movie</Button>
                  </Link>
                </div>
              </div>
              <div className='myDiv card-panel hoverable'>
                <div className='bg2'></div>
                <div className='carasouel-container'>
                  <div>
                    <h3>{movies[2].name}</h3>
                  </div>
                  <Link to={`/movies/${movies[2]._id}`}>
                    <Button> View Movie</Button>
                  </Link>
                </div>
              </div>
            </Carousel>
          </div>
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Row>
          <Col l={4}></Col>
          <Col l={4} m={6} s={12} className='center_card'>
            <Card
              actions={[
                <Link className='adminLinks' to='/movies'>
                  Your Fleet
                </Link>,
                <Link className='adminLinks' to='/addMovie'>
                  Add a Movie
                </Link>,
              ]}
              className='white darken-4'
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName='black-text'
              
            >
              <center>
               <h1 className="busName"> <Icon>person_pin</Icon>Admin</h1>
              <br/>
              Total Movies - {movies.length}
              <br/>
              Total Bookings - {"7"}
              </center>
            </Card>
          </Col>
        </Row>
        
      </Fragment>
    );
  }
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllMovies: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  movie: state.movie,
});
export default connect(mapStateToProps, { getAllMovies })(Dashboard);
