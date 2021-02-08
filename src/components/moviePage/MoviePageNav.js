import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import BusPageComp from './BusPageComp';
const BusPageNav = ({ bus, seats, id, role ,resetBus}) => {
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
              Start Time - {bus.startTime}
              <br />
              Reach Time - {bus.reachTime}
              <br />
              Price - {bus.fare}
            </div>
          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header='All Buses'
            icon={<Icon>place</Icon>}
            node='div'
          >
            View All Buses... 
            <br/>
            <Link to='/buses'>
              
              <button> Buses </button>
            </Link>
          </CollapsibleItem>
          
              <CollapsibleItem
                expanded={false}
                header='Reset All seats'
                icon={<Icon>cancel</Icon>}
                node='div'
              >
                Once reset all the bookings will be cancelled <br /> 
                <button onClick={()=>{resetBus(bus._id)}}> Reset </button>
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
                Start Time - {bus.startTime}
                <br />
                Reach Time - {bus.reachTime}
                <br />
                Price - {bus.fare}
              </div>
            </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header='Find More Buses'
              icon={<Icon>place</Icon>}
              node='div'
            >
              View All The buses... 

              <Link to='/dashboard'>
                
                <button> Find More Buses </button>
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

BusPageNav.propTypes = {};

export default BusPageNav;
