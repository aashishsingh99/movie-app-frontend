import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import MoviePageComp from './MoviePageComp';
const MoviePageNav = ({ movie, seats, id, role ,resetMovie}) => {
  const [navData, setNavData] = useState({
    availableSeats: 0,
  });
  useEffect(() => {
    var booked = 0;
    for (let index = 0; index < seats.length; index++) {
      const element = seats[index];
      if (element !== null) {
        booked = booked + 1;
      }
    }

    setNavData({ ...navData, availableSeats: 40 - booked });
  });

  return (
    <Fragment>
      {role === 'admin' && (
        <div className='busPageNav'>
        <Collapsible accordion={true}>
          <CollapsibleItem
            expanded={true}
            header='Details '
            icon={<Icon>info_outline</Icon>}
            node='div'
          >
            <div>
              Available Seats - {navData.availableSeats}
              <br />
              Start Time - {movie.startTime}
              <br />
              End Time - {movie.reachTime}
              <br />
              Price - {movie.fare}
            </div>
          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header='All Buses'
            icon={<Icon>place</Icon>}
            node='div'
          >
            View All Movies... 
            <br/>
            <Link to='/movies'>
              
              <button> Movies </button>
            </Link>
          </CollapsibleItem>
          
              <CollapsibleItem
                expanded={false}
                header='Reset All seats'
                icon={<Icon>cancel</Icon>}
                node='div'
              >
                Once reset all the bookings will be cancelled <br /> 
                <button onClick={()=>{resetMovie(movie._id)}}> Reset </button>
              </CollapsibleItem>
            
        </Collapsible>
      </div>
      )}
      {role === 'user' && (
        <div className='busPageNav'>
          <Collapsible accordion={true}>
            <CollapsibleItem
              expanded={true}
              header='Details '
              icon={<Icon>info_outline</Icon>}
              node='div'
            >
              <div>
                Available Seats - {navData.availableSeats}
                <br />
                Start Time - {movie.startTime}
                <br />
                End Time - {movie.reachTime}
                <br />
                Price - {movie.fare}
              </div>
            </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header='Find More Buses'
              icon={<Icon>place</Icon>}
              node='div'
            >
              View All The movies... 

              <Link to='/dashboard'>
                
                <button> Find More Movies </button>
              </Link>
            </CollapsibleItem>
            {seats.includes(id) && (
              <Fragment>
                <CollapsibleItem
                  expanded={false}
                  header='Cancel the booking'
                  icon={<Icon>cancel</Icon>}
                  node='div'
                >
                  Cancel your current booking <br/> 
                  <button> Cancel </button>
                </CollapsibleItem>
              </Fragment>
            )}
          </Collapsible>
        </div>
      )}
    </Fragment>
  );
};

MoviePageNav.propTypes = {};

export default MoviePageNav;
